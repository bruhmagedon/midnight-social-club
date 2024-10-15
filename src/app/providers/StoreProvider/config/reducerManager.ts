import {
    AnyAction,
    ReducersMapObject,
    combineReducers,
    Reducer,
} from '@reduxjs/toolkit';
import { ReducerManager, StateSchema, StateSchemaKeys } from './StateSchema';

// Менеджр, чтобы добавлять в райнтайме редьюсеры (асинхронно)
export function createReducerManager(
    initialReducers: ReducersMapObject<StateSchema>, // Дефотные редьюсеры
): ReducerManager {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers); // Корневой редьюсер

    let keysToRemove: StateSchemaKeys[] = []; // Названия редьюсеров которые мы хотим удалить (например - loginForm)

    return {
        getReducerMap: () => reducers, // Вовзращает редьюсеры

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
