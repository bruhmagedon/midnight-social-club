import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useState, useCallback, memo } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from '_entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => dispatch(userActions.logout()), [dispatch]);

    // Если авторизован
    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onLogout}
                >
                    {t('Выйти')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
        </div>
    );
};

// /* eslint-disable i18next/no-literal-string */
// import { classNames } from 'shared/lib/classNames/classNames';
// import { useTranslation } from 'react-i18next';
// import { Button, ButtonTheme } from 'shared/ui/Button/Button';
// import { memo, useCallback, useState } from 'react';
// import { LoginModal } from 'features/AuthByUsername';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUserAuthData, userActions } from 'entities/User';
// import cls from './Navbar.module.scss';

// interface NavbarProps {
//     className?: string;
// }

// export const Navbar = memo(({ className }: NavbarProps) => {
//     const { t } = useTranslation();
//     const [isAuthModal, setIsAuthModal] = useState(false);
//     const authData = useSelector(getUserAuthData);
//     const dispatch = useDispatch();

//     // Все функции, которые передаются как пропсы, будем кешировать
//     const onCloseModal = useCallback(() => {
//         setIsAuthModal(false);
//     }, []);

//     const onShowModal = useCallback(() => {
//         setIsAuthModal(true);
//     }, []);

//     const onLogout = useCallback(() => {
//         dispatch(userActions.logout());
//     }, [dispatch]);

//     if (authData) {
//         return (
//             <div className={classNames(cls.Navbar, {}, [className])}>
//                 <Button
//                     theme={ButtonTheme.CLEAR}
//                     className={cls.links}
//                     onClick={onLogout}
//                 >
//                     {t('Выйти')}
//                 </Button>
//             </div>
//         );
//     }

//     return (
//         <div className={classNames(cls.Navbar, {}, [className])}>
//             <Button
//                 theme={ButtonTheme.CLEAR}
//                 className={cls.links}
//                 onClick={onShowModal}
//             >
//                 {t('Войти')}
//             </Button>

//             {isAuthModal && (
//                 <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
//             )}
//         </div>
//     );
// });
