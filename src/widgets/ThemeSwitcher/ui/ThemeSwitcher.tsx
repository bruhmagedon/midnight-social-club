import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/light-mode.svg';
import DarkIcon from 'shared/assets/icons/dark-mode.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo } from 'react';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string; // доп-класс (additional)
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme(); // хук для темы

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
});
