import Article from './Article';
import { IArticle } from '../types/article';
import ArticleSkeleton from './ArticleSkeleton';
import { Button, Stack, Typography } from '@mui/material';

interface IArticleProps {
  articles?: IArticle[];
  topic?: string;
  isLoading: boolean;
  error: string | null;
}

function ArticlesList({ articles, topic, isLoading, error }: IArticleProps) {
  const reloadPage = () => window.location.reload();

  if (isLoading) {
    return (
      <Stack gap={2}>
        <ArticleSkeleton />
        <ArticleSkeleton />
        <ArticleSkeleton />
      </Stack>
    );
  }

  if (error) {
    return (
      <Stack alignItems="center">
        <Typography>
          Something went wrong... Please reload the page or try again later
        </Typography>
        <Button
          variant="outlined"
          onClick={reloadPage}
          sx={{ mt: 1, width: 'fit-content' }}
        >
          Reload page
        </Button>
      </Stack>
    );
  }

  if (!topic) {
    return (
      <Typography>
        Start typing and we'll find the best articles for you ✨
      </Typography>
    );
  }

  if (!articles?.length) {
    return (
      <Typography>
        Sorry, we could not find any match... Please try other topic
      </Typography>
    );
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
