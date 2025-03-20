import { EntityAdapter, EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from '_entities/Article';

export interface ArticlesPageSchema extends EntityState<Article>{
    isLoading?: boolean;
    error?: string;

    view: ArticleView;
}
