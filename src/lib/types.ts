
export type ColorToken = {
  name: string;
  role: string;
  light: string;
  dark: string;
};

export type ColorPalette = {
  id: string;
  tokens: ColorToken[];
};

export type TypographySettings = {
  fontFamily: string;
};

export type AllowedUser = {
    email: string;
};

export type LoginAttempt = {
    id?: string;
    email: string;
    status: 'success' | 'failure';
    timestamp: Date;
    reason?: string;
};
