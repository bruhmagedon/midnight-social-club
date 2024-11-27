import { useContext, useEffect } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

// Что должен возвращать хук
interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
    mountTheme: () => void;
}

// Хук - выбор темы
export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext); // достали тему из контекста (LS)

    const mountTheme = () => {
        document.body.className = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || '';
    };

    // Переключить тему
    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme?.(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
        mountTheme,
    };
}
