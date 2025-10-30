"use client"

import React, { useState, useEffect } from 'react';
import { INITIAL_TOKENS, type ColorToken } from '@/lib/style-guide-data';
import { ColorPalette } from '@/components/style-guide/color-palette';
import { CodePreviews } from '@/components/style-guide/code-previews';

export default function Home() {
  const [tokens, setTokens] = useState<ColorToken[]>(INITIAL_TOKENS);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !isClient) return;

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

  }, [tokens, isClient]);

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
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 h-screen overflow-y-auto">
      <ColorPalette tokens={tokens} onColorChange={handleColorChange} />
      <CodePreviews tokens={tokens} />
    </div>
  );
}
