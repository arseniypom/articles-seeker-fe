import { Box } from '@mui/material';
import Article from './Article';

function ArticlesList() {
  return (
    <Box>
      {[1, 2, 3, 4, 5].map(() => (
        <Article />
      ))}
    </Box>
  );
}

export default ArticlesList;
