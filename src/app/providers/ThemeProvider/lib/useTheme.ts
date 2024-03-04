import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

// Что должен возвращать хук
interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

// Хук - выбор темы
export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext); //достали тему из контекста (LS)

  //Переключить тему
  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
}
