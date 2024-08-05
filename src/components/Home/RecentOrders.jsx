import CardLayout from '../Custom/CardLayout';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Typography, Box } from '@mui/material';

const createData = (avatar, name, orderNo, amount, status) => {
  return { avatar, name, orderNo, amount, status };
};

const rows = [
  createData('A', 'John Doe', 12345, 250.5, 'Shipped'),
  createData('B', 'Jane Smith', 67890, 100.0, 'Processing'),
  createData('D', 'Alice Johnson', 11223, 175.75, 'Delivered'),
  createData('E', 'Alice Johnson', 11223, 175.75, 'Delivered'),
  createData('F', 'Alice Johnson', 11223, 175.75, 'Delivered'),
  createData('G', 'Alice Johnson', 11223, 175.75, 'Delivered'),
  createData('H', 'Alice Johnson', 11223, 175.75, 'Delivered'),
];

const RecentOrders = () => {
  return (
    <Box sx>
      <CardLayout>
        <Typography
          variant='h6'
          sx={{ color: 'white', fontWeight: 500, fontFamily: 'sans-serif' }}
        >
          Recent Orders
        </Typography>
        <TableContainer
          component={Paper}
          sx={{
            overflowY: 'hidden',
            backgroundColor: 'var(--sol-blue)',
            [`& .MuiTableCell-root`]: {
              color: 'var(--li-crm)',
              borderColor: 'var(--li-blue)',
            },
          }}
        >
          <Table>
            <TableHead sx={{ fontWeight: 'bolder' }}>
              <TableRow>
                <TableCell>Customer</TableCell>
                <TableCell>Order No.</TableCell>
                <TableCell align='right'>Amount</TableCell>
                <TableCell align='right'>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell
                    component='th'
                    scope='row'
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '7px',
                      padding: '5px',
                    }}
                  >
                    <Avatar sx={{ width: '25px', height: '25px' }}>
                      {row.avatar}
                    </Avatar>{' '}
                    {row.name}
                  </TableCell>
                  <TableCell>{row.orderNo}</TableCell>
                  <TableCell align='right'>${row.amount}</TableCell>
                  <TableCell align='right'>
                    {row.status == `Delivered` ? (
                      <Box
                        sx={{
                          background: 'green',
                          color: 'white',
                          borderRadius: '10px',
                          padding: '2px',
                          opacity: 0.5,
                        }}
                      >
                        {row.status}
                      </Box>
                    ) : (
                      <Box
                        sx={{
                          background: 'red',
                          color: 'white',
                          borderRadius: '10px',
                          padding: '2px',
                          opacity: 0.7,
                        }}
                      >
                        {row.status}{' '}
                      </Box>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardLayout>
    </Box>
  );
};

export default RecentOrders;
