export type ColorToken = {
  name: string;
  role: string;
  light: string;
  dark: string;
};

export const INITIAL_TOKENS: ColorToken[] = [
  { name: '--bg', role: 'Page background', light: '#F8FAFC', dark: '#0B1220' },
  { name: '--surface', role: 'Cards, modals', light: '#FFFFFF', dark: '#0F172A' },
  { name: '--surface-2', role: 'Muted surfaces', light: '#F1F5F9', dark: '#111827' },
  { name: '--text', role: 'Primary text', light: '#0F172A', dark: '#E5E7EB' },
  { name: '--text-muted', role: 'Secondary text', light: '#64748B', dark: '#94A3B8' },
  { name: '--border', role: 'Borders/dividers', light: '#E2E8F0', dark: '#1F2937' },
  { name: '--ring', role: 'Focus ring', light: '#1D4ED8', dark: '#60A5FA' },
  { name: '--primary', role: 'Brand color', light: '#1E3A8A', dark: '#60A5FA' },
  { name: '--primary-foreground', role: 'On-brand text', light: '#FFFFFF', dark: '#0B1220' },
  { name: '--secondary', role: 'Secondary color', light: '#475569', dark: '#94A3B8' },
  { name: '--secondary-foreground', role: 'On-secondary text', light: '#FFFFFF', dark: '#0B1220' },
  { name: '--accent', role: 'Highlights', light: '#06B6D4', dark: '#22D3EE' },
  { name: '--accent-foreground', role: 'On-accent text', light: '#052B36', dark: '#062429' },
  { name: '--success', role: 'Success', light: '#16A34A', dark: '#22C55E' },
  { name: '--warning', role: 'Warning', light: '#F59E0B', dark: '#FBBF24' },
  { name: '--error', role: 'Error', light: '#DC2626', dark: '#F87171' },
  { name: '--info', role: 'Info', light: '#0EA5E9', dark: '#38BDF8' },
  { name: '--overlay', role: 'Modal overlay', light: 'rgba(15,23,42,0.55)', dark: 'rgba(2,6,23,0.65)' },
];
