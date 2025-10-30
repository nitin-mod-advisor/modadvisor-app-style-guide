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
