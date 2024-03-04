import { FC, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT; // получили тему из ls, преобразовали к типу Theme, если ls пустой - присвоить дефолтный тип

// Возвращает из контекста провайдер (доступ к контексту в любой точке)
const ThemeProvider: FC = ({ children }) => {
  // FC чтобы получить children
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  //value=объект, поэтому его нужно мемоизировать, чтобы он не инициализировался заново при каждом рендере компонента
  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
