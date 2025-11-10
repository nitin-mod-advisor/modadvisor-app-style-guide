
import { ColorToken } from "./types";

export type Theme = {
  name: string;
  label: string;
  tokens: ColorToken[];
};

export const THEMES: Theme[] = [
  {
    name: "default",
    label: "Default",
    tokens: [
      { name: '--background', role: 'Page background', light: 'hsl(240 10% 98%)', dark: 'hsl(222.2 84% 4.9%)' },
      { name: '--foreground', role: 'Primary text', light: 'hsl(222.2 84% 4.9%)', dark: 'hsl(210 40% 98%)' },
      { name: '--card', role: 'Card background', light: 'hsl(0 0% 100%)', dark: 'hsl(222.2 84% 10.9%)' },
      { name: '--card-foreground', role: 'Card text', light: 'hsl(222.2 84% 4.9%)', dark: 'hsl(210 40% 98%)' },
      { name: '--popover', role: 'Popover background', light: 'hsl(0 0% 100%)', dark: 'hsl(222.2 84% 4.9%)' },
      { name: '--popover-foreground', role: 'Popover text', light: 'hsl(222.2 84% 4.9%)', dark: 'hsl(210 40% 98%)' },
      { name: '--primary', role: 'Primary action', light: 'hsl(158 64% 52%)', dark: 'hsl(158 64% 52%)' },
      { name: '--primary-foreground', role: 'Text on primary', light: 'hsl(0 0% 100%)', dark: 'hsl(0 0% 100%)' },
      { name: '--secondary', role: 'Secondary action', light: 'hsl(210 40% 96.1%)', dark: 'hsl(217.2 32.6% 17.5%)' },
      { name: '--secondary-foreground', role: 'Text on secondary', light: 'hsl(222.2 47.4% 11.2%)', dark: 'hsl(210 40% 98%)' },
      { name: '--muted', role: 'Muted background', light: 'hsl(210 40% 96.1%)', dark: 'hsl(217.2 32.6% 17.5%)' },
      { name: '--muted-foreground', role: 'Muted text', light: 'hsl(215.4 16.3% 46.9%)', dark: 'hsl(215 20.2% 65.1%)' },
      { name: '--accent', role: 'Accent color', light: 'hsl(158 80% 96%)', dark: 'hsl(158 30% 10%)' },
      { name: '--accent-foreground', role: 'Text on accent', light: 'hsl(158 64% 30%)', dark: 'hsl(158 64% 70%)' },
      { name: '--destructive', role: 'Destructive action', light: 'hsl(0 84.2% 60.2%)', dark: 'hsl(0 62.8% 30.6%)' },
      { name: '--destructive-foreground', role: 'Text on destructive', light: 'hsl(210 40% 98%)', dark: 'hsl(210 40% 98%)' },
      { name: '--border', role: 'Borders', light: 'hsl(214.3 31.8% 91.4%)', dark: 'hsl(217.2 32.6% 17.5%)' },
      { name: '--input', role: 'Input border', light: 'hsl(214.3 31.8% 91.4%)', dark: 'hsl(217.2 32.6% 17.5%)' },
      { name: '--ring', role: 'Focus ring', light: 'hsl(160 83% 40%)', dark: 'hsl(160 83% 40%)' },
    ],
  }
];

export const INITIAL_TOKENS: ColorToken[] = THEMES[0].tokens;


    
