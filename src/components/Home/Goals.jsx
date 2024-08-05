import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';

import CardLayout from './../Custom/CardLayout';
import AdsClickRoundedIcon from '@mui/icons-material/AdsClickRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import FastfoodRoundedIcon from '@mui/icons-material/FastfoodRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';

const Goals = () => {
  return (
    <CardLayout>
      <List>
        <ListItem button>
          <ListItemIcon>
            <AdsClickRoundedIcon />
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant='subtitle1'>Goals</Typography>}
          />
          <SkipNextRoundedIcon />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FastfoodRoundedIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant='subtitle1'>Popular Dishes</Typography>
            }
          />
          <SkipNextRoundedIcon />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MenuBookRoundedIcon />
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant='subtitle1'>Menus</Typography>}
          />
          <SkipNextRoundedIcon />
        </ListItem>
      </List>
    </CardLayout>
  );
};

export default Goals;
