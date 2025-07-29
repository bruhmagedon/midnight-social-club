import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesPageInited,
} from '../selectors/articlePageSelectors';
import { articlePageActions } from '../slices/articlesPageSlice';
import { fetchArticlesList } from './fetchArticlesList';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (_, thunkApi) => {
        const { dispatch, getState } = thunkApi;
        const inited = getArticlesPageInited(getState());
        if (!inited) {
            dispatch(articlePageActions.initState());
            dispatch(fetchArticlesList({
                page: 1,
            }));
        }
    },
);
