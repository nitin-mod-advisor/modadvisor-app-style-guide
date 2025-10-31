
'use client';

import React, { useState, useEffect } from 'react';
import { doc } from 'firebase/firestore';
import { useFirestore, useDoc, useMemoFirebase, setDocumentNonBlocking } from '@/firebase';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TypographySettings } from '@/lib/types';

const TYPOGRAPHY_SETTINGS_ID = "typography";
const SETTINGS_COLLECTION = "settings";
const DEFAULT_FONT = "'Inter', sans-serif";

const fonts = [
  { name: 'Inter', family: "'Inter', sans-serif" },
  { name: 'Roboto', family: "'Roboto', sans-serif" },
  { name: 'Lato', family: "'Lato', sans-serif" },
  { name: 'Open Sans', family: "'Open Sans', sans-serif" },
  { name: 'Montserrat', family: "'Montserrat', sans-serif" },
  { name: 'Poppins', family: "'Poppins', sans-serif" },
  { name: 'Source Code Pro', family: "'Source Code Pro', monospace" },
  { name: 'Playfair Display', family: "'Playfair Display', serif" },
];

export default function TypographyPage() {
  const [activeFont, setActiveFont] = useState<string | null>(null);
  const firestore = useFirestore();

  const settingsRef = useMemoFirebase(() => {
    if (!firestore) return null;
    return doc(firestore, SETTINGS_COLLECTION, TYPOGRAPHY_SETTINGS_ID);
  }, [firestore]);

  const { data: settingsData, isLoading: isSettingsLoading } = useDoc<TypographySettings>(settingsRef);

  // This is the corrected effect to handle initial data loading and persistence.
  useEffect(() => {
    // If we have data from Firestore, it is the source of truth.
    if (settingsData) {
      setActiveFont(settingsData.fontFamily);
      return;
    }
    
    // This is the critical check. We only write the default if:
    // 1. Loading is complete.
    // 2. We have confirmed there is no data.
    // 3. We haven't already tried to set the font locally (to prevent race conditions).
    if (!isSettingsLoading && !settingsData && settingsRef && activeFont === null) {
      // Set the default font locally and save it to the database.
      // This block will only run ONCE when the document doesn't exist.
      setActiveFont(DEFAULT_FONT);
      setDocumentNonBlocking(settingsRef, { fontFamily: DEFAULT_FONT }, { merge: false });
    }
  }, [settingsData, isSettingsLoading, settingsRef, activeFont]);
  
  // This local effect is for the typography page itself. 
  // The global font is handled by GlobalFontUpdater in the layout.
  useEffect(() => {
    if (activeFont) {
        document.documentElement.style.setProperty('--font-body', activeFont);
    }
  }, [activeFont]);

  const handleFontChange = (fontFamily: string) => {
    setActiveFont(fontFamily);
    if (settingsRef) {
      setDocumentNonBlocking(settingsRef, { fontFamily }, { merge: true });
    }
  };

  const getFontFamilyName = (fontFamily: string | null) => {
    if (!fontFamily) return '';
    return fontFamily.split(',')[0].replace(/'/g, '');
  };

  if (isSettingsLoading && !settingsData) {
    return (
      <div className="flex items-center justify-center h-screen">
          <p>Loading typography settings...</p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8">
      <h2 className="text-2xl font-bold">Typography</h2>
      <Card>
        <CardHeader>
          <CardTitle>Global Font Family</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Select a font to apply it to the entire application. The change is saved to the database.
          </p>
          <Select value={activeFont ?? ''} onValueChange={handleFontChange}>
            <SelectTrigger className="w-full max-w-xs">
              <SelectValue placeholder="Select a font">
                {getFontFamilyName(activeFont)}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {fonts.map((font) => (
                <SelectItem key={font.name} value={font.family}>
                  {font.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Font Preview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none dark:prose-invert">
          <h1>The quick brown fox jumps over the lazy dog</h1>
          <h2>The quick brown fox jumps over the lazy dog</h2>
          <h3>The quick brown fox jumps over the lazy dog</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi. Proin

            porttitor, orci nec nonummy molestie, enim est eleifend mi, non
            fermentum diam nisl sit amet erat.
          </p>
          <p>
            Duis semper. Duis arcu massa, scelerisque vitae, consequat in,
            pretium a, enim. Pellentesque congue. Ut in risus volutpat libero
            pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas
            leo in pede.
          </p>
          <blockquote>
            "Design is not just what it looks like and feels like. Design is
            how it works." - Steve Jobs
          </blockquote>
        </CardContent>
      </Card>
    </div>
  );
}
