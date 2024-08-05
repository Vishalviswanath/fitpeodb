import * as React from 'react';
import { Avatar, CardContent, Rating, Typography } from '@mui/material';
import CardLayout from '../Custom/CardLayout';

const Feedback = () => {
  return (
    <CardLayout sx={{ maxWidth: 600, margin: 'auto' }}>
      <Typography variant='h6' align='center'>
        Customer's Feedback
      </Typography>
      <CardContent sx={{ overflow: 'hidden' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Avatar alt='Jenny Wilson' src='/jenny.jpg' />
          <Typography variant='subtitle1' component='div'>
            Jenny Wilson
          </Typography>
        </div>
        <Rating name='read-only' value={4} readOnly />
        <Typography variant='body2' color='textSecondary'>
          The food was excellent and so was the service. I had the mushroom
        </Typography>
      </CardContent>
    </CardLayout>
  );
};

export default Feedback;
