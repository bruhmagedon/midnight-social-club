import {
    AnyAction, CombinedState, Dispatch, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ArticleDetailsSchema } from '_entities/Article';
import { CounterSchema } from '_entities/Counter';
import { ProfileSchema } from '_entities/Profile';
import { UserSchema } from '_entities/User';
import { AxiosInstance } from 'axios';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { LoginSchema } from 'features/AuthByUsername/model/types/loginSchema';
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import { ArticlesPageSchema } from 'pages/ArticlesPage';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;

    // Асинхронные редьюсеры
    loginForm?: LoginSchema;
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
    articleDetailsComments?: ArticleDetailsCommentsSchema;
    addCommentForm?: AddCommentFormSchema;
    articlesPage?: ArticlesPageSchema;
}

export type StateSchemaKey = keyof StateSchema; // Названия редьюсеров (название=ключ)
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (
        state: StateSchema,
        action: AnyAction,
    ) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    getMountedReducers: () => MountedReducers;
}

// EnhancedStore - стандартный тип, который возвращается при создании стора
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance,
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
