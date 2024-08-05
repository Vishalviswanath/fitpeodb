import { Box } from '@mui/material';
import CardLayout from '../Custom/CardLayout';
import { ShoppingCartIcon } from '@mui/icons-material/ShoppingCart';
import OrderCard from '../Custom/OrderCard';

const colors = ['#36BA98', '#E9C46A', '#F4A261', '#E76F51'];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const Card1 = () => {
  const List = [
    {
      name: 'Product 1',
      price: 10,
      icon: <ShoppingCartIcon />,
      per: 10,
      value: true,
    },
    {
      name: 'Product 2',
      price: 20,
      icon: <ShoppingCartIcon />,
      per: '2',
      value: false,
    },
    {
      name: 'Product 3',
      price: 30,
      icon: <ShoppingCartIcon />,
      per: '4',
      value: true,
    },
    {
      name: 'Product 4',
      price: 30,
      icon: <ShoppingCartIcon />,
      per: '4',
      value: false,
    },
  ];
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
      }}
    >
      {List.map((item, i) => (
        <CardLayout
          key={i}
          sx={{
            width: '100%',
            padding: '12px',
            height: '132px',
          }}
        >
          <OrderCard
            item={item}
            getRandomColor={getRandomColor}
            sx={{ height: '100%' }}
          />
        </CardLayout>
      ))}
    </Box>
  );
};

export default Card1;
