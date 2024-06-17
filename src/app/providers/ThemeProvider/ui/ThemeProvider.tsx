import { type FC, useMemo, useState, useEffect } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from '../lib/ThemeContext';
import { useTheme } from '../lib/useTheme';

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT; // получили тему из ls, преобразовали к типу Theme, если ls пустой - присвоить дефолтный тип

interface ThemeProviderProps {
    initialTheme?: Theme;
}

// Возвращает из контекста провайдер (доступ к контексту в любой точке)
const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);
    const { mountTheme } = useTheme();

    // Достать тему из LC для body
    useEffect(() => {
        mountTheme();
    }, [mountTheme]);

    // value=объект, поэтому его нужно мемоизировать, чтобы он не инициализировался заново при каждом рендере компонента
    const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
