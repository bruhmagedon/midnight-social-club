import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

// Декоратор, который навешивает тему на сторис (замыканиями)
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
