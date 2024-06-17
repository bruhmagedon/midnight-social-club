import {
    AnyAction,
    ReducersMapObject,
    combineReducers,
    Reducer,
} from '@reduxjs/toolkit';
import { ReducerManager, StateSchema, StateSchemaKeys } from './StateSchema';

// Менеджр, чтобы добавлять в райнтайме редьюсеры (асинхронно)
export function createReducerManager(
    initialReducers: ReducersMapObject<StateSchema>,
): ReducerManager {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers);

    let keysToRemove: StateSchemaKeys[] = []; // Названия редьюсеров которые нужно удалить

    return {
        getReducerMap: () => reducers,

        reduce: (state: StateSchema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state };

                keysToRemove.forEach(key => {
                    delete state[key];
                });

                keysToRemove = [];
            }
            return combinedReducer(state, action);
        },
        add: (key: StateSchemaKeys, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }
            reducers[key] = reducer;
            combinedReducer = combineReducers(reducers);
        },

        remove: (key: StateSchemaKeys) => {
            if (!key || !reducers[key]) {
                return;
            }
            delete reducers[key];
            keysToRemove.push(key);
            combinedReducer = combineReducers(reducers);
        },
    };
}

// const staticReducers = {
//     users: usersReducer,
//     posts: postsReducer,
// };

// export function configureStore(initialState) {
//     const reducerManager = createReducerManager(staticReducers);

//     // Create a store with the root reducer function being the one exposed by the manager.
//     const store = createStore(reducerManager.reduce, initialState);

//     // Optional: Put the reducer manager on the store so it is easily accessible
//     store.reducerManager = reducerManager;
// }
