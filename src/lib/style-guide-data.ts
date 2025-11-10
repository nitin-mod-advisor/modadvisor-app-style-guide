
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
      { name: '--background', role: 'Page background', light: 'hsl(0 0% 100%)', dark: 'hsl(222.2 84% 4.9%)' },
      { name: '--foreground', role: 'Primary text', light: 'hsl(222.2 84% 4.9%)', dark: 'hsl(210 40% 98%)' },
      { name: '--card', role: 'Card background', light: 'hsl(0 0% 100%)', dark: 'hsl(222.2 84% 10.9%)' },
      { name: '--card-foreground', role: 'Card text', light: 'hsl(222.2 84% 4.9%)', dark: 'hsl(210 40% 98%)' },
      { name: '--popover', role: 'Popover background', light: 'hsl(0 0% 100%)', dark: 'hsl(222.2 84% 4.9%)' },
      { name: '--popover-foreground', role: 'Popover text', light: 'hsl(222.2 84% 4.9%)', dark: 'hsl(210 40% 98%)' },
      { name: '--primary', role: 'Primary action', light: 'hsl(217 91% 60%)', dark: 'hsl(217 91% 60%)' },
      { name: '--primary-foreground', role: 'Text on primary', light: 'hsl(0 0% 100%)', dark: 'hsl(0 0% 100%)' },
      { name: '--secondary', role: 'Secondary action', light: 'hsl(210 40% 96.1%)', dark: 'hsl(217.2 32.6% 17.5%)' },
      { name: '--secondary-foreground', role: 'Text on secondary', light: 'hsl(222.2 47.4% 11.2%)', dark: 'hsl(210 40% 98%)' },
      { name: '--muted', role: 'Muted background', light: 'hsl(210 40% 96.1%)', dark: 'hsl(217.2 32.6% 17.5%)' },
      { name: '--muted-foreground', role: 'Muted text', light: 'hsl(215.4 16.3% 46.9%)', dark: 'hsl(215 20.2% 65.1%)' },
      { name: '--accent', role: 'Accent color', light: 'hsl(210 40% 96.1%)', dark: 'hsl(217.2 32.6% 17.5%)' },
      { name: '--accent-foreground', role: 'Text on accent', light: 'hsl(222.2 47.4% 11.2%)', dark: 'hsl(210 40% 98%)' },
      { name: '--destructive', role: 'Destructive action', light: 'hsl(0 84.2% 60.2%)', dark: 'hsl(0 62.8% 30.6%)' },
      { name: '--destructive-foreground', role: 'Text on destructive', light: 'hsl(210 40% 98%)', dark: 'hsl(210 40% 98%)' },
      { name: '--border', role: 'Borders', light: 'hsl(214.3 31.8% 91.4%)', dark: 'hsl(217.2 32.6% 17.5%)' },
      { name: '--input', role: 'Input border', light: 'hsl(214.3 31.8% 91.4%)', dark: 'hsl(217.2 32.6% 17.5%)' },
      { name: '--ring', role: 'Focus ring', light: 'hsl(217 91% 65%)', dark: 'hsl(217 91% 65%)' },
    ],
  },
  {
    name: "cyberpunk_neon",
    label: "Cyberpunk Neon",
    tokens: [
      { name: '--background', role: 'Page background', light: 'hsl(240 10% 4%)', dark: 'hsl(240 10% 4%)' },
      { name: '--foreground', role: 'Primary text', light: 'hsl(210 20% 98%)', dark: 'hsl(210 20% 98%)' },
      { name: '--card', role: 'Card background', light: 'hsl(240 10% 9%)', dark: 'hsl(240 10% 9%)' },
      { name: '--card-foreground', role: 'Card text', light: 'hsl(210 20% 98%)', dark: 'hsl(210 20% 98%)' },
      { name: '--popover', role: 'Popover background', light: 'hsl(240 10% 9%)', dark: 'hsl(240 10% 9%)' },
      { name: '--popover-foreground', role: 'Popover text', light: 'hsl(210 20% 98%)', dark: 'hsl(210 20% 98%)' },
      { name: '--primary', role: 'Primary action', light: 'hsl(320 100% 50%)', dark: 'hsl(320 100% 50%)' },
      { name: '--primary-foreground', role: 'Text on primary', light: 'hsl(0 0% 100%)', dark: 'hsl(0 0% 100%)' },
      { name: '--secondary', role: 'Secondary action', light: 'hsl(180 100% 50%)', dark: 'hsl(180 100% 50%)' },
      { name: '--secondary-foreground', role: 'Text on secondary', light: 'hsl(240 10% 4%)', dark: 'hsl(240 10% 4%)' },
      { name: '--muted', role: 'Muted background', light: 'hsl(240 5% 15%)', dark: 'hsl(240 5% 15%)' },
      { name: '--muted-foreground', role: 'Muted text', light: 'hsl(240 5% 65%)', dark: 'hsl(240 5% 65%)' },
      { name: '--accent', role: 'Accent color', light: 'hsl(180 100% 15%)', dark: 'hsl(180 100% 15%)' },
      { name: '--accent-foreground', role: 'Text on accent', light: 'hsl(180 100% 50%)', dark: 'hsl(180 100% 50%)' },
      { name: '--destructive', role: 'Destructive action', light: 'hsl(0 100% 50%)', dark: 'hsl(0 100% 50%)' },
      { name: '--destructive-foreground', role: 'Text on destructive', light: 'hsl(0 0% 100%)', dark: 'hsl(0 0% 100%)' },
      { name: '--border', role: 'Borders', light: 'hsl(240 5% 20%)', dark: 'hsl(240 5% 20%)' },
      { name: '--input', role: 'Input border', light: 'hsl(240 5% 20%)', dark: 'hsl(240 5% 20%)' },
      { name: '--ring', role: 'Focus ring', light: 'hsl(180 100% 50%)', dark: 'hsl(180 100% 50%)' },
    ]
  },
  {
    name: "mint_green",
    label: "Mint Green",
    tokens: [
      { name: '--background', role: 'Page background', light: 'hsl(150 20% 98%)', dark: 'hsl(150 10% 10%)' },
      { name: '--foreground', role: 'Primary text', light: 'hsl(150 10% 15%)', dark: 'hsl(150 10% 90%)' },
      { name: '--card', role: 'Card background', light: 'hsl(0 0% 100%)', dark: 'hsl(150 10% 15%)' },
      { name: '--card-foreground', role: 'Card text', light: 'hsl(150 10% 15%)', dark: 'hsl(150 10% 90%)' },
      { name: '--popover', role: 'Popover background', light: 'hsl(0 0% 100%)', dark: 'hsl(150 10% 15%)' },
      { name: '--popover-foreground', role: 'Popover text', light: 'hsl(150 10% 15%)', dark: 'hsl(150 10% 90%)' },
      { name: '--primary', role: 'Primary action', light: 'hsl(150 60% 40%)', dark: 'hsl(150 60% 50%)' },
      { name: '--primary-foreground', role: 'Text on primary', light: 'hsl(0 0% 100%)', dark: 'hsl(150 60% 5%)' },
      { name: '--secondary', role: 'Secondary action', light: 'hsl(150 10% 90%)', dark: 'hsl(150 10% 20%)' },
      { name: '--secondary-foreground', role: 'Text on secondary', light: 'hsl(150 10% 20%)', dark: 'hsl(150 10% 90%)' },
      { name: '--muted', role: 'Muted background', light: 'hsl(150 10% 95%)', dark: 'hsl(150 10% 20%)' },
      { name: '--muted-foreground', role: 'Muted text', light: 'hsl(150 5% 50%)', dark: 'hsl(150 5% 60%)' },
      { name: '--accent', role: 'Accent color', light: 'hsl(150 60% 90%)', dark: 'hsl(150 20% 20%)' },
      { name: '--accent-foreground', role: 'Text on accent', light: 'hsl(150 60% 20%)', dark: 'hsl(150 60% 80%)' },
      { name: '--destructive', role: 'Destructive action', light: 'hsl(0 80% 50%)', dark: 'hsl(0 70% 40%)' },
      { name: '--destructive-foreground', role: 'Text on destructive', light: 'hsl(0 0% 100%)', dark: 'hsl(0 0% 100%)' },
      { name: '--border', role: 'Borders', light: 'hsl(150 10% 85%)', dark: 'hsl(150 10% 25%)' },
      { name: '--input', role: 'Input border', light: 'hsl(150 10% 85%)', dark: 'hsl(150 10% 25%)' },
      { name: '--ring', role: 'Focus ring', light: 'hsl(150 60% 35%)', dark: 'hsl(150 60% 35%)' },
    ]
  },
  {
    name: "golden_hour",
    label: "Golden Hour",
    tokens: [
      { name: '--background', role: 'Page background', light: 'hsl(30 70% 97%)', dark: 'hsl(20 15% 8%)' },
      { name: '--foreground', role: 'Primary text', light: 'hsl(20 10% 20%)', dark: 'hsl(20 10% 90%)' },
      { name: '--card', role: 'Card background', light: 'hsl(0 0% 100%)', dark: 'hsl(20 15% 12%)' },
      { name: '--card-foreground', role: 'Card text', light: 'hsl(20 10% 20%)', dark: 'hsl(20 10% 90%)' },
      { name: '--popover', role: 'Popover background', light: 'hsl(0 0% 100%)', dark: 'hsl(20 15% 12%)' },
      { name: '--popover-foreground', role: 'Popover text', light: 'hsl(20 10% 20%)', dark: 'hsl(20 10% 90%)' },
      { name: '--primary', role: 'Primary action', light: 'hsl(30 90% 50%)', dark: 'hsl(35 95% 55%)' },
      { name: '--primary-foreground', role: 'Text on primary', light: 'hsl(20 10% 10%)', dark: 'hsl(20 10% 10%)' },
      { name: '--secondary', role: 'Secondary action', light: 'hsl(210 50% 40%)', dark: 'hsl(210 40% 20%)' },
      { name: '--secondary-foreground', role: 'Text on secondary', light: 'hsl(210 40% 95%)', dark: 'hsl(210 40% 95%)' },
      { name: '--muted', role: 'Muted background', light: 'hsl(30 20% 95%)', dark: 'hsl(20 10% 18%)' },
      { name: '--muted-foreground', role: 'Muted text', light: 'hsl(20 10% 45%)', dark: 'hsl(20 5% 60%)' },
      { name: '--accent', role: 'Accent color', light: 'hsl(30 90% 90%)', dark: 'hsl(30 30% 20%)' },
      { name: '--accent-foreground', role: 'Text on accent', light: 'hsl(30 90% 20%)', dark: 'hsl(30 90% 70%)' },
      { name: '--destructive', role: 'Destructive action', light: 'hsl(0 80% 50%)', dark: 'hsl(0 70% 40%)' },
      { name: '--destructive-foreground', role: 'Text on destructive', light: 'hsl(0 0% 100%)', dark: 'hsl(0 0% 100%)' },
      { name: '--border', role: 'Borders', light: 'hsl(30 20% 88%)', dark: 'hsl(20 10% 25%)' },
      { name: '--input', role: 'Input border', light: 'hsl(30 20% 88%)', dark: 'hsl(20 10% 25%)' },
      { name: '--ring', role: 'Focus ring', light: 'hsl(35 95% 45%)', dark: 'hsl(35 95% 45%)' },
    ]
  },
  {
    name: "lavender_bliss",
    label: "Lavender Bliss",
    tokens: [
      { name: '--background', role: 'Page background', light: 'hsl(250 50% 98%)', dark: 'hsl(250 20% 10%)' },
      { name: '--foreground', role: 'Primary text', light: 'hsl(250 20% 20%)', dark: 'hsl(250 20% 90%)' },
      { name: '--card', role: 'Card background', light: 'hsl(0 0% 100%)', dark: 'hsl(250 20% 14%)' },
      { name: '--card-foreground', role: 'Card text', light: 'hsl(250 20% 20%)', dark: 'hsl(250 20% 90%)' },
      { name: '--popover', role: 'Popover background', light: 'hsl(0 0% 100%)', dark: 'hsl(250 20% 14%)' },
      { name: '--popover-foreground', role: 'Popover text', light: 'hsl(250 20% 20%)', dark: 'hsl(250 20% 90%)' },
      { name: '--primary', role: 'Primary action', light: 'hsl(250 60% 50%)', dark: 'hsl(250 70% 60%)' },
      { name: '--primary-foreground', role: 'Text on primary', light: 'hsl(0 0% 100%)', dark: 'hsl(0 0% 100%)' },
      { name: '--secondary', role: 'Secondary action', light: 'hsl(250 20% 90%)', dark: 'hsl(250 15% 25%)' },
      { name: '--secondary-foreground', role: 'Text on secondary', light: 'hsl(250 20% 30%)', dark: 'hsl(250 15% 85%)' },
      { name: '--muted', role: 'Muted background', light: 'hsl(250 20% 95%)', dark: 'hsl(250 15% 20%)' },
      { name: '--muted-foreground', role: 'Muted text', light: 'hsl(250 10% 50%)', dark: 'hsl(250 10% 60%)' },
      { name: '--accent', role: 'Accent color', light: 'hsl(250 60% 95%)', dark: 'hsl(250 20% 18%)' },
      { name: '--accent-foreground', role: 'Text on accent', light: 'hsl(250 60% 30%)', dark: 'hsl(250 60% 80%)' },
      { name: '--destructive', role: 'Destructive action', light: 'hsl(0 80% 50%)', dark: 'hsl(0 70% 40%)' },
      { name: '--destructive-foreground', role: 'Text on destructive', light: 'hsl(0 0% 100%)', dark: 'hsl(0 0% 100%)' },
      { name: '--border', role: 'Borders', light: 'hsl(250 20% 88%)', dark: 'hsl(250 15% 28%)' },
      { name: '--input', role: 'Input border', light: 'hsl(250 20% 88%)', dark: 'hsl(250 15% 28%)' },
      { name: '--ring', role: 'Focus ring', light: 'hsl(250 70% 55%)', dark: 'hsl(250 70% 55%)' },
    ]
  }
];

export const INITIAL_TOKENS: ColorToken[] = THEMES[0].tokens;


    