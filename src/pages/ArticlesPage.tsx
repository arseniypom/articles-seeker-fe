import { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Pagination, Tooltip, Typography } from '@mui/material';
import ArticlesList from '../components/ArticlesList';
import { IArticlesResponse } from '../types/article';
import { useAxiosRequest } from '../hooks/useAxiosRequest';
import { SubscriptionPlanContext } from '../Context';
import { SubscriptionPlans } from '../types/subscription';

function ArticlesPage() {
  const { data, isLoading, error, makeRequest } =
    useAxiosRequest<IArticlesResponse>();
  const subscriptionPlan = useContext(SubscriptionPlanContext);

  const [topic, setTopic] = useState({ value: '', isDirty: false });
  const pageTitle = (
    <Typography component="h1" variant="h2" gutterBottom>
      Articles Seeker
      {subscriptionPlan === SubscriptionPlans.PAID && (
        <Typography
          component="span"
          variant="h2"
          color="secondary"
          sx={{ ml: 1.5, fontWeight: 700 }}
        >
          Pro
        </Typography>
      )}
    </Typography>
  );

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopic({ value: e.target.value, isDirty: true });
  };

  useEffect(() => {
    if (!topic.isDirty) {
      return;
    }

    const fetchArticles = async (topic: string) => {
      await makeRequest({
        url: 'http://localhost:3000/articles',
        method: 'GET',
        params: { topic },
      });
    };

    const timeoutId = setTimeout(() => fetchArticles(topic.value), 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [topic, makeRequest]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: 5,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'end',
          maxWidth: 500,
          width: '100%',
        }}
      >
        {pageTitle}
        <TextField
          fullWidth
          label="Topic"
          value={topic.value}
          onChange={onInputChange}
          sx={{ mb: 2 }}
        />
      </Box>
      <Box
        sx={{
          height: '55vh',
          overflow: 'scroll',
          border: '1px solid',
          borderColor: 'grey.300',
          borderRadius: 1,
          maxWidth: 800,
          width: '100%',
          py: 2,
          px: 5,
        }}
      >
        <ArticlesList
          articles={data?.articles}
          topic={data?.topic}
          isLoading={isLoading}
          error={error}
        />
      </Box>
      <Tooltip
        title={
          subscriptionPlan === SubscriptionPlans.FREE
            ? 'Viewing other pages requires a paid subscription'
            : null
        }
        placement="top"
      >
        <Pagination
          count={10}
          sx={{ mt: 2 }}
          disabled={subscriptionPlan === SubscriptionPlans.FREE}
        />
      </Tooltip>
    </Box>
  );
}

export default ArticlesPage;
