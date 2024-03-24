import { render } from '@testing-library/react';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { I18nextProvider } from 'react-i18next';

// Обертка для теста компонета с учетом i18n
export function renderWithTranslation(component: React.ReactNode) {
    return render(
        // В i18n передаем конфиг ай18 для тестов
        <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>,
    );
}
