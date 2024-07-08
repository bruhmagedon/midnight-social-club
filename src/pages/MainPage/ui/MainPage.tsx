import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';
import { memo } from 'react';

const MainPage = memo(() => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.MainPage)}>{t('Главная страница')}</div>
    );
});

export default MainPage;
