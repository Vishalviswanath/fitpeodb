import { Card, CardContent, Typography, Box, Grid } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';

const OrderCard = ({ item, getRandomColor }) => {
  const randomBackgroundColor = getRandomColor();
  const randomIconColor = getRandomColor();

  return (
    <>
      <Grid container sx={{ marginRight: 'auto', marginBottom: '10px' }}>
        <Grid item>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', lg: 'row' },
              width: '100%',
            }}
          >
            <Box
              sx={{
                width: '40px',
                height: '40px',
                position: 'relative',
                borderRadius: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // marginBottom: '5px',
                marginRight: '10px',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  backgroundColor: randomBackgroundColor,
                  opacity: 0.5,
                  borderRadius: '10px',
                  filter: 'blur(0.2px)',
                  zIndex: 0,
                }}
              />

              <ShoppingCartIcon
                sx={{
                  color: randomIconColor,
                }}
              />
            </Box>
            <Typography variant='caption' sx={{ fontSize: '15px' }}>
              {item.name}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'end',
        }}
      >
        <Typography
          variant='h5'
          component='div'
          sx={{ color: 'whitesmoke', fontWeight: '600' }}
        >
          {item.price}
        </Typography>

        <Typography
          variant='body2'
          sx={{ color: item.value === false ? 'red' : 'green' }}
        >
          <span
            style={{
              fontSize: '12px',
            }}
          >
            {item.value === false ? '▼' : '▲'}
          </span>{' '}
          {item.per}%
        </Typography>
      </Box>
    </>
  );
};

export default OrderCard;
