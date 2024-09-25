module.exports = {
    // eslint ulbitv
    // Основные настройки
    env: {
        browser: true, // код в бразуере
        es2021: true, // последние возможности es2021
        jest: true, // глобальные переменные для тестов в Jest
    },
    // Наследование правил (Стандартные рекомендованные правила для React, набор правил airbnb, правила для поддержки интернационализации)
    extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended'],
    // Поддержка TS и TSX парсером
    parser: '@typescript-eslint/parser',
    // Настройки парсера
    parserOptions: {
        ecmaFeatures: {
            jsx: true, // Включает поддержку JSX, необходимую для React
        },
        ecmaVersion: 'latest', // Можно использовать новейший синтаксис ES
        sourceType: 'module', // Поддержка ES-модулей (импорт/экспорт)
    },
    // Плагины для
    plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
    // Настройки правил
    rules: {
        'react/jsx-indent': [2, 4], // Отступы для JSX кода — 4 пробела
        'react/jsx-indent-props': [2, 4], // Отступы для атрибутов в JSX — 4 пробела
        indent: [2, 4], // Общий отступ для всего кода — 4 пробела
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ], // Разрешает JSX внутри файлов с расширением .js, .jsx и .tsx
        'import/no-unresolved': 'off', // Отключает правило проверки корректности путей к импортируемым модулям
        'import/prefer-default-export': 'off', // Отключает требование использовать default экспорт, когда экспортируется один элемент
        'no-unused-vars': 'off', // Отключает предупреждение о неиспользуемых переменных
        'react/require-default-props': 'off', // Отключает требование задавать defaultProps в React-компонентах
        'react/react-in-jsx-scope': 'off', // Отключает требование импортировать React при использовании JSX (не нужно с React 17+)
        'react/jsx-props-no-spreading': 'off', // Показывает предупреждение, если используется распространение пропсов (props spreading)
        'react/function-component-definition': 'off', // Отключает требование к определённому стилю написания функциональных компонентов
        'no-shadow': 'off', // Отключает правило, запрещающее переменным затенять другие переменные с тем же именем в верхних областях видимости
        'import/extensions': 'off', // Отключает проверку наличия расширений у импортируемых файлов
        'import/no-extraneous-dependencies': 'off', // Отключает правило проверки зависимостей, которые не указаны в package.json
        'no-underscore-dangle': 'off', // Разрешает использование переменных, начинающихся с подчеркивания (обычно для приватных переменных)
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true, // Применяет правило только для строк внутри JSX (чтобы все строки были переведены)
                ignoreAttribute: ['data-testid', 'to'], // Исключает определённые атрибуты из правила
            },
        ], // Ошибка, если используются "литеральные строки" в разметке, требуются переводы
        'max-len': ['error', { ignoreComments: true, code: 120 }], // Максимальная длина строки — 120 символов, игнорируются комментарии
        'jsx-a11y/no-static-element-interactions': 'off', // Отключает правило для доступности, которое запрещает статическим элементам иметь обработчики событий
        'jsx-a11y/click-events-have-key-events': 'off', // Отключает правило для доступности, которое требует клавиатурных событий для элементов с click-событиями
        'react-hooks/rules-of-hooks': 'error', // Проверяет правильное использование хуков в React (например, хуки не должны вызываться в циклах)
        'react-hooks/exhaustive-deps': 'error', // Проверяет зависимости для хуков useEffect, чтобы они всегда были правильно указаны
        'no-param-reassign': 'off', // Отключает правило, которое запрещает изменять параметры функций
        'no-undef': 'off', // Отключает правило, которое запрещает использование необъявленных переменных

        // Новые
        'react/jsx-no-useless-fragment': 'off',
        'no-return-await': 'off',
    },
    // Глобальные переменные
    globals: {
        __IS_DEV__: true, // режим сборки
        __API__: true, // доступ к api
    },
    // Переопределение правил для определённых файлов
    overrides: [
        {
            // файлы тестов, сторибуков, для них переопределяем правила
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
        },
    ],
};
