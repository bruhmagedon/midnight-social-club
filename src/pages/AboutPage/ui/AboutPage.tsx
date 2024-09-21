import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = memo(() => {
    // Первый аргумент - название namespace откуда брать перевод (по дефолтку если не указать - translation)
    const { t } = useTranslation('about');
    return <div>{t('О нас')}</div>;
});

export default AboutPage;
