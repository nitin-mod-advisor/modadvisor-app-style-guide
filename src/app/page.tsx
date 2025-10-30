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
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-px">
      <div className="lg:col-span-2 p-4 sm:p-6 lg:p-8 space-y-8 lg:h-screen lg:overflow-y-auto">
        <ColorPalette tokens={tokens} onColorChange={handleColorChange} />
        <CodePreviews tokens={tokens} />
      </div>
      <div className="lg:col-span-3 bg-surface-2 p-4 sm:p-6 lg:p-8 lg:h-screen lg:overflow-y-auto">
        <div className="p-4 sm:p-6 lg:p-8">
            <h2 className="text-2xl font-bold mb-4">Live Component Preview</h2>
            <p className="text-text-muted mb-8">
                The components on the right will update automatically as you change the color tokens.
            </p>
        </div>
      </div>
    </div>
  );
}
