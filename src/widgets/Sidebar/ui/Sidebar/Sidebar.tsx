//

import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useState } from 'react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { SidebatItemsList } from '../../model/items';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                {SidebatItemsList.map((item) => <SidebarItem key={item.path} item={item} collapsed={collapsed} />)}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    short={collapsed}
                    className={cls.lang}
                />
            </div>
        </div>
    );
});
// import { memo, useState } from 'react';
// import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
// import { LangSwitcher } from 'widgets/LangSwitcher';
// import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
// import cls from './Sidebar.module.scss';
// import { SidebarItemsList } from '../../model/items';
// import { SidebarItem } from '../SideBarItem/SidebarItem';

// interface SidebarProps {
//     className?: string;
// }

// export const Sidebar = memo(({ className }: SidebarProps) => {
//     const [collapsed, setCollapsed] = useState<boolean>(false); // развернут ли сайдбар

//     const onToggle = () => {
//         setCollapsed((prev) => !prev);
//     };

//     return (
//         <div
//             data-testid="sidebar"
//             className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
//                 className,
//             ])}
//         >
//             <Button
//                 data-testid="sidebar-toggle"
//                 className={cls.collapseBtn}
//                 onClick={onToggle}
//                 theme={ButtonTheme.BACKGROUND_INVERTED}
//                 square
//                 size={ButtonSize.L}
//             >
//                 {collapsed ? '>' : '<'}
//             </Button>
//             <div className={cls.items}>
//                 {SidebarItemsList.map((item) => (
//                     <SidebarItem
//                         key={item.path}
//                         item={item}
//                         collapsed={collapsed}
//                     />
//                 ))}
//             </div>
//             <div className={cls.switchers}>
//                 <ThemeSwitcher />
//                 <LangSwitcher className={cls.lang} short={collapsed} />
//             </div>
//         </div>
//     );
// });
