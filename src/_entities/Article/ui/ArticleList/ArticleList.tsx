import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => (
    Array.from({ length: view === ArticleView.SMALL ? 9 : 3 }, (_, index) => (
        <ArticleListItemSkeleton className={cls.card} view={view} key={index} />
    ))
);

export const ArticleList = ({
    className,
    articles,
    view = ArticleView.SMALL,
    isLoading,
}: ArticleListProps) => {
    const renderArticle = (article: Article) => (
        <ArticleListItem article={article} view={view} className={cls.card} />
    );

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0 ? articles.map(renderArticle) : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
};
