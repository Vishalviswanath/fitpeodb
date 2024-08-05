import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from '@mui/material';
import { SideItems } from '../appbaritems/MenuList';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <Box
      sx={{
        overflow: 'auto',
        height: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        gap: 2,
        flexGrow: 2,
      }}
    >
      <List
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        {SideItems.map((item, i) => (
          <ListItem key={i} disablePadding>
            <Link to={`/${item.name}`}>
              <ListItemButton disableGutters>
                <ListItemIcon
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    color: 'var(--sol-crm)',
                    [`& :hover`]: { color: 'var(--li-crm)' },
                  }}
                >
                  {item.image}
                </ListItemIcon>
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <IconButton
        sx={{
          color: 'var(--sol-crm)',
          [`& :hover`]: { color: 'var(--li-crm)' },
          bottom: 0,
        }}
      >
        <ExitToAppRoundedIcon />
      </IconButton>
    </Box>
  );
};

export default SideNav;
