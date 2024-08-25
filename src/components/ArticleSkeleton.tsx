import { Card, CardActions, CardContent, Skeleton, Stack } from '@mui/material';

function ArticleSkeleton() {
  return (
    <Card variant="outlined">
      <CardContent>
        <Stack spacing={1}>
          <Skeleton variant="rectangular" width={50} height={14} />
          <Skeleton variant="rectangular" width="full" height={30} />
          <Skeleton variant="rectangular" width="full" height={14} />
          <Skeleton variant="rectangular" width="full" height={14} />
        </Stack>
      </CardContent>
      <CardActions sx={{ px: 2 }}>
        <Skeleton variant="rounded" width={85} height={30} />
      </CardActions>
    </Card>
  );
}

export default ArticleSkeleton;
