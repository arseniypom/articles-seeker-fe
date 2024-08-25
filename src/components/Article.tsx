import {
  Button,
  Card,
  CardActions,
  CardContent,
  SxProps,
  Theme,
  Tooltip,
  Typography,
} from '@mui/material';
import { IArticle } from '../types/article';
import { useContext } from 'react';
import { SubscriptionPlanContext } from '../Context';
import { SubscriptionPlans } from '../types/subscription';

interface IArticleProps {
  article: IArticle;
  sx?: SxProps<Theme>;
}

function Article({ article, sx }: IArticleProps) {
  const subscriptionPlan = useContext(SubscriptionPlanContext);

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
        <Tooltip
          title={
            subscriptionPlan === SubscriptionPlans.FREE
              ? 'Viewing the full text requires a paid subscription'
              : null
          }
          placement="top-end"
        >
          <div>
            <Button
              size="small"
              variant='outlined'
              disabled={subscriptionPlan === SubscriptionPlans.FREE}
            >
              View article
            </Button>
          </div>
        </Tooltip>
      </CardActions>
    </Card>
  );
}

export default Article;
