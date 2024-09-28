import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export interface componentRenderOptions {
    route?: string;
    // Указываем не весь стейт, а только определенные участки для тестирования
    initialState?: DeepPartial<StateSchema>;
}

// Провайдеры для тестов
export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
    const {
        route = '/',
        initialState,
    } = options;

    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                {/* <StoreProvider initialState={initialState}> */}
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
                {/* </StoreProvider> */}
            </MemoryRouter>
        </StoreProvider>,
    );
}
