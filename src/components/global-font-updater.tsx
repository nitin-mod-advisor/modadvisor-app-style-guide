'use client';

import { useEffect } from 'react';
import { doc } from 'firebase/firestore';
import { useFirestore, useDoc, useMemoFirebase } from '@/firebase';
import { TypographySettings } from '@/lib/types';

const TYPOGRAPHY_SETTINGS_ID = "typography";
const SETTINGS_COLLECTION = "settings";

export function GlobalFontUpdater() {
  const firestore = useFirestore();

  const settingsRef = useMemoFirebase(() => {
    if (!firestore) return null;
    return doc(firestore, SETTINGS_COLLECTION, TYPOGRAPHY_SETTINGS_ID);
  }, [firestore]);

  const { data: settingsData } = useDoc<TypographySettings>(settingsRef);

  useEffect(() => {
    if (settingsData?.fontFamily) {
      document.documentElement.style.setProperty('--font-body', settingsData.fontFamily);
    }
  }, [settingsData]);

  // This component does not render anything
  return null;
}
