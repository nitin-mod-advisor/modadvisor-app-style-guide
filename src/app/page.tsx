"use client"

import React, { useEffect, useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { INITIAL_TOKENS } from '@/lib/style-guide-data';
import { ColorPalette } from '@/components/style-guide/color-palette';
import { CodePreviews } from '@/components/style-guide/code-previews';
import { type ColorToken, type ColorPalette as ColorPaletteType } from '@/lib/types';
import { useFirestore, useDoc, useMemoFirebase, useUser, initiateAnonymousSignIn, useAuth } from '@/firebase';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PlusCircle } from 'lucide-react';

const PALETTE_ID = "default-palette";

const formSchema = z.object({
  name: z.string().startsWith('--', { message: "Must start with --" }),
  role: z.string().min(1, { message: "Role is required." }),
  light: z.string().refine(val => val.startsWith('hsl(') || val.startsWith('#'), { message: "Must be a valid HSL or hex color" }),
  dark: z.string().refine(val => val.startsWith('hsl(') || val.startsWith('#'), { message: "Must be a valid HSL or hex color" }),
});

function AddVariableDialog({ onAddVariable }: { onAddVariable: (variable: ColorToken) => void }) {
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
        <Button>
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

export default function Home() {
  const [tokens, setTokens] = useState<ColorToken[]>(INITIAL_TOKENS);
  const [isClient, setIsClient] = React.useState(false);

  const firestore = useFirestore();
  const auth = useAuth();
  const { user, isUserLoading } = useUser();
  const { theme } = useTheme();
  
  const paletteRef = useMemoFirebase(() => {
    if (!firestore) return null;
    return doc(firestore, "palettes", PALETTE_ID);
  }, [firestore]);

  const { data: paletteData, isLoading: isPaletteLoading } = useDoc<ColorPaletteType>(paletteRef);
  
  useEffect(() => {
    if (!user && !isUserLoading && auth) {
      initiateAnonymousSignIn(auth);
    }
  }, [user, isUserLoading, auth]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (paletteData) {
      setTokens(paletteData.tokens);
    }
  }, [paletteData]);

  useEffect(() => {
    if (!isPaletteLoading && !paletteData && paletteRef) {
      const initialPalette: ColorPaletteType = {
        id: PALETTE_ID,
        tokens: INITIAL_TOKENS,
      };
      setDoc(paletteRef, initialPalette);
    }
  }, [isPaletteLoading, paletteData, paletteRef]);
  
  useEffect(() => {
    if (typeof window === 'undefined' || !isClient) return;

    const styleId = 'live-style-guide-variables';
    let styleTag = document.getElementById(styleId);
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = styleId;
      document.head.appendChild(styleTag);
    }
    
    const currentTheme = theme === 'system' 
      ? window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' 
      : theme;

    const root = document.documentElement;

    tokens.forEach(token => {
      const value = currentTheme === 'light' ? token.light : token.dark;
       if (value.startsWith('hsl')) {
        const hslValues = value.replace('hsl(', '').replace(')', '').replace(/%/g, '');
        root.style.setProperty(token.name, hslValues);
      } else {
        // Fallback for hex or other direct values, though HSL is preferred for theming
        root.style.setProperty(token.name, value);
      }
    });

  }, [tokens, theme, isClient]);

  const handleColorChange = (tokenName: string, theme: 'light' | 'dark', value: string) => {
    const newTokens = tokens.map(token =>
      token.name === tokenName ? { ...token, [theme]: value } : token
    );
    setTokens(newTokens);
    if (paletteRef) {
      setDoc(paletteRef, { tokens: newTokens }, { merge: true });
    }
  };

  const handleAddVariable = (variable: ColorToken) => {
    const newTokens = [...tokens, variable];
    setTokens(newTokens);
    if (paletteRef) {
      setDoc(paletteRef, { tokens: newTokens }, { merge: true });
    }
  };
  
  if (!isClient || isUserLoading || isPaletteLoading) {
    return (
        <div className="flex items-center justify-center h-screen">
            <p>Loading...</p>
        </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Color Palette</h2>
        <AddVariableDialog onAddVariable={handleAddVariable} />
      </div>
      <ColorPalette tokens={tokens} onColorChange={handleColorChange} />
      <CodePreviews tokens={tokens} />
    </div>
  );
}
