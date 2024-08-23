import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

function Article() {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          23.08.2024
        </Typography>
        <Typography variant="h5" component="div">
          Article name
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          5 mins read
        </Typography>
        <Typography variant="body2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          repellendus aut iusto nam, nesciunt, nisi culpa sint illum facere
          repudiandae praesentium vitae, delectus sapiente magnam magni tenetur
          distinctio odit tempore.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read more</Button>
      </CardActions>
    </Card>
  );
}

export default Article;
