import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './MainPage.module.scss';

const MainPage = memo(() => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.MainPage)}>{t('Главная страница')}</div>
    );
});

export default MainPage;
