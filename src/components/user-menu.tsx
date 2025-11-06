
'use client';

import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

// Dynamically import the UserMenuClient with SSR disabled.
const UserMenuClient = dynamic(() => import('./user-menu-client'), {
  ssr: false, // This is the crucial part
  loading: () => <Skeleton className="h-8 w-24 rounded-md" />, // Provide a loading skeleton
});

// The main UserMenu component now just acts as a wrapper for the client-only version.
export function UserMenu() {
  return <UserMenuClient />;
}
