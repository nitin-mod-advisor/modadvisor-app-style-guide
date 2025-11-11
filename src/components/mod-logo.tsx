'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function ModLogo({ className }: { className?: string }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder or null on the server to avoid hydration mismatch
    return <div className={cn('w-8 h-8', className)}></div>;
  }

  return (
    <div className={cn('w-8 h-8 relative', className)}>
      {theme === 'dark' ? (
        <Image src="/logo_white.png" alt="Logo" fill sizes="32px" className="object-contain" />
      ) : (
        <Image src="/logo_black.png" alt="Logo" fill sizes="32px" className="object-contain" />
      )}
    </div>
  );
}
