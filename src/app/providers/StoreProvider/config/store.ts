import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import type { StateSchema } from './StateSchema';
import { userReducers } from 'entities/User';
import { createReducerManager } from './reducerManager';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducers,
        // loginForm: loginReducers,
    };

    // Асинхронная подгрузка редьюссеров
    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
