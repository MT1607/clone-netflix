import { Box, Grid, Paper } from '@mui/material';
import BrowserView from '../AppBar/BrowserView';
const imageUrl =
  'https://cdn.pixabay.com/photo/2023/05/20/20/39/european-roller-8007340__340.jpg';

export const MainLayout = () => {
  return (
    <Grid container>
      <Grid item lg={12}>
        <BrowserView />
        <Paper
          sx={{
            height: '100000000px',
          }}
        ></Paper>
      </Grid>
    </Grid>
  );
};

export default MainLayout;
