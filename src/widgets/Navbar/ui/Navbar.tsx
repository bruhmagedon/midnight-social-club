/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { Modal } from 'widgets/Modal';
interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    // Все функции, которые передаются как пропсы, будем кешировать
    const onToggleModal = useCallback(() => {
        setIsAuthModal(prev => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>

            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Esse sint occaecat deserunt dolor voluptate anim exercitation
                laborum ut sit veniam mollit eiusmod do. Occaecat aliquip minim
                sunt ipsum aliquip non et velit laborum ullamco aute c upidatat
                consequat do. Eiusmod in cupidatat proident sit velit anim.
                Ipsum adipisicing minim consectetur irure.
            </Modal>
        </div>
    );
};
