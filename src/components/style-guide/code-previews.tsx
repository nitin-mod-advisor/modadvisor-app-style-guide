"use client"

import React from 'react';
import type { ColorToken } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Clipboard, Download } from 'lucide-react';

interface CodePreviewsProps {
  tokens: ColorToken[];
}

const CodeBlock: React.FC<{ title: string; code: string; language: string; fileName: string }> = ({ title, code, language, fileName }) => {
  const { toast } = useToast();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      toast({
        title: "Copied to clipboard!",
        description: `${title} code has been copied.`,
      });
    });
  };

  const downloadFile = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h3 className="font-semibold text-lg text-muted-foreground mb-2">{title}</h3>
      <div className="relative group">
        <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={copyToClipboard} aria-label="Copy code">
            <Clipboard className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={downloadFile} aria-label="Download code">
            <Download className="h-4 w-4" />
          </Button>
        </div>
        <pre className="bg-muted border border-border rounded-lg p-4 text-xs font-mono overflow-x-auto">
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export function CodePreviews({ tokens }: CodePreviewsProps) {
  const cssCode = `/* LIGHT THEME */
:root, [data-theme="light"] {
${tokens.map(t => `  ${t.name}: ${t.light.replace('hsl(','').replace(')','')};`).join('\n')}
}

/* DARK THEME */
[data-theme="dark"] {
${tokens.map(t => `  ${t.name}: ${t.dark.replace('hsl(','').replace(')','')};`).join('\n')}
}`;

  const tailwindCode = `// tailwind.config.js
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    }
  }
};`;

  return (
    <section className="space-y-8">
       <h2 className="text-2xl font-bold">Export Code</h2>
       <CodeBlock title="CSS Variables" code={cssCode} language="css" fileName="theme.css" />
       <CodeBlock title="Tailwind Config" code={tailwindCode} language="javascript" fileName="tailwind.config.js" />
    </section>
  );
}
