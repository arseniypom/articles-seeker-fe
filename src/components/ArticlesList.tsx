import Article from './Article';
import { IArticle } from '../types/article';
import ArticleSkeleton from './ArticleSkeleton';

interface IArticleProps {
  articles?: IArticle[];
  topic?: string;
  isLoading: boolean;
  error: string | null;
}

function ArticlesList({ articles, topic, isLoading, error }: IArticleProps) {
  if (isLoading) {
    return (
      <>
        <ArticleSkeleton />
      </>
    );
  }

  if (error) {
    return error;
  }

  if (!topic) {
    return "Start typing and we'll find the best articles for you ✨";
  }

  if (!articles?.length) {
    return 'Sorry, we could not find any match... Please try other topic';
  }

  return (
    <>
      {articles.map((article) => (
        <Article
          key={article.id}
          article={article}
          sx={{ mb: 2, ':last-child': { mb: 0 }, textAlign: 'left' }}
        />
      ))}
    </>
  );
}

export default ArticlesList;
