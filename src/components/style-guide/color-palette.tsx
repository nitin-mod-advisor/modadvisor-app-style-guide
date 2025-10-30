"use client"

import React from 'react';
import { ColorToken } from '@/lib/types';
import { useTheme } from 'next-themes';
import { Input } from '@/components/ui/input';

interface ColorPaletteProps {
  tokens: ColorToken[];
  onColorChange: (tokenName: string, theme: 'light' | 'dark', value: string) => void;
}

function convertToHex(hsl: string) {
  if (hsl.startsWith('#')) return hsl;
  if (!hsl.startsWith('hsl')) return '#000000';

  try {
    const [h, s, l] = hsl.match(/\d+(\.\d+)?/g)!.map(Number);
    const sNormalized = s / 100;
    const lNormalized = l / 100;
    const c = (1 - Math.abs(2 * lNormalized - 1)) * sNormalized;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = lNormalized - c / 2;
    let r = 0, g = 0, b = 0;

    if (h >= 0 && h < 60) { [r, g, b] = [c, x, 0]; }
    else if (h >= 60 && h < 120) { [r, g, b] = [x, c, 0]; }
    else if (h >= 120 && h < 180) { [r, g, b] = [0, c, x]; }
    else if (h >= 180 && h < 240) { [r, g, b] = [0, x, c]; }
    else if (h >= 240 && h < 300) { [r, g, b] = [x, 0, c]; }
    else if (h >= 300 && h < 360) { [r, g, b] = [c, 0, x]; }
    
    const toHex = (c: number) => {
      const hex = Math.round((c + m) * 255).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  } catch (e) {
    return '#000000';
  }
}

export function ColorPalette({ tokens, onColorChange }: ColorPaletteProps) {
  const { theme } = useTheme();

  const handleTextChange = (tokenName: string, theme: 'light' | 'dark', value: string) => {
    onColorChange(tokenName, theme, value);
  };
  
  const handlePickerChange = (tokenName: string, theme: 'light' | 'dark', hexValue: string) => {
    onColorChange(tokenName, theme, hexValue);
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Color Palette</h2>
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-max border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="p-3 text-left text-sm font-semibold text-muted-foreground">Token</th>
              <th className="p-3 text-left text-sm font-semibold text-muted-foreground">Role</th>
              <th className="p-3 text-left text-sm font-semibold text-muted-foreground">Light</th>
              <th className="p-3 text-left text-sm font-semibold text-muted-foreground">Dark</th>
            </tr>
          </thead>
          <tbody>
            {tokens.map(token => (
              <tr key={token.name} className="border-b border-border hover:bg-muted/50 transition-colors">
                <td className="p-3 font-mono text-sm text-accent-foreground">{token.name}</td>
                <td className="p-3 text-sm text-muted-foreground">{token.role}</td>
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8">
                      <input
                        type="color"
                        value={convertToHex(token.light)}
                        onChange={(e) => handlePickerChange(token.name, 'light', e.target.value)}
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
                      className="font-mono text-sm w-48"
                      aria-label={`Light theme HSL code for ${token.name}`}
                    />
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex items-center gap-2">
                     <div className="relative w-8 h-8">
                      <input
                        type="color"
                        value={convertToHex(token.dark)}
                        onChange={(e) => handlePickerChange(token.name, 'dark', e.target.value)}
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
                      className="font-mono text-sm w-48"
                      aria-label={`Dark theme HSL code for ${token.name}`}
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
