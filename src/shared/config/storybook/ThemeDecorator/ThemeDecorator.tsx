import type { Story } from '@storybook/react';
import { ThemeProvider, type Theme } from 'app/providers/ThemeProvider';

// Декоратор, который навешивает тему на сторис (замыканиями)
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
