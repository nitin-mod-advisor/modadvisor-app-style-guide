"use client"

import React, { useEffect, useMemo } from 'react';
import { INITIAL_TOKENS } from '@/lib/style-guide-data';
import { ColorPalette } from '@/components/style-guide/color-palette';
import { CodePreviews } from '@/components/style-guide/code-previews';
import { useCollection, useUser, useFirestore, useMemoFirebase } from '@/firebase';
import { type ColorToken } from '@/lib/types';
import { collection, doc, setDoc, writeBatch } from 'firebase/firestore';

const PALETTE_ID = "default";

export default function Home() {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();

  const colorsCollectionRef = useMemoFirebase(() =>
    user ? collection(firestore, 'users', user.uid, 'colorPalettes', PALETTE_ID, 'colors') : null
  , [firestore, user]);

  const { data: tokens, isLoading: areTokensLoading } = useCollection<ColorToken>(colorsCollectionRef);
  
  const [isClient, setIsClient] = React.useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Wait for user and for tokens to be loaded. If tokens is not null/undefined and is an empty array, it means collection is empty and we should bootstrap.
    if (!user || areTokensLoading || (tokens && tokens.length > 0)) return;
    
    // If tokens is an empty array, it means the collection exists but is empty.
    if (tokens === null || tokens.length === 0) {
      const bootstrapData = async () => {
          if (!user || !firestore || !colorsCollectionRef) return;
          console.log("Bootstrapping data...");
          const paletteDocRef = doc(firestore, 'users', user.uid, 'colorPalettes', PALETTE_ID);
          const batch = writeBatch(firestore);

          batch.set(paletteDocRef, {
              id: PALETTE_ID,
              name: 'Default Palette',
              description: 'The default color palette for the app.'
          });

          INITIAL_TOKENS.forEach(token => {
              const colorDocRef = doc(colorsCollectionRef, token.name.replace('--', ''));
              batch.set(colorDocRef, token);
          });

          try {
            await batch.commit();
            console.log("Bootstrap complete.");
          } catch(e) {
            console.error("Error bootstrapping data", e);
          }
      };

      bootstrapData();
    }
  }, [user, areTokensLoading, tokens, firestore, colorsCollectionRef]);


  useEffect(() => {
    if (typeof window === 'undefined' || !isClient || !tokens) return;

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
    if (!colorsCollectionRef) return;
    const colorId = tokenName.replace('--', '');
    const docRef = doc(colorsCollectionRef, colorId);
    const updatedToken = tokens?.find(t => t.name === tokenName);
    if (updatedToken) {
      // Create a new object without the 'id' field for Firestore
      const { id, ...tokenForFirestore } = updatedToken;
      setDoc(docRef, { ...tokenForFirestore, [theme]: value });
    }
  };
  
  if (!isClient || isUserLoading || areTokensLoading) {
    return (
        <div className="flex items-center justify-center h-screen">
            <p>Loading...</p>
        </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8">
      <ColorPalette tokens={tokens || []} onColorChange={handleColorChange} />
      <CodePreviews tokens={tokens || []} />
    </div>
  );
}
