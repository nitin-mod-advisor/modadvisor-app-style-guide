
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
  },
  {
    name: "blue-slate",
    label: "Blue Slate",
    tokens: [
      { name: '--background', role: 'Page background', light: 'hsl(210 20% 98%)', dark: 'hsl(222 22% 8%)' },
      { name: '--foreground', role: 'Primary text', light: 'hsl(222 15% 10%)', dark: 'hsl(210 25% 96%)' },
      { name: '--card', role: 'Card background', light: 'hsl(0 0% 100%)', dark: 'hsl(222 20% 10%)' },
      { name: '--card-foreground', role: 'Card text', light: 'hsl(222 15% 10%)', dark: 'hsl(210 25% 96%)' },
      { name: '--popover', role: 'Popover background', light: 'hsl(0 0% 100%)', dark: 'hsl(222 20% 10%)' },
      { name: '--popover-foreground', role: 'Popover text', light: 'hsl(222 15% 10%)', dark: 'hsl(210 25% 96%)' },
      { name: '--primary', role: 'Primary action', light: 'hsl(222 85% 55%)', dark: 'hsl(222 80% 60%)' },
      { name: '--primary-foreground', role: 'Text on primary', light: 'hsl(0 0% 100%)', dark: 'hsl(0 0% 100%)' },
      { name: '--secondary', role: 'Secondary action', light: 'hsl(220 20% 94%)', dark: 'hsl(222 18% 20%)' },
      { name: '--secondary-foreground', role: 'Text on secondary', light: 'hsl(222 25% 20%)', dark: 'hsl(210 30% 94%)' },
      { name: '--muted', role: 'Muted background', light: 'hsl(220 10% 92%)', dark: 'hsl(222 15% 16%)' },
      { name: '--muted-foreground', role: 'Muted text', light: 'hsl(222 10% 40%)', dark: 'hsl(222 10% 65%)' },
      { name: '--accent', role: 'Accent color', light: 'hsl(200 80% 45%)', dark: 'hsl(200 70% 50%)' },
      { name: '--accent-foreground', role: 'Text on accent', light: 'hsl(0 0% 100%)', dark: 'hsl(200 30% 95%)' },
      { name: '--destructive', role: 'Destructive action', light: 'hsl(0 70% 50%)', dark: 'hsl(0 65% 45%)' },
      { name: '--destructive-foreground', role: 'Text on destructive', light: 'hsl(0 0% 100%)', dark: 'hsl(0 0% 100%)' },
      { name: '--border', role: 'Borders', light: 'hsl(220 10% 86%)', dark: 'hsl(222 15% 22%)' },
      { name: '--input', role: 'Input border', light: 'hsl(220 10% 86%)', dark: 'hsl(222 15% 22%)' },
      { name: '--ring', role: 'Focus ring', light: 'hsl(210 90% 45%)', dark: 'hsl(210 80% 55%)' },
    ]
  },
  {
    name: "amber-graphite",
    label: "Amber Graphite",
    tokens: [
      { name: '--background', role: 'Page background', light: 'hsl(45 30% 98%)', dark: 'hsl(45 10% 7%)' },
      { name: '--foreground', role: 'Primary text', light: 'hsl(30 10% 10%)', dark: 'hsl(45 20% 95%)' },
      { name: '--card', role: 'Card background', light: 'hsl(0 0% 100%)', dark: 'hsl(45 10% 10%)' },
      { name: '--card-foreground', role: 'Card text', light: 'hsl(30 10% 12%)', dark: 'hsl(45 20% 90%)' },
      { name: '--popover', role: 'Popover background', light: 'hsl(0 0% 100%)', dark: 'hsl(45 8% 12%)' },
      { name: '--popover-foreground', role: 'Popover text', light: 'hsl(30 10% 15%)', dark: 'hsl(45 20% 95%)' },
      { name: '--primary', role: 'Primary action', light: 'hsl(40 100% 45%)', dark: 'hsl(45 95% 55%)' },
      { name: '--primary-foreground', role: 'Text on primary', light: 'hsl(0 0% 100%)', dark: 'hsl(45 10% 10%)' },
      { name: '--secondary', role: 'Secondary action', light: 'hsl(30 10% 93%)', dark: 'hsl(45 10% 15%)' },
      { name: '--secondary-foreground', role: 'Text on secondary', light: 'hsl(35 10% 20%)', dark: 'hsl(45 20% 90%)' },
      { name: '--muted', role: 'Muted background', light: 'hsl(45 10% 92%)', dark: 'hsl(45 8% 18%)' },
      { name: '--muted-foreground', role: 'Muted text', light: 'hsl(35 10% 40%)', dark: 'hsl(45 10% 65%)' },
      { name: '--accent', role: 'Accent color', light: 'hsl(200 70% 45%)', dark: 'hsl(200 65% 50%)' },
      { name: '--accent-foreground', role: 'Text on accent', light: 'hsl(0 0% 100%)', dark: 'hsl(200 30% 95%)' },
      { name: '--destructive', role: 'Destructive action', light: 'hsl(0 75% 50%)', dark: 'hsl(0 65% 45%)' },
      { name: '--destructive-foreground', role: 'Text on destructive', light: 'hsl(0 0% 100%)', dark: 'hsl(0 0% 100%)' },
      { name: '--border', role: 'Borders', light: 'hsl(45 15% 84%)', dark: 'hsl(45 10% 20%)' },
      { name: '--input', role: 'Input border', light: 'hsl(45 15% 84%)', dark: 'hsl(45 10% 20%)' },
      { name: '--ring', role: 'Focus ring', light: 'hsl(45 100% 40%)', dark: 'hsl(45 100% 50%)' },
    ]
  },
  {
    name: "emerald-mist",
    label: "Emerald Mist",
    tokens: [
      { name: '--background', role: 'Page background', light: 'hsl(155 25% 98%)', dark: 'hsl(160 20% 7%)' },
      { name: '--foreground', role: 'Primary text', light: 'hsl(160 15% 12%)', dark: 'hsl(160 20% 94%)' },
      { name: '--card', role: 'Card background', light: 'hsl(0 0% 100%)', dark: 'hsl(160 15% 10%)' },
      { name: '--card-foreground', role: 'Card text', light: 'hsl(160 15% 12%)', dark: 'hsl(160 20% 94%)' },
      { name: '--popover', role: 'Popover background', light: 'hsl(0 0% 100%)', dark: 'hsl(160 20% 10%)' },
      { name: '--popover-foreground', role: 'Popover text', light: 'hsl(160 20% 10%)', dark: 'hsl(160 25% 96%)' },
      { name: '--primary', role: 'Primary action', light: 'hsl(155 50% 45%)', dark: 'hsl(155 45% 50%)' },
      { name: '--primary-foreground', role: 'Text on primary', light: 'hsl(0 0% 100%)', dark: 'hsl(0 0% 100%)' },
      { name: '--secondary', role: 'Secondary action', light: 'hsl(160 20% 92%)', dark: 'hsl(160 20% 15%)' },
      { name: '--secondary-foreground', role: 'Text on secondary', light: 'hsl(160 15% 20%)', dark: 'hsl(160 20% 90%)' },
      { name: '--muted', role: 'Muted background', light: 'hsl(160 10% 92%)', dark: 'hsl(160 10% 18%)' },
      { name: '--muted-foreground', role: 'Muted text', light: 'hsl(160 10% 40%)', dark: 'hsl(160 10% 65%)' },
      { name: '--accent', role: 'Accent color', light: 'hsl(195 70% 50%)', dark: 'hsl(195 65% 55%)' },
      { name: '--accent-foreground', role: 'Text on accent', light: 'hsl(0 0% 100%)', dark: 'hsl(195 30% 95%)' },
      { name: '--destructive', role: 'Destructive action', light: 'hsl(0 70% 50%)', dark: 'hsl(0 65% 45%)' },
      { name: '--destructive-foreground', role: 'Text on destructive', light: 'hsl(0 0% 100%)', dark: 'hsl(0 0% 100%)' },
      { name: '--border', role: 'Borders', light: 'hsl(160 10% 86%)', dark: 'hsl(160 10% 22%)' },
      { name: '--input', role: 'Input border', light: 'hsl(160 10% 86%)', dark: 'hsl(160 10% 22%)' },
      { name: '--ring', role: 'Focus ring', light: 'hsl(155 60% 40%)', dark: 'hsl(155 70% 45%)' },
    ]
  },
  {
    name: "indigo-ice",
    label: "Indigo Ice",
    tokens: [
      { name: '--background', role: 'Page background', light: 'hsl(225 20% 98%)', dark: 'hsl(230 18% 8%)' },
      { name: '--foreground', role: 'Primary text', light: 'hsl(230 15% 10%)', dark: 'hsl(230 20% 96%)' },
      { name: '--card', role: 'Card background', light: 'hsl(0 0% 100%)', dark: 'hsl(230 15% 10%)' },
      { name: '--card-foreground', role: 'Card text', light: 'hsl(230 15% 10%)', dark: 'hsl(230 20% 96%)' },
      { name: '--popover', role: 'Popover background', light: 'hsl(0 0% 100%)', dark: 'hsl(230 15% 10%)' },
      { name: '--popover-foreground', role: 'Popover text', light: 'hsl(230 15% 10%)', dark: 'hsl(230 20% 96%)' },
      { name: '--primary', role: 'Primary action', light: 'hsl(245 85% 60%)', dark: 'hsl(245 75% 65%)' },
      { name: '--primary-foreground', role: 'Text on primary', light: 'hsl(0 0% 100%)', dark: 'hsl(0 0% 100%)' },
      { name: '--secondary', role: 'Secondary action', light: 'hsl(230 12% 93%)', dark: 'hsl(230 15% 18%)' },
      { name: '--secondary-foreground', role: 'Text on secondary', light: 'hsl(230 15% 20%)', dark: 'hsl(230 20% 94%)' },
      { name: '--muted', role: 'Muted background', light: 'hsl(230 10% 92%)', dark: 'hsl(230 10% 20%)' },
      { name: '--muted-foreground', role: 'Muted text', light: 'hsl(230 10% 40%)', dark: 'hsl(230 10% 65%)' },
      { name: '--accent', role: 'Accent color', light: 'hsl(200 80% 45%)', dark: 'hsl(200 70% 50%)' },
      { name: '--accent-foreground', role: 'Text on accent', light: 'hsl(0 0% 100%)', dark: 'hsl(200 30% 95%)' },
      { name: '--destructive', role: 'Destructive action', light: 'hsl(0 70% 50%)', dark: 'hsl(0 65% 45%)' },
      { name: '--destructive-foreground', role: 'Text on destructive', light: 'hsl(0 0% 100%)', dark: 'hsl(0 0% 100%)' },
      { name: '--border', role: 'Borders', light: 'hsl(230 10% 86%)', dark: 'hsl(230 10% 22%)' },
      { name: '--input', role: 'Input border', light: 'hsl(230 10% 86%)', dark: 'hsl(230 10% 22%)' },
      { name: '--ring', role: 'Focus ring', light: 'hsl(245 85% 55%)', dark: 'hsl(245 80% 60%)' },
    ]
  },
  {
    name: "crimson-steel",
    label: "Crimson Steel",
    tokens: [
      { name: '--background', role: 'Page background', light: 'hsl(0 0% 99%)', dark: 'hsl(0 10% 6%)' },
      { name: '--foreground', role: 'Primary text', light: 'hsl(0 10% 10%)', dark: 'hsl(0 10% 95%)' },
      { name: '--card', role: 'Card background', light: 'hsl(0 0% 100%)', dark: 'hsl(0 10% 10%)' },
      { name: '--card-foreground', role: 'Card text', light: 'hsl(0 10% 12%)', dark: 'hsl(0 10% 95%)' },
      { name: '--popover', role: 'Popover background', light: 'hsl(0 0% 100%)', dark: 'hsl(0 10% 10%)' },
      { name: '--popover-foreground', role: 'Popover text', light: 'hsl(0 10% 12%)', dark: 'hsl(0 10% 95%)' },
      { name: '--primary', role: 'Primary action', light: 'hsl(350 75% 50%)', dark: 'hsl(350 70% 55%)' },
      { name: '--primary-foreground', role: 'Text on primary', light: 'hsl(0 0% 100%)', dark: 'hsl(0 0% 100%)' },
      { name: '--secondary', role: 'Secondary action', light: 'hsl(0 10% 93%)', dark: 'hsl(0 10% 15%)' },
      { name: '--secondary-foreground', role: 'Text on secondary', light: 'hsl(0 10% 20%)', dark: 'hsl(0 10% 94%)' },
      { name: '--muted', role: 'Muted background', light: 'hsl(0 5% 92%)', dark: 'hsl(0 5% 20%)' },
      { name: '--muted-foreground', role: 'Muted text', light: 'hsl(0 10% 40%)', dark: 'hsl(0 10% 65%)' },
      { name: '--accent', role: 'Accent color', light: 'hsl(210 70% 50%)', dark: 'hsl(210 65% 55%)' },
      { name: '--accent-foreground', role: 'Text on accent', light: 'hsl(0 0% 100%)', dark: 'hsl(210 20% 95%)' },
      { name: '--destructive', role: 'Destructive action', light: 'hsl(0 70% 50%)', dark: 'hsl(0 65% 45%)' },
      { name: '--destructive-foreground', role: 'Text on destructive', light: 'hsl(0 0% 100%)', dark: 'hsl(0 0% 100%)' },
      { name: '--border', role: 'Borders', light: 'hsl(0 10% 86%)', dark: 'hsl(0 10% 22%)' },
      { name: '--input', role: 'Input border', light: 'hsl(0 10% 86%)', dark: 'hsl(0 10% 22%)' },
      { name: '--ring', role: 'Focus ring', light: 'hsl(350 80% 50%)', dark: 'hsl(350 80% 55%)' },
    ]
  }
];

export const INITIAL_TOKENS: ColorToken[] = THEMES[0].tokens;


    
