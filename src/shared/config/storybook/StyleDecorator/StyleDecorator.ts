import 'app/styles/index.scss';
import { Story } from '@storybook/react';

// Оборачивает сторис, подключая глобальные стили
export const StyleDecorator = (story: () => Story) => story();
