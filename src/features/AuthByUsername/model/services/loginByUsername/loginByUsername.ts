import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { User, userActions } from 'entity/User';

// Агрументы
interface LoginByUsernameProps {
    username: string;
    password: string;
}

// Первый асинхронный thunk             <Что возвращает, Что принимает, Типизация thunkAPI>
export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
    // Фича - логин
    'login/loginByUsername',
    async ({ username, password }, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', {
                username, password,
            });
            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },

);

//
