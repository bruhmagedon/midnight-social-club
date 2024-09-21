import { Link, type LinkProps } from 'react-router-dom';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

// Расширяемся от типа Link (+to, +children)
interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children?: React.ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        className,
        to,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])} // cls['secondary']
            {...otherProps}
        >
            {children}
        </Link>
    );
});
