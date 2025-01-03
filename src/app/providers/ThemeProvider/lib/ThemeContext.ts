import { createContext } from 'react';

// доступные темы
export enum Theme {
    LIGHT = 'app_light_theme',
    DARK = 'app_dark_theme',
}
// Интерфейс для контекста
export interface ThemeContextProps {
    theme?: Theme; // тема
    setTheme?: (theme: Theme) => void; // изменить тему
}

// Контекст для тем
export const ThemeContext = createContext<ThemeContextProps>({});

// Ключ для LS (состояние темы сайта)
export const LOCAL_STORAGE_THEME_KEY = 'theme';
