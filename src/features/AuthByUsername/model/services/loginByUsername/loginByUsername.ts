import { createAsyncThunk } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { User, userActions } from '_entities/User';
import { ThunkConfig } from 'app/providers/StoreProvider';

// Агрументы
interface LoginByUsernameProps {
    username: string;
    password: string;
}

// Первый асинхронный thunk             <Что возвращает, Что принимает, Типизация thunkAPI>
export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    // Фича - логин
    'login/loginByUsername',
    async ({ username, password }, thunkAPI) => {
        const { dispatch, extra, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api.post<User>('/login', {
                username, password,
            });
            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },

);

//
