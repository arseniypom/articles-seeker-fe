import {
  Button,
  Card,
  CardActions,
  CardContent,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';
import { IArticle } from '../types/article';

interface IArticleProps {
  article: IArticle;
  sx?: SxProps<Theme>;
}

function Article({ article, sx }: IArticleProps) {
  return (
    <Card variant="outlined" sx={sx}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {article.author}
        </Typography>
        <Typography variant="h5" component="div" sx={{ mb: 1 }}>
          {article.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
          }}
        >
          {article.content}
        </Typography>
      </CardContent>
      <CardActions sx={{ px: 2 }}>
        <Button size="small">Read more</Button>
      </CardActions>
    </Card>
  );
}

export default Article;
