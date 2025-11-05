
'use client';

import { firebaseConfig } from '@/firebase/config';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';

let firebaseApp: FirebaseApp | null = null;
let auth: Auth | null = null;
let firestore: Firestore | null = null;

function getFirebaseServices() {
  if (typeof window !== 'undefined') {
    if (!getApps().length) {
      firebaseApp = initializeApp(firebaseConfig);
      auth = getAuth(firebaseApp);
      firestore = getFirestore(firebaseApp);
    } else {
      firebaseApp = getApp();
      auth = getAuth(firebaseApp);
      firestore = getFirestore(firebaseApp);
    }
  }
  
  // Return nulls on the server
  return { firebaseApp, auth, firestore };
}


export function initializeFirebase() {
  return getFirebaseServices();
}


export * from './provider';
export * from './client-provider';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './non-blocking-updates';
export * from './auth/auth-provider';
export * from './errors';
export * from './error-emitter';
