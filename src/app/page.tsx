"use client"

import React, { useEffect, useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { INITIAL_TOKENS } from '@/lib/style-guide-data';
import { ColorPalette } from '@/components/style-guide/color-palette';
import { CodePreviews } from '@/components/style-guide/code-previews';
import { type ColorToken, type ColorPalette as ColorPaletteType } from '@/lib/types';
import { useFirestore, useDoc, useMemoFirebase, useUser, initiateAnonymousSignIn, useAuth } from '@/firebase';

const PALETTE_ID = "default-palette";

export default function Home() {
  const [tokens, setTokens] = useState<ColorToken[]>(INITIAL_TOKENS);
  const [isClient, setIsClient] = React.useState(false);

  const firestore = useFirestore();
  const auth = useAuth();
  const { user, isUserLoading } = useUser();
  
  const paletteRef = useMemoFirebase(() => {
    if (!firestore || !user) return null;
    return doc(firestore, "palettes", PALETTE_ID);
  }, [firestore, user]);

  const { data: paletteData, isLoading: isPaletteLoading } = useDoc<ColorPaletteType>(paletteRef);

  useEffect(() => {
    setIsClient(true);
    if (!user && !isUserLoading) {
      initiateAnonymousSignIn(auth);
    }
  }, [user, isUserLoading, auth]);

  useEffect(() => {
    // When data is loaded and exists, update the local state.
    if (paletteData) {
      setTokens(paletteData.tokens);
    }
  }, [paletteData]);

  useEffect(() => {
    // When loading is finished and no data exists, create it.
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

    const lightThemeCss = tokens.map(t => `${t.name}: ${t.light};`).join('\n  ');
    const darkThemeCss = tokens.map(t => `${t.name}: ${t.dark};`).join('\n  ');

    styleTag.innerHTML = `
[data-theme="light"] {
  ${lightThemeCss}
}
[data-theme="dark"] {
  ${darkThemeCss}
}
    `.trim();

  }, [tokens, isClient]);

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
