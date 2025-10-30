"use client"

import React from 'react';
import type { ColorToken } from '@/lib/style-guide-data';
import { useTheme } from '@/components/theme-provider';
import { Input } from '@/components/ui/input';

interface ColorPaletteProps {
  tokens: ColorToken[];
  onColorChange: (tokenName: string, theme: 'light' | 'dark', value: string) => void;
}

export function ColorPalette({ tokens, onColorChange }: ColorPaletteProps) {
  const { theme } = useTheme();

  const handleTextChange = (tokenName: string, theme: 'light' | 'dark', value: string) => {
    // Basic validation for hex code
    if (/^#([0-9A-F]{3}){1,2}$/i.test(value) || /^rgba?\(.+\)$/i.test(value) || value === 'transparent') {
      onColorChange(tokenName, theme, value);
    } else if (/^#([0-9A-F]{0,6})$/i.test(value) || value === '') {
       onColorChange(tokenName, theme, value);
    }
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Color Palette</h2>
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-max border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="p-3 text-left text-sm font-semibold text-text-muted">Token</th>
              <th className="p-3 text-left text-sm font-semibold text-text-muted">Role</th>
              <th className="p-3 text-left text-sm font-semibold text-text-muted">Light</th>
              <th className="p-3 text-left text-sm font-semibold text-text-muted">Dark</th>
            </tr>
          </thead>
          <tbody>
            {tokens.map(token => (
              <tr key={token.name} className="border-b border-border hover:bg-surface-2 transition-colors">
                <td className="p-3 font-mono text-sm text-accent">{token.name}</td>
                <td className="p-3 text-sm text-text-muted">{token.role}</td>
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8">
                      <input
                        type="color"
                        value={token.light.startsWith('#') ? token.light : '#ffffff'}
                        onChange={(e) => onColorChange(token.name, 'light', e.target.value)}
                        className="w-full h-full p-0 border-none rounded-md cursor-pointer bg-transparent absolute inset-0 opacity-0"
                        aria-label={`Light theme color for ${token.name}`}
                      />
                       <div 
                        className="w-8 h-8 rounded-md border border-border"
                        style={{ backgroundColor: token.light }}
                      />
                    </div>
                    <Input
                      type="text"
                      value={token.light}
                      onChange={(e) => handleTextChange(token.name, 'light', e.target.value)}
                      className="font-mono text-sm w-32"
                      aria-label={`Light theme hex code for ${token.name}`}
                    />
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex items-center gap-2">
                     <div className="relative w-8 h-8">
                      <input
                        type="color"
                        value={token.dark.startsWith('#') ? token.dark : '#000000'}
                        onChange={(e) => onColorChange(token.name, 'dark', e.target.value)}
                        className="w-full h-full p-0 border-none rounded-md cursor-pointer bg-transparent absolute inset-0 opacity-0"
                        aria-label={`Dark theme color for ${token.name}`}
                      />
                       <div 
                        className="w-8 h-8 rounded-md border border-border"
                        style={{ backgroundColor: token.dark }}
                      />
                    </div>
                    <Input
                      type="text"
                      value={token.dark}
                      onChange={(e) => handleTextChange(token.name, 'dark', e.target.value)}
                      className="font-mono text-sm w-32"
                      aria-label={`Dark theme hex code for ${token.name}`}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
