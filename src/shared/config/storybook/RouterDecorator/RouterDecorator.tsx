import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

// Декоратор для поддержки роутера
export const RouterDecorator = (story: () => Story) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
);
