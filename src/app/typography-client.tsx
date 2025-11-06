
'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { doc, getDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useFirestore, useDoc, useMemoFirebase, setDocumentNonBlocking, useUser, useAuth, addDocumentNonBlocking } from '@/firebase';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TypographySettings } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

const TYPOGRAPHY_SETTINGS_ID = "typography";
const SETTINGS_COLLECTION = "settings";
const ALLOWED_USERS_COLLECTION = "allowed_users";
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

export default function TypographyClient() {
  const [activeFont, setActiveFont] = useState<string | null>(null);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const firestore = useFirestore();
  const { user, isUserLoading } = useUser();
  const { toast } = useToast();

  const settingsRef = useMemoFirebase(() => {
    if (!firestore) return null;
    return doc(firestore, SETTINGS_COLLECTION, TYPOGRAPHY_SETTINGS_ID);
  }, [firestore]);

  const { data: settingsData, isLoading: isSettingsLoading } = useDoc<TypographySettings>(settingsRef);

   // This effect handles user authentication state
  useEffect(() => {
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
            // Don't log here to avoid duplicate logs from home page
          } else {
            setIsAuthorized(false);
            // Don't toast here to avoid duplicate toasts
          }
        } catch (error) {
          console.error("Authorization check failed:", error);
          setIsAuthorized(false);
        }
      };
      checkAuthorization();
    } else {
      // If user is anonymous or not logged in, they are not authorized
      setIsAuthorized(false);
    }
  }, [user, firestore]);

  // This is the corrected effect to handle initial data loading and persistence.
  useEffect(() => {
    if (settingsData) {
      setActiveFont(settingsData.fontFamily);
      return;
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
    if (!isAuthorized) {
        toast({
            variant: "destructive",
            title: "Not Authorized",
            description: "You must be an authorized user to make changes. Please sign in."
        });
        return;
    }
    setActiveFont(fontFamily);
    if (settingsRef) {
      setDocumentNonBlocking(settingsRef, { fontFamily }, { merge: true });
    }
  };

  const getFontFamilyName = (fontFamily: string | null) => {
    if (!fontFamily) return '';
    return fontFamily.split(',')[0].replace(/'/g, '');
  };

  const canEdit = isAuthorized && !user?.isAnonymous;

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
          <Select value={activeFont ?? ''} onValueChange={handleFontChange} disabled={!canEdit}>
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
