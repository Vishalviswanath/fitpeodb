import { Chart, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Typography, Grid, Box } from '@mui/material';
import CardLayout from './../Custom/CardLayout';

// Register Chart.js elements
Chart.register(ArcElement);

// Define data and options for the Doughnut chart
const doughnutData = {
  // labels: ['Completed', 'Pending'],
  borderAlign: 'center',
  datasets: [
    {
      data: [70, 30],
      backgroundColor: ['#4caf50', '#f44336'],
      borderWidth: 0,
    },
  ],
};

const doughnutOptions = {
  responsive: true,
  cutout: 30,
  elements: {
    arc: {
      borderWidth: 0,
      borderRadius: 10,
    },
  },
};

const NetProfit = () => {
  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart) {
      const { ctx, width, height } = chart;
      ctx.save();
      const fontSize = (height / 114).toFixed(2);
      ctx.font = `${fontSize}em sans-serif`;
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#9290c3';

      const text = '70%';
      const textX = Math.round((width - ctx.measureText(text).width) / 2);
      const textY = height / 2;

      ctx.fillText(text, textX, textY);
      ctx.restore();
    },
  };

  return (
    <CardLayout sx={{ padding: '10px' }}>
      <Typography variant='caption' component='h2'>
        Net Profit
      </Typography>
      <Grid
        container
        spacing={2}
        padding={0}
        sx={{ [`& .MuiGrid-item`]: { paddingTop: 0 } }}
      >
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          sx={{
            display: 'flex',
            alignContent: 'left',
            justifyContent: 'space-around',
            flexDirection: 'column',
            marginTop: '15px',
          }}
        >
          <Typography variant='h3' component='h1' color='white' fontSize='30px'>
            $ 6759.25
          </Typography>
          <Typography variant='body2' sx={{ color: 'green' }}>
            <span style={{ fontSize: '12px' }}>▲</span> 8%
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '90px',
              padding: 0,
            }}
          >
            <Doughnut
              data={doughnutData}
              options={doughnutOptions}
              plugins={[textCenter]}
            />
          </Box>
          <Typography variant='subtitle1' align='center'>
            Goal Completed
          </Typography>
        </Grid>
      </Grid>
    </CardLayout>
  );
};

export default NetProfit;
