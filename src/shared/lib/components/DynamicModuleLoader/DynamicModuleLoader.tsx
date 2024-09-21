import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import {
    ReduxStoreWithManager,
    StateSchemaKeys,
} from 'app/providers/StoreProvider';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [name in StateSchemaKeys]?: Reducer;
};

type ReducersListEntry = [StateSchemaKeys, Reducer];

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
    children: React.ReactNode;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const { children, reducers, removeAfterUnmount } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        // В момент монтирования компонента добавляем  асинк-редьюсер через менеджер
        // Теперь редьюсер изолирован внутри модуля, он не будет использоваться в других фичах
        // Редьюсер будет подключаться только с монтированием (lazy) этого компонента

        Object.entries(reducers).forEach(
            ([name, reducer]: ReducersListEntry) => {
                store.reducerManager.add(name, reducer);
                dispatch({ type: '@INIT  reducer' });
            },
        );

        return () => {
            if (removeAfterUnmount) {
                // Удаление при демонтировании компонента
                Object.entries(reducers).forEach(
                    ([name]: ReducersListEntry) => {
                        store.reducerManager.remove(name);
                        dispatch({ type: '@DESTROY  reducer' });
                    },
                );
            }
        };
        // eslint-disable-next-line
    }, []);

    return <>{children}</>;
};
