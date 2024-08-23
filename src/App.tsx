import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ArticlesList from './components/ArticlesList';
import { Typography } from '@mui/material';
import './App.css';

function App() {
  const [topic, setTopic] = useState('');

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(e.target.value);
  };

  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <Typography component="h1" variant="h2" gutterBottom>
        Articles Seeker
      </Typography>
      <TextField
        fullWidth
        label="Topic"
        value={topic}
        onChange={onInputChange}
      />
      <ArticlesList />
    </Box>
  );
}

export default App;
