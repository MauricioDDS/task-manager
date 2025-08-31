import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export function Task() {
  return (
    <Card sx={{ minWidth: 340, bgcolor: '#004890ff'}}>
      <CardContent>
        <Typography variant="h5" component="div">
          Task Name
        </Typography>
        <Typography sx={{mb: 1.5 }}>Due Date</Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
  );
}
