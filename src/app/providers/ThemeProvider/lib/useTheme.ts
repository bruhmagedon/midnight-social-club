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
        let newTheme: Theme;
        switch (theme) {
        case Theme.DARK:
            newTheme = Theme.LIGHT;
            break;
        case Theme.LIGHT:
            newTheme = Theme.ORANGE;
            break;
        case Theme.ORANGE:
            newTheme = Theme.DARK;
            break;
        default:
            newTheme = Theme.LIGHT;
        }

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
