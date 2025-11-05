
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
      // It's common for users to close the popup, so we don't need to log this specific error.
      if (error.code !== 'auth/popup-closed-by-user') {
        console.error("Google sign-in error", error);
      }
  });
}

/** Initiate sign-in with Microsoft. */
export function signInWithMicrosoft(authInstance: Auth): void {
  const provider = new OAuthProvider('microsoft.com');
  signInWithPopup(authInstance, provider).catch(error => {
      // It's common for users to close the popup, so we don't need to log this specific error.
      if (error.code !== 'auth/popup-closed-by-user') {
        console.error("Microsoft sign-in error", error);
      }
  });
}
