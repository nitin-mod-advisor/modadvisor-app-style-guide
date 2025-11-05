
'use client';
import {
  Auth,
  signInAnonymously,
  GoogleAuthProvider,
  OAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

/** Initiate anonymous sign-in (non-blocking). */
export function initiateAnonymousSignIn(authInstance: Auth): void {
  signInAnonymously(authInstance);
}

/** Initiate sign-in with Google. */
export function signInWithGoogle(authInstance: Auth): void {
  const provider = new GoogleAuthProvider();
  signInWithPopup(authInstance, provider).catch(error => {
      console.error("Google sign-in error", error);
  });
}

/** Initiate sign-in with Microsoft. */
export function signInWithMicrosoft(authInstance: Auth): void {
  const provider = new OAuthProvider('microsoft.com');
  signInWithPopup(authInstance, provider).catch(error => {
      console.error("Microsoft sign-in error", error);
  });
}
