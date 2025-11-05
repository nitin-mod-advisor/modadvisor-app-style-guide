
'use client';

import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  useAuth,
  useUser,
  signInWithGoogle,
  signInWithMicrosoft,
} from '@/firebase';
import { User, LogOut } from 'lucide-react';

export function UserMenu() {
  const auth = useAuth();
  const { user, isUserLoading } = useUser();

  const handleSignOut = () => {
    if (auth) {
      auth.signOut();
    }
  };

  if (isUserLoading) {
    return <div className="w-24 h-8 bg-muted rounded-md animate-pulse" />;
  }

  if (!user || user.isAnonymous) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>Guest User</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Sign In</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => auth && signInWithGoogle(auth)}>
            Sign in with Google
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => auth && signInWithMicrosoft(auth)}>
            Sign in with Microsoft
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={user.photoURL ?? undefined} />
            <AvatarFallback>
              {user.displayName?.charAt(0) || user.email?.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <span>{user.displayName || user.email}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
