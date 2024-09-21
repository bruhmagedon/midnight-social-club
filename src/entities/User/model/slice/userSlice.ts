import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { User, type UserSchema } from '../types/user';

const initialState: UserSchema = {};

// Сущность отвечающая за то авторизован ли пользователь или нет
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Авторизация
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        // Проверка авторизации
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducers } = userSlice;
