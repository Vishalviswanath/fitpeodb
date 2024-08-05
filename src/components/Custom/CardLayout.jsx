import { Card } from '@mui/material';

// eslint-disable-next-line react/prop-types
const CardLayout = ({ children, sx }) => {
  return (
    <Card
      sx={{
        background: 'var(--sol-blue)',
        borderRadius: '10px',
        color: 'var(--li-crm)',
        padding: '8px',
        overflow: 'hidden',
        ...sx,
      }}
    >
      {children}
    </Card>
  );
};

export default CardLayout;
