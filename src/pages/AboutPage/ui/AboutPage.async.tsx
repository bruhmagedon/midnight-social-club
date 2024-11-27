import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Имитация подгрузки страницы
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
