
'use client';

import { useContext, useEffect } from 'react';
import { doc } from 'firebase/firestore';
import { useDoc, useMemoFirebase, FirebaseContext } from '@/firebase';
import { TypographySettings } from '@/lib/types';

const TYPOGRAPHY_SETTINGS_ID = "typography";
const SETTINGS_COLLECTION = "settings";

export function GlobalFontUpdater() {
  const firebaseContext = useContext(FirebaseContext);

  // This component will render on the server, but we need to ensure
  // that the hooks that depend on the Firebase context are only called on the client.
  // The context will be undefined on the server, so we return null.
  if (!firebaseContext || !firebaseContext.firestore) {
    return null;
  }
  
  return <ClientFontUpdater />;
}

function ClientFontUpdater() {
    const { firestore } = useContext(FirebaseContext)!;

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

    return null;
}
