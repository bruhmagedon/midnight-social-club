import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from '_entities/Profile/model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className, data, isLoading, error,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { }, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    title={t('Произошла ошибка при загрузке профиля')}
                    theme={TextTheme.ERROR}
                    text={t('Попробуйте обновить страницу')}
                    align={}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div>
                <div className={cls.header}>
                    <Text title={t('Профиль')} />
                    <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn}>{t('Редактировать')}</Button>
                </div>
            </div>
            <div className={cls.data}>
                <Input value={data?.first} placeholder={t('Ваше имя')} />
                <Input value={data?.lastname} placeholder={t('Ваша фамилия')} className={cls.input} />
            </div>
        </div>
    );
};
