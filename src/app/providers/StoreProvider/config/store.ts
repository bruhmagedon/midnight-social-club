import { configureStore, DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from '_entities/Counter';
import { userReducer } from '_entities/User';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(initialState? : StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
    // Список корневых редьюсеров
    const rootReducers : ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    // @ts-ignore - добавили редьюсер менеджер для стора
    store.reducerManager = reducerManager;

    return store;
}
