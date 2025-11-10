
'use client';

import React, { useState, useEffect, useContext } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { FirebaseContext, useFirestore, useDoc, useMemoFirebase, useUser, setDocumentNonBlocking } from '@/firebase';
import { ColorPalette as ColorPaletteType, ColorToken } from '@/lib/types';
import { ColorPalette } from '@/components/style-guide/color-palette';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from '@/components/ui/sheet';
import { Palette } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { THEMES } from '@/lib/style-guide-data';
import { Skeleton } from './ui/skeleton';

const PALETTES_COLLECTION = "palettes";
const ALLOWED_USERS_COLLECTION = "allowed_users";

function ClientFloatingThemeEditor({ activeTheme }: { activeTheme: string }) {
  const [tokens, setTokens] = useState<ColorToken[]>([]);
  const [isAuthorized, setIsAuthorized] = useState(false);

  const firestore = useFirestore();
  const { user, isUserLoading } = useUser();
  const { toast } = useToast();

  const paletteRef = useMemoFirebase(() => {
    if (!firestore || !activeTheme) return null;
    return doc(firestore, PALETTES_COLLECTION, activeTheme);
  }, [firestore, activeTheme]);

  const { data: paletteData, isLoading: isPaletteLoading } = useDoc<ColorPaletteType>(paletteRef);

  // Authorization check
  useEffect(() => {
    if (user && !user.isAnonymous && firestore) {
      const checkAuth = async () => {
        if (!user.email) {
          setIsAuthorized(false);
          return;
        }
        const userDoc = await getDoc(doc(firestore, ALLOWED_USERS_COLLECTION, user.email));
        setIsAuthorized(userDoc.exists());
      };
      checkAuth();
    } else {
      setIsAuthorized(false);
    }
  }, [user, firestore]);

  // Data loading and fallback
  useEffect(() => {
    if (paletteData) {
      setTokens(paletteData.tokens);
    } else if (!isPaletteLoading) {
      const localTheme = THEMES.find(t => t.name === activeTheme);
      if (localTheme) {
        setTokens(localTheme.tokens);
      }
    }
  }, [paletteData, isPaletteLoading, activeTheme]);

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
  
  const isLoading = isUserLoading || isPaletteLoading;
  const canEdit = isAuthorized && !user?.isAnonymous;

  return (
      <SheetContent className="w-full max-w-none sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Live Theme Editor</SheetTitle>
          <SheetDescription>
            Modify the colors for the active theme. Changes are saved automatically.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-8">
            {isLoading ? (
                 <div className="space-y-4">
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-48 w-full" />
                    <Skeleton className="h-48 w-full" />
                </div>
            ) : tokens.length > 0 ? (
                 <ColorPalette tokens={tokens} onColorChange={handleColorChange} disabled={!canEdit} />
            ) : (
                <p>No color tokens for this theme.</p>
            )}
        </div>
      </SheetContent>
  );
}

export function FloatingThemeEditor({ activeTheme }: { activeTheme: string }) {
    const firebaseContext = useContext(FirebaseContext);

    // Render nothing on the server or if Firebase isn't ready
    if (!firebaseContext || !firebaseContext.firestore) {
        return (
             <Button
                variant="default"
                className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50"
                size="icon"
                disabled
            >
                <Palette className="h-6 w-6" />
                <span className="sr-only">Edit Theme</span>
            </Button>
        )
    }

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="default"
                    className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50"
                    size="icon"
                >
                    <Palette className="h-6 w-6" />
                    <span className="sr-only">Edit Theme</span>
                </Button>
            </SheetTrigger>
            <ClientFloatingThemeEditor activeTheme={activeTheme} />
        </Sheet>
    );
}
