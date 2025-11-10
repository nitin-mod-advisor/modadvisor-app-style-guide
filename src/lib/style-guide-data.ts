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
    name: "teal",
    label: "Teal",
    tokens: [
        { name: '--background', role: 'Page background', light: 'hsl(180 15% 97%)', dark: 'hsl(200 10% 8%)' },
        { name: '--foreground', role: 'Primary text', light: 'hsl(210 10% 23%)', dark: 'hsl(190 10% 95%)' },
        { name: '--card', role: 'Card background', light: 'hsl(0 0% 100%)', dark: 'hsl(200 10% 12%)' },
        { name: '--card-foreground', role: 'Card text', light: 'hsl(210 10% 23%)', dark: 'hsl(190 10% 95%)' },
        { name: '--popover', role: 'Popover background', light: 'hsl(0 0% 100%)', dark: 'hsl(200 10% 12%)' },
        { name: '--popover-foreground', role: 'Popover text', light: 'hsl(210 10% 23%)', dark: 'hsl(190 10% 95%)' },
        { name: '--primary', role: 'Primary action', light: 'hsl(159 55% 56%)', dark: 'hsl(159 55% 56%)' }, // #55C58F
        { name: '--primary-foreground', role: 'Text on primary', light: 'hsl(0 0% 100%)', dark: 'hsl(159 50% 15%)' },
        { name: '--secondary', role: 'Secondary action', light: 'hsl(220 5% 95%)', dark: 'hsl(220 5% 25%)' },
        { name: '--secondary-foreground', role: 'Text on secondary', light: 'hsl(220 10% 30%)', dark: 'hsl(220 5% 85%)' },
        { name: '--muted', role: 'Muted background', light: 'hsl(220 5% 95%)', dark: 'hsl(220 5% 25%)' },
        { name: '--muted-foreground', role: 'Muted text', light: 'hsl(220 5% 55%)', dark: 'hsl(220 5% 65%)' },
        { name: '--accent', role: 'Accent color', light: 'hsl(159 50% 94%)', dark: 'hsl(159 30% 20%)' },
        { name: '--accent-foreground', role: 'Text on accent', light: 'hsl(159 50% 25%)', dark: 'hsl(159 50% 80%)' },
        { name: '--destructive', role: 'Destructive action', light: 'hsl(0 84% 60%)', dark: 'hsl(0 70% 40%)' },
        { name: '--destructive-foreground', role: 'Text on destructive', light: 'hsl(0 0% 100%)', dark: 'hsl(0 0% 100%)' },
        { name: '--border', role: 'Borders', light: 'hsl(220 5% 90%)', dark: 'hsl(220 5% 20%)' },
        { name: '--input', role: 'Input border', light: 'hsl(220 5% 90%)', dark: 'hsl(220 5% 20%)' },
        { name: '--ring', role: 'Focus ring', light: 'hsl(159 55% 46%)', dark: 'hsl(159 55% 46%)' },
    ]
  },
  {
    name: "earthy",
    label: "Earthy",
    tokens: [
      { name: '--background', role: 'Page background', light: 'hsl(38 20% 96%)', dark: 'hsl(20 10% 10%)' },
      { name: '--foreground', role: 'Primary text', light: 'hsl(20 10% 20%)', dark: 'hsl(30 10% 92%)' },
      { name: '--card', role: 'Card background', light: 'hsl(0 0% 100%)', dark: 'hsl(20 10% 14%)' },
      { name: '--card-foreground', role: 'Card text', light: 'hsl(20 10% 20%)', dark: 'hsl(30 10% 92%)' },
      { name: '--popover', role: 'Popover background', light: 'hsl(0 0% 100%)', dark: 'hsl(20 10% 14%)' },
      { name: '--popover-foreground', role: 'Popover text', light: 'hsl(20 10% 20%)', dark: 'hsl(30 10% 92%)' },
      { name: '--primary', role: 'Primary action', light: 'hsl(18 80% 50%)', dark: 'hsl(18 80% 50%)' }, // #E26E20
      { name: '--primary-foreground', role: 'Text on primary', light: 'hsl(0 0% 100%)', dark: 'hsl(18 80% 95%)' },
      { name: '--secondary', role: 'Secondary action', light: 'hsl(76 40% 61%)', dark: 'hsl(76 20% 25%)' }, // #A4D165
      { name: '--secondary-foreground', role: 'Text on secondary', light: 'hsl(76 25% 20%)', dark: 'hsl(76 30% 90%)' },
      { name: '--muted', role: 'Muted background', light: 'hsl(210 10% 95%)', dark: 'hsl(210 5% 20%)' },
      { name: '--muted-foreground', role: 'Muted text', light: 'hsl(210 10% 45%)', dark: 'hsl(210 5% 65%)' },
      { name: '--accent', role: 'Accent color', light: 'hsl(18 80% 95%)', dark: 'hsl(18 30% 20%)' },
      { name: '--accent-foreground', role: 'Text on accent', light: 'hsl(18 80% 30%)', dark: 'hsl(18 80% 70%)' },
      { name: '--destructive', role: 'Destructive action', light: 'hsl(0 84% 60%)', dark: 'hsl(0 70% 40%)' },
      { name: '--destructive-foreground', role: 'Text on destructive', light: 'hsl(0 0% 100%)', dark: 'hsl(0 0% 100%)' },
      { name: '--border', role: 'Borders', light: 'hsl(210 10% 88%)', dark: 'hsl(210 5% 25%)' },
      { name: '--input', role: 'Input border', light: 'hsl(210 10% 88%)', dark: 'hsl(210 5% 25%)' },
      { name: '--ring', role: 'Focus ring', light: 'hsl(18 80% 40%)', dark: 'hsl(18 80% 40%)' },
    ]
  },
  {
    name: "vibrant",
    label: "Vibrant",
    tokens: [
      { name: '--background', role: 'Page background', light: 'hsl(260 50% 98%)', dark: 'hsl(265 45% 8%)' },
      { name: '--foreground', role: 'Primary text', light: 'hsl(265 20% 15%)', dark: 'hsl(260 30% 95%)' },
      { name: '--card', role: 'Card background', light: 'hsl(0 0% 100%)', dark: 'hsl(265 40% 12%)' },
      { name: '--card-foreground', role: 'Card text', light: 'hsl(265 20% 15%)', dark: 'hsl(260 30% 95%)' },
      { name: '--popover', role: 'Popover background', light: 'hsl(0 0% 100%)', dark: 'hsl(265 40% 12%)' },
      { name: '--popover-foreground', role: 'Popover text', light: 'hsl(265 20% 15%)', dark: 'hsl(260 30% 95%)' },
      { name: '--primary', role: 'Primary action', light: 'hsl(320 85% 55%)', dark: 'hsl(320 85% 60%)' },
      { name: '--primary-foreground', role: 'Text on primary', light: 'hsl(0 0% 100%)', dark: 'hsl(320 80% 95%)' },
      { name: '--secondary', role: 'Secondary action', light: 'hsl(260 30% 95%)', dark: 'hsl(260 20% 20%)' },
      { name: '--secondary-foreground', role: 'Text on secondary', light: 'hsl(260 20% 25%)', dark: 'hsl(260 30% 90%)' },
      { name: '--muted', role: 'Muted background', light: 'hsl(260 30% 95%)', dark: 'hsl(260 20% 20%)' },
      { name: '--muted-foreground', role: 'Muted text', light: 'hsl(260 15% 45%)', dark: 'hsl(260 15% 65%)' },
      { name: '--accent', role: 'Accent color', light: 'hsl(320 80% 95%)', dark: 'hsl(320 25% 15%)' },
      { name: '--accent-foreground', role: 'Text on accent', light: 'hsl(320 80% 30%)', dark: 'hsl(320 80% 75%)' },
      { name: '--destructive', role: 'Destructive action', light: 'hsl(0 84% 60%)', dark: 'hsl(0 70% 45%)' },
      { name: '--destructive-foreground', role: 'Text on destructive', light: 'hsl(0 0% 100%)', dark: 'hsl(0 0% 100%)' },
      { name: '--border', role: 'Borders', light: 'hsl(260 20% 90%)', dark: 'hsl(260 20% 25%)' },
      { name: '--input', role: 'Input border', light: 'hsl(260 20% 90%)', dark: 'hsl(260 20% 25%)' },
      { name: '--ring', role: 'Focus ring', light: 'hsl(320 85% 50%)', dark: 'hsl(320 85% 50%)' },
    ]
  },
  {
    name: "oceanic",
    label: "Oceanic",
    tokens: [
      { name: '--background', role: 'Page background', light: 'hsl(205 60% 97%)', dark: 'hsl(215 40% 8%)' },
      { name: '--foreground', role: 'Primary text', light: 'hsl(215 25% 18%)', dark: 'hsl(205 30% 95%)' },
      { name: '--card', role: 'Card background', light: 'hsl(0 0% 100%)', dark: 'hsl(215 40% 12%)' },
      { name: '--card-foreground', role: 'Card text', light: 'hsl(215 25% 18%)', dark: 'hsl(205 30% 95%)' },
      { name: '--popover', role: 'Popover background', light: 'hsl(0 0% 100%)', dark: 'hsl(215 40% 12%)' },
      { name: '--popover-foreground', role: 'Popover text', light: 'hsl(215 25% 18%)', dark: 'hsl(205 30% 95%)' },
      { name: '--primary', role: 'Primary action', light: 'hsl(210 90% 50%)', dark: 'hsl(210 90% 60%)' },
      { name: '--primary-foreground', role: 'Text on primary', light: 'hsl(0 0% 100%)', dark: 'hsl(210 90% 95%)' },
      { name: '--secondary', role: 'Secondary action', light: 'hsl(190 70% 95%)', dark: 'hsl(190 30% 20%)' },
      { name: '--secondary-foreground', role: 'Text on secondary', light: 'hsl(190 40% 25%)', dark: 'hsl(190 30% 90%)' },
      { name: '--muted', role: 'Muted background', light: 'hsl(205 40% 95%)', dark: 'hsl(215 20% 20%)' },
      { name: '--muted-foreground', role: 'Muted text', light: 'hsl(215 15% 45%)', dark: 'hsl(205 15% 65%)' },
      { name: '--accent', role: 'Accent color', light: 'hsl(210 90% 95%)', dark: 'hsl(210 30% 15%)' },
      { name: '--accent-foreground', role: 'Text on accent', light: 'hsl(210 90% 30%)', dark: 'hsl(210 90% 75%)' },
      { name: '--destructive', role: 'Destructive action', light: 'hsl(0 84% 60%)', dark: 'hsl(0 70% 45%)' },
      { name: '--destructive-foreground', role: 'Text on destructive', light: 'hsl(0 0% 100%)', dark: 'hsl(0 0% 100%)' },
      { name: '--border', role: 'Borders', light: 'hsl(205 30% 90%)', dark: 'hsl(215 20% 25%)' },
      { name: '--input', role: 'Input border', light: 'hsl(205 30% 90%)', dark: 'hsl(215 20% 25%)' },
      { name: '--ring', role: 'Focus ring', light: 'hsl(210 90% 45%)', dark: 'hsl(210 90% 45%)' },
    ]
  }
];

export const INITIAL_TOKENS: ColorToken[] = THEMES[0].tokens;
