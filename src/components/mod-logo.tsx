
'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

export function ModLogo({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-8 h-8", className)}>
      {/* Black logo for light mode */}
      <Image
        src="/logo-black.png"
        alt="Logo"
        width={32}
        height={32}
        className="dark:hidden"
      />
      {/* White logo for dark mode */}
      <Image
        src="/logo-white.png"
        alt="Logo"
        width={32}
        height={32}
        className="hidden dark:block"
      />
    </div>
  );
}
