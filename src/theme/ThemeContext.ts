import { createContext } from "react";

// доступные темы
export const enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

// Интерфейс для контекста
export interface ThemeContextProps {
  theme?: Theme; //тема
  setTheme?: (theme: Theme) => void; //изменить тему
}

// Контекст для тем
export const ThemeContext = createContext<ThemeContextProps>({});

// Ключ для LS (состояние темы сайта)
export const LOCAL_STORAGE_THEME_KEY = "theme";
