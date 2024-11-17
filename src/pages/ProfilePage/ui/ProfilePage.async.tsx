import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Имитация подгрузки страницы
    setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));
