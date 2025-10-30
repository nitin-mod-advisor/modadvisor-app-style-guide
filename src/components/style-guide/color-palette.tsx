"use client"

import React from 'react';
import type { ColorToken } from '@/lib/style-guide-data';
import { useTheme } from '@/components/theme-provider';

interface ColorPaletteProps {
  tokens: ColorToken[];
  onColorChange: (tokenName: string, theme: 'light' | 'dark', value: string) => void;
}

export function ColorPalette({ tokens, onColorChange }: ColorPaletteProps) {
  const { theme } = useTheme();

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
                    <input
                      type="color"
                      value={token.light}
                      onChange={(e) => onColorChange(token.name, 'light', e.target.value)}
                      className="w-8 h-8 p-0 border-none rounded-md cursor-pointer bg-transparent"
                      aria-label={`Light theme color for ${token.name}`}
                    />
                    <span className="font-mono text-sm">{token.light}</span>
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={token.dark}
                      onChange={(e) => onColorChange(token.name, 'dark', e.target.value)}
                      className="w-8 h-8 p-0 border-none rounded-md cursor-pointer bg-transparent"
                       aria-label={`Dark theme color for ${token.name}`}
                    />
                    <span className="font-mono text-sm">{token.dark}</span>
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
