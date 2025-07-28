import { Counter } from '_entities/Counter';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Page } from 'shared/ui/Page/Page';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('Главная страница')}
        </Page>
    );
};

export default MainPage;
