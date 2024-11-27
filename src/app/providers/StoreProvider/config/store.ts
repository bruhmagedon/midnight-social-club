import {
    CombinedState,
    configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { counterReducer } from '_entities/Counter';
import { userReducer } from '_entities/User';
import { $api } from 'shared/api/api';
import { NavigateOptions, To, useNavigate } from 'react-router-dom';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
    initialState? : StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void,
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
                    navigate,
                },
            },
        }),
    });

    // @ts-ignore - добавили редьюсер менеджер для стора
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']; // Типизация dispatch
