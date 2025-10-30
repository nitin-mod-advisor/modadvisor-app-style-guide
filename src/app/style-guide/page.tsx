"use client"
import { useEffect, useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function StyleGuide() {
  const [tokens, setTokens] = useState<{ name: string; value: string }[]>([])
  const [theme, setThemeState] = useState('');
  
  useEffect(() => {
    setThemeState(document.documentElement.getAttribute('data-theme') || 'light');
    
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                const newTheme = document.documentElement.getAttribute('data-theme') || 'light';
                setThemeState(newTheme);
            }
        });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const styles = getComputedStyle(document.documentElement)
    const tokenNames = [
      "--bg","--surface","--surface-2","--text","--text-muted",
      "--border","--ring","--primary","--primary-foreground",
      "--secondary","--secondary-foreground","--accent","--accent-foreground",
      "--success","--warning","--error","--info","--overlay"
    ]
    setTokens(tokenNames.map(n => ({ name: n, value: styles.getPropertyValue(n).trim() })))
  }, [theme]) // Rerun when theme changes

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-bg text-text min-h-screen transition-colors">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-text">Style Guide Viewer</h1>
        <ThemeToggle />
      </header>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {tokens.map(t => (
          <div key={t.name} className="p-4 border border-border bg-surface rounded-lg shadow-sm flex flex-col items-center justify-center gap-2 text-center">
            <div className="w-12 h-12 rounded-lg border border-border mb-2 shadow-inner" style={{ background: t.value }} />
            <div className="text-sm font-mono text-text-muted">{t.name}</div>
            <div className="text-xs font-mono text-text break-all">{t.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
