"use client"

import React, { useEffect, useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { INITIAL_TOKENS } from '@/lib/style-guide-data';
import { ColorPalette } from '@/components/style-guide/color-palette';
import { CodePreviews } from '@/components/style-guide/code-previews';
import { type ColorToken, type ColorPalette as ColorPaletteType } from '@/lib/types';
import { useFirestore, useDoc, useMemoFirebase, useUser, initiateAnonymousSignIn, useAuth } from '@/firebase';
import { useTheme } from 'next-themes';

const PALETTE_ID = "default-palette";

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
  
  if (!isClient || isUserLoading || isPaletteLoading) {
    return (
        <div className="flex items-center justify-center h-screen">
            <p>Loading...</p>
        </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8">
      <ColorPalette tokens={tokens} onColorChange={handleColorChange} />
      <CodePreviews tokens={tokens} />
    </div>
  );
}
