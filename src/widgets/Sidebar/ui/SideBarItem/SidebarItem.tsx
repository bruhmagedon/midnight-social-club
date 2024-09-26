import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import { useTranslation } from 'react-i18next';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

// Отмена ререндера при ререндере родителя,
// ререндер будет только при изменении пропсов
// memo - хороший тон, 90% компонентов можно в него обернуть
// исключение - если в компоненте есть children
// но только если в дочернем сложная древовидная структура, не один текст например
// её и хранить тяжело по памяти, и высок шанс что там все равно будет ререндер
// memo экономит ресурсы процессора, а берет в замен лишь память (которой и так много)
export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();

    return (
        <AppLink
            to={item.path}
            theme={AppLinkTheme.PRIMARY}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
});
