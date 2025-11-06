'use client';

import React, { useMemo, type ReactNode } from 'react';
import { FirebaseProvider } from '@/firebase/provider';
import { initializeFirebase } from '@/firebase';

interface FirebaseClientProviderProps {
  children: ReactNode;
}

export function FirebaseClientProvider({ children }: FirebaseClientProviderProps) {
  // useMemo ensures this only runs once on the client.
  const firebaseServices = useMemo(() => {
    // This will return nulls on the server, and the actual services on the client.
    return initializeFirebase();
  }, []);

  // During server-side rendering, `firebaseServices.firebaseApp` will be null.
  // In this case, we render the children directly without the provider.
  // This prevents hooks like `useFirebase` from being called outside a provider context on the server.
  if (!firebaseServices.firebaseApp) {
    return <>{children}</>;
  }

  // On the client, `firebaseServices` will be populated, and we can render the provider.
  return (
    <FirebaseProvider
      firebaseApp={firebaseServices.firebaseApp}
      auth={firebaseServices.auth!}
      firestore={firebaseServices.firestore!}
    >
      {children}
    </FirebaseProvider>
  );
}
