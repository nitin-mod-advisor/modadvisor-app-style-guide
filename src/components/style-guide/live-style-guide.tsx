"use client"

import React, { useState, useEffect, useMemo } from 'react';
import { Palette, Code, Eye, Download, Clipboard } from 'lucide-react';
import { INITIAL_TOKENS, type ColorToken } from '@/lib/style-guide-data';
import { ThemeToggle } from '@/components/theme-toggle';
import { ColorPalette } from '@/components/style-guide/color-palette';
import { ComponentPreviews } from '@/components/style-guide/component-previews';
import { CodePreviews } from '@/components/style-guide/code-previews';
import { useTheme } from '@/components/theme-provider';

export default function LiveStyleGuide() {
  const [tokens, setTokens] = useState<ColorToken[]>(INITIAL_TOKENS);
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const styleId = 'live-style-guide-variables';
    let styleTag = document.getElementById(styleId);
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = styleId;
      document.head.appendChild(styleTag);
    }

    const lightThemeCss = tokens.map(t => `${t.name}: ${t.light};`).join('\n  ');
    const darkThemeCss = tokens.map(t => `${t.name}: ${t.dark};`).join('\n  ');

    styleTag.innerHTML = `
[data-theme="light"] {
  ${lightThemeCss}
}
[data-theme="dark"] {
  ${darkThemeCss}
}
    `.trim();

  }, [tokens]);

  const handleColorChange = (tokenName: string, theme: 'light' | 'dark', value: string) => {
    setTokens(currentTokens =>
      currentTokens.map(t =>
        t.name === tokenName ? { ...t, [theme]: value } : t
      )
    );
  };
  
  if (!isClient) {
    return null;
  }

  return (
    <div className="bg-bg text-text min-h-screen">
      <header className="sticky top-0 z-10 flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 bg-surface/80 backdrop-blur-sm border-b border-border">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            <Palette className="w-6 h-6" />
          </div>
          <h1 className="text-xl font-bold text-text">Live Style Guide Editor</h1>
        </div>
        <ThemeToggle />
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-5 gap-px">
        <div className="lg:col-span-2 p-4 sm:p-6 lg:p-8 space-y-8 lg:h-screen lg:overflow-y-auto">
          <ColorPalette tokens={tokens} onColorChange={handleColorChange} />
          <CodePreviews tokens={tokens} />
        </div>
        <div className="lg:col-span-3 bg-surface-2 p-4 sm:p-6 lg:p-8 lg:h-screen lg:overflow-y-auto">
          <ComponentPreviews />
        </div>
      </main>
    </div>
  );
}
