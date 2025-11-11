
'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

export function ModLogo({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-8 h-8", className)}>
      {/* Black logo for light mode */}
      <Image
        src="/logo_black.png"
        alt="Logo"
        width={32}
        height={32}
        className="block dark:hidden"
        unoptimized
      />
      {/* White logo for dark mode */}
      <Image
        src="/logo_white.png"
        alt="Logo"
        width={32}
        height={32}
        className="hidden dark:block"
        unoptimized
      />
    </div>
  );
}
