import {
    configureStore,
    type CombinedState,
    type Reducer, type ReducersMapObject,
} from '@reduxjs/toolkit';
import { counterReducer } from '_entities/Counter';
import { userReducer } from '_entities/User';
import { $api } from 'shared/api/api';
import type { StateSchema, ThunkExtraArg } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
    initialState? : StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    // Список корневых редьюсеров
    const rootReducers : ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk:
            {
                extraArgument: {
                    api: $api,
                },
            },
        }),
    });

    // @ts-ignore - добавили редьюсер менеджер для стора
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']; // Типизация dispatch
