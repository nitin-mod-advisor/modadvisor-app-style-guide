
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
    name: "teal",
    label: "Teal",
    tokens: [
        { name: '--background', role: 'Page background', light: 'hsl(180 15% 97%)', dark: 'hsl(190 20% 8%)' },
        { name: '--foreground', role: 'Primary text', light: 'hsl(190 10% 23%)', dark: 'hsl(190 10% 95%)' },
        { name: '--card', role: 'Card background', light: 'hsl(0 0% 100%)', dark: 'hsl(190 15% 12%)' },
        { name: '--card-foreground', role: 'Card text', light: 'hsl(190 10% 23%)', dark: 'hsl(190 10% 95%)' },
        { name: '--popover', role: 'Popover background', light: 'hsl(0 0% 100%)', dark: 'hsl(190 15% 12%)' },
        { name: '--popover-foreground', role: 'Popover text', light: 'hsl(190 10% 23%)', dark: 'hsl(190 10% 95%)' },
        { name: '--primary', role: 'Primary action', light: 'hsl(169 80% 40%)', dark: 'hsl(169 80% 45%)' },
        { name: '--primary-foreground', role: 'Text on primary', light: 'hsl(0 0% 100%)', dark: 'hsl(169 50% 95%)' },
        { name: '--secondary', role: 'Secondary action', light: 'hsl(180 5% 95%)', dark: 'hsl(190 5% 25%)' },
        { name: '--secondary-foreground', role: 'Text on secondary', light: 'hsl(190 10% 30%)', dark: 'hsl(190 5% 85%)' },
        { name: '--muted', role: 'Muted background', light: 'hsl(180 5% 95%)', dark: 'hsl(190 5% 20%)' },
        { name: '--muted-foreground', role: 'Muted text', light: 'hsl(190 5% 55%)', dark: 'hsl(190 5% 65%)' },
        { name: '--accent', role: 'Accent color', light: 'hsl(169 80% 94%)', dark: 'hsl(169 40% 15%)' },
        { name: '--accent-foreground', role: 'Text on accent', light: 'hsl(169 80% 25%)', dark: 'hsl(169 80% 80%)' },
        { name: '--destructive', role: 'Destructive action', light: 'hsl(0 84% 60%)', dark: 'hsl(0 70% 40%)' },
        { name: '--destructive-foreground', role: 'Text on destructive', light: 'hsl(0 0% 100%)', dark: 'hsl(0 0% 100%)' },
        { name: '--border', role: 'Borders', light: 'hsl(180 5% 90%)', dark: 'hsl(190 5% 20%)' },
        { name: '--input', role: 'Input border', light: 'hsl(180 5% 90%)', dark: 'hsl(190 5% 20%)' },
        { name: '--ring', role: 'Focus ring', light: 'hsl(169 80% 35%)', dark: 'hsl(169 80% 35%)' },
    ]
  },
  {
    name: "earthy",
    label: "Earthy",
    tokens: [
      { name: '--background', role: 'Page background', light: 'hsl(40 50% 98%)', dark: 'hsl(30 15% 9%)' },
      { name: '--foreground', role: 'Primary text', light: 'hsl(30 10% 20%)', dark: 'hsl(30 10% 92%)' },
      { name: '--card', role: 'Card background', light: 'hsl(0 0% 100%)', dark: 'hsl(30 10% 13%)' },
      { name: '--card-foreground', role: 'Card text', light: 'hsl(30 10% 20%)', dark: 'hsl(30 10% 92%)' },
      { name: '--popover', role: 'Popover background', light: 'hsl(0 0% 100%)', dark: 'hsl(30 10% 13%)' },
      { name: '--popover-foreground', role: 'Popover text', light: 'hsl(30 10% 20%)', dark: 'hsl(30 10% 92%)' },
      { name: '--primary', role: 'Primary action', light: 'hsl(12 75% 45%)', dark: 'hsl(12 75% 55%)' },
      { name: '--primary-foreground', role: 'Text on primary', light: 'hsl(0 0% 100%)', dark: 'hsl(12 80% 95%)' },
      { name: '--secondary', role: 'Secondary action', light: 'hsl(90 40% 61%)', dark: 'hsl(90 20% 25%)' },
      { name: '--secondary-foreground', role: 'Text on secondary', light: 'hsl(90 25% 20%)', dark: 'hsl(90 30% 90%)' },
      { name: '--muted', role: 'Muted background', light: 'hsl(30 10% 95%)', dark: 'hsl(30 5% 20%)' },
      { name: '--muted-foreground', role: 'Muted text', light: 'hsl(30 10% 45%)', dark: 'hsl(30 5% 65%)' },
      { name: '--accent', role: 'Accent color', light: 'hsl(12 75% 95%)', dark: 'hsl(12 30% 18%)' },
      { name: '--accent-foreground', role: 'Text on accent', light: 'hsl(12 75% 30%)', dark: 'hsl(12 75% 70%)' },
      { name: '--destructive', role: 'Destructive action', light: 'hsl(0 84% 60%)', dark: 'hsl(0 70% 40%)' },
      { name: '--destructive-foreground', role: 'Text on destructive', light: 'hsl(0 0% 100%)', dark: 'hsl(0 0% 100%)' },
      { name: '--border', role: 'Borders', light: 'hsl(30 10% 88%)', dark: 'hsl(30 5% 25%)' },
      { name: '--input', role: 'Input border', light: 'hsl(30 10% 88%)', dark: 'hsl(30 5% 25%)' },
      { name: '--ring', role: 'Focus ring', light: 'hsl(12 75% 40%)', dark: 'hsl(12 75% 40%)' },
    ]
  },
  {
    name: "vibrant",
    label: "Rose",
    tokens: [
      { name: '--background', role: 'Page background', light: 'hsl(340 50% 98%)', dark: 'hsl(345 35% 9%)' },
      { name: '--foreground', role: 'Primary text', light: 'hsl(345 20% 15%)', dark: 'hsl(340 30% 95%)' },
      { name: '--card', role: 'Card background', light: 'hsl(0 0% 100%)', dark: 'hsl(345 30% 12%)' },
      { name: '--card-foreground', role: 'Card text', light: 'hsl(345 20% 15%)', dark: 'hsl(340 30% 95%)' },
      { name: '--popover', role: 'Popover background', light: 'hsl(0 0% 100%)', dark: 'hsl(345 30% 12%)' },
      { name: '--popover-foreground', role: 'Popover text', light: 'hsl(345 20% 15%)', dark: 'hsl(340 30% 95%)' },
      { name: '--primary', role: 'Primary action', light: 'hsl(340 85% 60%)', dark: 'hsl(340 85% 65%)' },
      { name: '--primary-foreground', role: 'Text on primary', light: 'hsl(0 0% 100%)', dark: 'hsl(340 80% 98%)' },
      { name: '--secondary', role: 'Secondary action', light: 'hsl(340 30% 95%)', dark: 'hsl(340 20% 20%)' },
      { name: '--secondary-foreground', role: 'Text on secondary', light: 'hsl(340 20% 25%)', dark: 'hsl(340 30% 90%)' },
      { name: '--muted', role: 'Muted background', light: 'hsl(340 30% 95%)', dark: 'hsl(340 15% 20%)' },
      { name: '--muted-foreground', role: 'Muted text', light: 'hsl(340 15% 45%)', dark: 'hsl(340 15% 65%)' },
      { name: '--accent', role: 'Accent color', light: 'hsl(340 80% 95%)', dark: 'hsl(340 25% 15%)' },
      { name: '--accent-foreground', role: 'Text on accent', light: 'hsl(340 80% 30%)', dark: 'hsl(340 80% 75%)' },
      { name: '--destructive', role: 'Destructive action', light: 'hsl(0 84% 60%)', dark: 'hsl(0 70% 45%)' },
      { name: '--destructive-foreground', role: 'Text on destructive', light: 'hsl(0 0% 100%)', dark: 'hsl(0 0% 100%)' },
      { name: '--border', role: 'Borders', light: 'hsl(340 20% 90%)', dark: 'hsl(340 15% 25%)' },
      { name: '--input', role: 'Input border', light: 'hsl(340 20% 90%)', dark: 'hsl(340 15% 25%)' },
      { name: '--ring', role: 'Focus ring', light: 'hsl(340 85% 55%)', dark: 'hsl(340 85% 55%)' },
    ]
  },
  {
    name: "oceanic",
    label: "Indigo",
    tokens: [
      { name: '--background', role: 'Page background', light: 'hsl(220 60% 98%)', dark: 'hsl(225 40% 8%)' },
      { name: '--foreground', role: 'Primary text', light: 'hsl(225 25% 18%)', dark: 'hsl(220 30% 95%)' },
      { name: '--card', role: 'Card background', light: 'hsl(0 0% 100%)', dark: 'hsl(225 35% 12%)' },
      { name: '--card-foreground', role: 'Card text', light: 'hsl(225 25% 18%)', dark: 'hsl(220 30% 95%)' },
      { name: '--popover', role: 'Popover background', light: 'hsl(0 0% 100%)', dark: 'hsl(225 35% 12%)' },
      { name: '--popover-foreground', role: 'Popover text', light: 'hsl(225 25% 18%)', dark: 'hsl(220 30% 95%)' },
      { name: '--primary', role: 'Primary action', light: 'hsl(225 90% 60%)', dark: 'hsl(225 90% 65%)' },
      { name: '--primary-foreground', role: 'Text on primary', light: 'hsl(0 0% 100%)', dark: 'hsl(225 90% 95%)' },
      { name: '--secondary', role: 'Secondary action', light: 'hsl(220 70% 95%)', dark: 'hsl(220 30% 20%)' },
      { name: '--secondary-foreground', role: 'Text on secondary', light: 'hsl(220 40% 25%)', dark: 'hsl(220 30% 90%)' },
      { name: '--muted', role: 'Muted background', light: 'hsl(220 40% 95%)', dark: 'hsl(225 20% 20%)' },
      { name: '--muted-foreground', role: 'Muted text', light: 'hsl(225 15% 45%)', dark: 'hsl(220 15% 65%)' },
      { name: '--accent', role: 'Accent color', light: 'hsl(225 90% 96%)', dark: 'hsl(225 30% 15%)' },
      { name: '--accent-foreground', role: 'Text on accent', light: 'hsl(225 90% 40%)', dark: 'hsl(225 90% 75%)' },
      { name: '--destructive', role: 'Destructive action', light: 'hsl(0 84% 60%)', dark: 'hsl(0 70% 45%)' },
      { name: '--destructive-foreground', role: 'Text on destructive', light: 'hsl(0 0% 100%)', dark: 'hsl(0 0% 100%)' },
      { name: '--border', role: 'Borders', light: 'hsl(220 30% 90%)', dark: 'hsl(225 20% 25%)' },
      { name: '--input', role: 'Input border', light: 'hsl(220 30% 90%)', dark: 'hsl(225 20% 25%)' },
      { name: '--ring', role: 'Focus ring', light: 'hsl(225 90% 55%)', dark: 'hsl(225 90% 55%)' },
    ]
  }
];

export const INITIAL_TOKENS: ColorToken[] = THEMES[0].tokens;
