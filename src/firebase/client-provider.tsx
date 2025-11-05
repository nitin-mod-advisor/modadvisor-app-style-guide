'use client';

import React, { useMemo, type ReactNode } from 'react';
import { FirebaseProvider } from '@/firebase/provider';
import { initializeFirebase } from '@/firebase';

interface FirebaseClientProviderProps {
  children: ReactNode;
}

export function FirebaseClientProvider({ children }: FirebaseClientProviderProps) {
  const firebaseServices = useMemo(() => {
    // This function now correctly gets or initializes the app on the client side.
    return initializeFirebase();
  }, []);

  // On the server, firebaseServices will contain nulls. We can render a loading state or nothing.
  // On the client, it will contain the actual Firebase services.
  if (!firebaseServices.firebaseApp || !firebaseServices.auth || !firebaseServices.firestore) {
    // This will be the case during server-side rendering.
    // You can return a loader here if you want.
    return <>{children}</>;
  }

  return (
    <FirebaseProvider
      firebaseApp={firebaseServices.firebaseApp}
      auth={firebaseServices.auth}
      firestore={firebaseServices.firestore}
    >
      {children}
    </FirebaseProvider>
  );
}
