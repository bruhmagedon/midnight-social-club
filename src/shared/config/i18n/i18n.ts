import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// конфигурация
i18n
    // подключение плагинов
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)

    .init({
        fallbackLng: 'ru', // язык по умолчанию
        debug: __IS_DEV__, // дебаг в консоль (только в деф режиме)

        interpolation: {
            escapeValue: false, // not needed for react as iapes by defaultt esc
        },
    });

export default i18n;
