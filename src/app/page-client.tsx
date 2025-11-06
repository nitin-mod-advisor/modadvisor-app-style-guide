
"use client"

import React, { useEffect, useState, useMemo } from 'react';
import { doc, collection, getDoc, serverTimestamp } from 'firebase/firestore';
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { ColorPalette } from '@/components/style-guide/color-palette';
import { CodePreviews } from '@/components/style-guide/code-previews';
import { type ColorToken, type ColorPalette as ColorPaletteType, AllowedUser } from '@/lib/types';
import { useFirestore, useDoc, useMemoFirebase, useUser, initiateAnonymousSignIn, useAuth, setDocumentNonBlocking, addDocumentNonBlocking } from '@/firebase';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PlusCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PALETTE_ID = "default-palette";
const ALLOWED_USERS_COLLECTION = "allowed_users";

const formSchema = z.object({
  name: z.string().startsWith('--', { message: "Must start with --" }),
  role: z.string().min(1, { message: "Role is required." }),
  light: z.string().refine(val => val.startsWith('hsl(') || val.startsWith('#'), { message: "Must be a valid HSL or hex color" }),
  dark: z.string().refine(val => val.startsWith('hsl(') || val.startsWith('#'), { message: "Must be a valid HSL or hex color" }),
});

function AddVariableDialog({ onAddVariable, disabled }: { onAddVariable: (variable: ColorToken) => void, disabled: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "--",
      role: "",
      light: "hsl( 0 0% 0% )",
      dark: "hsl( 0 0% 100% )",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    onAddVariable(values);
    form.reset();
    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button disabled={disabled}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Variable
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Color Variable</DialogTitle>
          <DialogDescription>
            Define a new color token for your palette.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Token Name</FormLabel>
                  <FormControl>
                    <Input placeholder="--new-color" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Tertiary background" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="light"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Light Theme Color</FormLabel>
                  <FormControl>
                    <Input placeholder="hsl(240 10% 98%) or #FFFFFF" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dark"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dark Theme Color</FormLabel>
                  <FormControl>
                    <Input placeholder="hsl(222.2 84% 4.9%) or #000000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Add Variable</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default function PageClient() {
  const [tokens, setTokens] = useState<ColorToken[]>([]);
  const [isClient, setIsClient] = React.useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);

  const firestore = useFirestore();
  const auth = useAuth();
  const { user, isUserLoading } = useUser();
  const { toast } = useToast();
  
  const paletteRef = useMemoFirebase(() => {
    if (!firestore) return null;
    return doc(firestore, "palettes", PALETTE_ID);
  }, [firestore]);

  const { data: paletteData, isLoading: isPaletteLoading } = useDoc<ColorPaletteType>(paletteRef);
  
  // This effect handles user authentication state
  useEffect(() => {
    // If not loading and no user, sign in anonymously
    if (!isUserLoading && !user && auth) {
      initiateAnonymousSignIn(auth);
    }
    
    // If there is a user and they are not anonymous, check for authorization
    if (user && !user.isAnonymous && firestore) {
      const checkAuthorization = async () => {
        if (!user.email) {
          setIsAuthorized(false);
          return;
        }
        const userDocRef = doc(firestore, ALLOWED_USERS_COLLECTION, user.email);
        const loginAttemptsRef = collection(firestore, 'login_attempts');

        try {
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            setIsAuthorized(true);
             addDocumentNonBlocking(loginAttemptsRef, {
                email: user.email,
                status: 'success',
                timestamp: serverTimestamp()
            });
          } else {
            setIsAuthorized(false);
            toast({
              variant: "destructive",
              title: "Authorization Failed",
              description: "Your email is not authorized to make edits.",
            });
            addDocumentNonBlocking(loginAttemptsRef, {
                email: user.email,
                status: 'failure',
                reason: 'Email not in allowed list',
                timestamp: serverTimestamp()
            });
          }
        } catch (error) {
          console.error("Authorization check failed:", error);
          setIsAuthorized(false);
           addDocumentNonBlocking(loginAttemptsRef, {
                email: user.email,
                status: 'failure',
                reason: 'Error checking authorization',
                timestamp: serverTimestamp()
            });
        }
      };
      checkAuthorization();
    } else {
      // If user is anonymous or not logged in, they are not authorized
      setIsAuthorized(false);
    }
  }, [user, isUserLoading, auth, firestore, toast]);


  useEffect(() => {
    setIsClient(true);
  }, []);

  // Effect to synchronize Firestore data to local state AND bootstrap if necessary.
  useEffect(() => {
    if (paletteData) {
      setTokens(paletteData.tokens);
    } 
  }, [paletteData, isPaletteLoading, paletteRef]);
  
  // Effect to dynamically update CSS variables in the document head
  useEffect(() => {
    if (typeof window === 'undefined' || !isClient || tokens.length === 0) return;

    const styleId = 'dynamic-theme-styles';
    let styleTag = document.getElementById(styleId) as HTMLStyleElement | null;
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = styleId;
      document.head.appendChild(styleTag);
    }
    
    const lightVars = tokens.map(token => {
        const value = token.light.startsWith('hsl') 
            ? token.light.replace('hsl(', '').replace(')', '').replace(/%/g, '')
            : token.light;
        return `  ${token.name}: ${value};`;
    }).join('\n');

    const darkVars = tokens.map(token => {
        const value = token.dark.startsWith('hsl') 
            ? token.dark.replace('hsl(', '').replace(')', '').replace(/%/g, '')
            : token.dark;
        return `  ${token.name}: ${value};`;
    }).join('\n');
    
    const css = `
:root {
${lightVars}
}

.dark {
${darkVars}
}`;

    styleTag.innerHTML = css;

  }, [tokens, isClient]);

  const updateTokens = (newTokens: ColorToken[]) => {
    if (!isAuthorized) {
        toast({
            variant: 'destructive',
            title: "Not Authorized",
            description: "You must be an authorized user to make changes."
        });
        return;
    }
    setTokens(newTokens);
    if (paletteRef) {
      setDocumentNonBlocking(paletteRef, { tokens: newTokens }, { merge: true });
    }
  };

  const handleColorChange = (tokenName: string, theme: 'light' | 'dark', value: string) => {
    const newTokens = tokens.map(token =>
      token.name === tokenName ? { ...token, [theme]: value } : token
    );
    updateTokens(newTokens);
  };

  const handleAddVariable = (variable: ColorToken) => {
    const newTokens = [...tokens, variable];
    updateTokens(newTokens);
  };
  
  if (!isClient || isUserLoading || (isPaletteLoading && !paletteData)) {
    return (
        <div className="flex items-center justify-center h-screen">
            <p>Loading style guide...</p>
        </div>
    );
  }

  const canEdit = isAuthorized && !user?.isAnonymous;

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Color Palette</h2>
        <AddVariableDialog onAddVariable={handleAddVariable} disabled={!canEdit} />
      </div>
      {tokens.length > 0 ? (
        <>
          <ColorPalette tokens={tokens} onColorChange={handleColorChange} disabled={!canEdit} />
          <CodePreviews tokens={tokens} />
        </>
      ) : (
        <div className="flex items-center justify-center py-16">
          <p>No color tokens found. Add one to get started!</p>
        </div>
      )}
    </div>
  );
}
