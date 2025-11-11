'use client';

import { cn } from '@/lib/utils';

export function ModLogo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'w-8 h-8 bg-logo-black dark:bg-logo-white bg-contain bg-no-repeat bg-center',
        className
      )}
    >
        <span className="sr-only">Logo</span>
    </div>
  );
}
