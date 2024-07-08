import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducers } from 'entities/Profile';

const reducers: ReducersList = {
    profile: profileReducers,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, {}, [className])}></div>
        </DynamicModuleLoader>
    );
};
export default ProfilePage;
