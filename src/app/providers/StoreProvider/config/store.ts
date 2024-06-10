import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import type { StateSchema } from './StateSchema';
import { userReducers } from 'entities/User';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = { user: userReducers };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
