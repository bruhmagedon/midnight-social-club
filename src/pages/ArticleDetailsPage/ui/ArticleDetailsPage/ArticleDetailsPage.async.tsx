import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Имитация подгрузки страницы
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 1500);
}));
