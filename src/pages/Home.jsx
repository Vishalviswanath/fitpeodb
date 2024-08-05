import { Box, Grid, Typography } from '@mui/material';
import Card1 from '../components/Home/Card1';
import NetProfit from '../components/Home/NetProfit';
import Activity from './../components/Home/Activity';
import Goals from './../components/Home/Goals';
import RecentOrders from './../components/Home/RecentOrders';
import Feedback from './../components/Home/Feedback';

const Home = () => {
  const HomeItems = [Card1, NetProfit, Activity, Goals, RecentOrders, Feedback];
  return (
    <>
      <Typography
        variant='h5'
        sx={{ margin: 0, color: 'white', marginBottom: '10px' }}
      >
        Dashboard
      </Typography>
      <Box sx={{ width: '100%', display: 'flex' }}>
        <Grid container spacing={2}>
          {HomeItems.map((Item, i) => (
            <Grid key={i} item xs={12} md={i % 2 === 0 ? 8 : 4}>
              <Item />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
