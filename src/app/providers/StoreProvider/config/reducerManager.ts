import {
    AnyAction,
    ReducersMapObject,
    combineReducers,
    Reducer,
} from '@reduxjs/toolkit';
import {
    MountedReducers, ReducerManager, StateSchema, StateSchemaKey,
} from './StateSchema';

// Менеджр, чтобы добавлять в райнтайме редьюсеры (асинхронно)
export function createReducerManager(
    initialReducers: ReducersMapObject<StateSchema>, // Дефотные редьюсеры
): ReducerManager {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers); // Корневой редьюсер

    let keysToRemove: StateSchemaKey[] = []; // Названия редьюсеров которые мы хотим удалить (например - loginForm)
    const mounterReducers: MountedReducers = {}; // Названия редьюсеров которые мы хотим подключить (например - loginForm)

    return {
        getReducerMap: () => reducers, // Вовзращает редьюсеры
        getMountedReducers: () => mounterReducers,
        // Функция-редьюсер, удаляет редьюсеры по ключам из стейта
        // AnyAction = любой action
        reduce: (state: StateSchema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state };

                keysToRemove.forEach((key) => {
                    delete state[key];
                });

                keysToRemove = [];
            }
            // Возвращаем новый редьюсер без старых ключей
            return combinedReducer(state, action);
        },

        // Добавление редьюсера
        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }
            reducers[key] = reducer;
            mounterReducers[key] = true;
            combinedReducer = combineReducers(reducers);
        },

        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return;
            }
            delete reducers[key];
            keysToRemove.push(key);
            mounterReducers[key] = false;
            combinedReducer = combineReducers(reducers);
        },
    };
}
