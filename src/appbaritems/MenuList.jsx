import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ThumbsUpDownRoundedIcon from '@mui/icons-material/ThumbsUpDownRounded';
import { Link } from 'react-router-dom';
export const TopItems = [
  { name: 'mail', image: <MailOutlineOutlinedIcon /> },
  { name: 'settings', image: <SettingsOutlinedIcon /> },
  { name: 'notification', image: <NotificationsNoneOutlinedIcon /> },
];

export const SideItems = [
  { name: '', image: <HomeRoundedIcon /> },
  { name: 'analytic', image: <AnalyticsIcon /> },
  { name: 'wallet', image: <AccountBalanceWalletIcon /> },
  { name: 'task', image: <AssignmentRoundedIcon /> },
  { name: 'rating', image: <ThumbsUpDownRoundedIcon /> },
];
