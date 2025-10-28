'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeProviderProps {
    children: ReactNode;
    defaultTheme?: Theme;
}

interface ThemeProviderState {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined);

export function ThemeProvider({ children, defaultTheme = 'light' }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    // Load stored theme on mount (client-only)
    useEffect(() => {
        if (typeof window === 'undefined') return; // SSR safety
        const storedTheme = localStorage.getItem('theme') as Theme | null;
        if (storedTheme === 'light' || storedTheme === 'dark') {
            setTheme(storedTheme);
        } else {
            setTheme(defaultTheme);
        }
    }, [defaultTheme]);

    // Apply & persist theme to <html> element
    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

    return (
        <ThemeProviderContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

export const useTheme = (): ThemeProviderState => {
    const context = useContext(ThemeProviderContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
