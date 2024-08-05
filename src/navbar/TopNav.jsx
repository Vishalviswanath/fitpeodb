import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Box, IconButton, InputAdornment, Stack } from '@mui/material';
import Input from '@mui/material/Input';
import { BiLogoReact } from 'react-icons/bi';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const TopNav = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        gap: 2,
      }}
    >
      <Stack direction='row'>
        <IconButton
          sx={{
            color: 'var(--sol-crm)',
            fontWeight: 'bolder',
            marginRight: '20px',
            [`& :hover`]: { color: 'var(--li-crm)' },
          }}
        >
          <BiLogoReact />
        </IconButton>
        <Input
          placeholder='Search'
          startAdornment={
            <InputAdornment
              position='start'
              sx={{
                color: 'var(--sol-crm)',
                [`& :hover`]: { color: 'var(--li-crm)' },
              }}
            >
              <SearchIcon />
            </InputAdornment>
          }
          sx={{
            color: 'var(--li-crm)',
            border: '2px solid var(--li-crm)',
            outline: 'none',
            height: '40px',
            borderRadius: '5px',
            padding: '5px',
            width: '200px',
          }}
        />
      </Stack>
      <Stack direction='row'>
        <IconButton sx={{ color: 'var(--li-crm)', fontWeight: '500' }}>
          <MailOutlineOutlinedIcon />
        </IconButton>
        <IconButton sx={{ color: 'var(--li-crm)', fontWeight: '500' }}>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton sx={{ color: 'var(--li-crm)', fontWeight: '500' }}>
          <NotificationsNoneOutlinedIcon />
        </IconButton>
        <IconButton sx={{ color: 'var(--li-crm)', fontWeight: '500' }}>
          <Avatar
            alt='Fitpeo'
            src='/static/images/avatar/2.jpg'
            sx={{ width: 24, height: 24 }}
          />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default TopNav;
