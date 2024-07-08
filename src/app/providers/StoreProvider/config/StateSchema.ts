import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';
import { type UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateSchema {
    user: UserSchema;

    // Асинхронные редьюсеры (добавляются менеджером)
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
}

export type StateSchemaKeys = keyof StateSchema; // Названия редьюсеров

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (
        state: StateSchema,
        action: AnyAction,
    ) => CombinedState<StateSchema>;
    add: (key: StateSchemaKeys, reducer: Reducer) => void;
    remove: (key: StateSchemaKeys) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}
