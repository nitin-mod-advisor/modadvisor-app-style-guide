
'use client';

import { useContext, useEffect, useState } from 'react';
import { doc } from 'firebase/firestore';
import { useDoc, useMemoFirebase, FirebaseContext } from '@/firebase';
import { TypographySettings, ColorPalette as ColorPaletteType, ColorToken } from '@/lib/types';
import { THEMES } from '@/lib/style-guide-data';

const TYPOGRAPHY_SETTINGS_ID = "typography";
const SETTINGS_COLLECTION = "settings";
const PALETTES_COLLECTION = "palettes";

export function GlobalStyleUpdater({ activeTheme }: { activeTheme: string }) {
  const firebaseContext = useContext(FirebaseContext);

  if (!firebaseContext || !firebaseContext.firestore) {
    return null;
  }
  
  return <ClientStyleUpdater activeTheme={activeTheme} />;
}

function ClientStyleUpdater({ activeTheme }: { activeTheme: string }) {
    const { firestore } = useContext(FirebaseContext)!;
    const [tokens, setTokens] = useState<ColorToken[]>([]);
    const [isClient, setIsClient] = useState(false);

    // Font settings logic
    const typographySettingsRef = useMemoFirebase(() => {
        if (!firestore) return null;
        return doc(firestore, SETTINGS_COLLECTION, TYPOGRAPHY_SETTINGS_ID);
    }, [firestore]);

    const { data: settingsData } = useDoc<TypographySettings>(typographySettingsRef);

    useEffect(() => {
        if (settingsData?.fontFamily) {
            document.documentElement.style.setProperty('--font-body', settingsData.fontFamily);
        }
    }, [settingsData]);

    // Theme/Color palette logic
    const paletteRef = useMemoFirebase(() => {
        if (!firestore || !activeTheme) return null;
        return doc(firestore, PALETTES_COLLECTION, activeTheme);
    }, [firestore, activeTheme]);

    const { data: paletteData, isLoading: isPaletteLoading } = useDoc<ColorPaletteType>(paletteRef);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (paletteData) {
            setTokens(paletteData.tokens);
        } else if (!isPaletteLoading) {
            const localTheme = THEMES.find(t => t.name === activeTheme);
            if (localTheme) {
                setTokens(localTheme.tokens);
            }
        }
    }, [paletteData, isPaletteLoading, activeTheme]);
  
    useEffect(() => {
        if (typeof window === 'undefined' || !isClient || tokens.length === 0) return;

        const styleId = 'dynamic-theme-styles';
        let styleTag = document.getElementById(styleId) as HTMLStyleElement | null;
        if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = styleId;
        document.head.appendChild(styleTag);
        }
        
        const lightVars = tokens.map(token => {
            const value = token.light.startsWith('hsl') 
                ? token.light.replace('hsl(', '').replace(')', '').replace(/%/g, '')
                : token.light;
            return `  ${token.name}: ${value};`;
        }).join('\n');

        const darkVars = tokens.map(token => {
            const value = token.dark.startsWith('hsl') 
                ? token.dark.replace('hsl(', '').replace(')', '').replace(/%/g, '')
                : token.dark;
            return `  ${token.name}: ${value};`;
        }).join('\n');
        
        const css = `
    :root {
    ${lightVars}
    }

    .dark {
    ${darkVars}
    }`;

        styleTag.innerHTML = css;

    }, [tokens, isClient]);


    return null;
}
