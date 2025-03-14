import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
}

export const ArticleDetails = ({ className }: ArticleDetailsProps) => (
    <div className={classNames(cls.ArticleDetails, {}, [className])}>
        ПИЗДА
    </div>
);
