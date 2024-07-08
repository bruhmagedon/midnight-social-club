import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
    isLoading: false,
    readonly: true,
    error: undefined,
    data: undefined,
};

// Сущность отвечающая за то авторизован ли пользователь или нет
export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducers } = profileSlice;
