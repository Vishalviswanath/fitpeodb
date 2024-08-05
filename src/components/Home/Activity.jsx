import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Typography, Box } from '@mui/material';
import CardLayout from './../Custom/CardLayout';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Activity',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 5000,
        callback: (value) => `${value / 1000}k`,
      },
    },
  },
};

const labels = [5, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27];

const data = {
  labels,
  datasets: [
    {
      label: 'Weekly',
      data: [
        3000, 3500, 6000, 6000, 4000, 6000, 6500, 10000, 12000, 7000, 5000,
        9000, 5500,
      ],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
  ],
  elements: {
    arc: {
      borderWidth: 0,
      borderRadius: 10,
    },
  },
};

const Activity = () => {
  return (
    <CardLayout sx={{ height: 'auto' }}>
      <Typography variant='h5' gutterBottom>
        Activity
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'start',
          alignContent: 'center',
        }}
      >
        <Bar options={options} data={data} />
      </Box>
    </CardLayout>
  );
};

export default Activity;
