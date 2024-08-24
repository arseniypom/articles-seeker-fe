import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ArticlesList from './components/ArticlesList';
import { Typography } from '@mui/material';
import './App.css';
import { IArticlesResponse } from './types/article';
import { useAxiosRequest } from './hooks/useAxiosRequest';

function App() {
  const { data, isLoading, error, makeRequest } =
    useAxiosRequest<IArticlesResponse>();

  const [topic, setTopic] = useState({ value: '', isDirty: false });

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
        width: 500,
        maxWidth: '100%',
      }}
    >
      <Box
        sx={{
          height: '10vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'end',
        }}
      >
        <Typography component="h1" variant="h2" gutterBottom>
          Articles Seeker
        </Typography>
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
          height: '60vh',
          overflow: 'scroll',
          border: '1px solid',
          borderColor: 'grey.300',
          borderRadius: 1,
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
    </Box>
  );
}

export default App;
