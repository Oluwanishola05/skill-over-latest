import React from 'react';
import { Typography, Menu, MenuItem, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../Header/ProfileIcon.css'

const UserProfileIcon = ({ handleLogout }) => {
  const userName = sessionStorage.getItem('lastName');

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="profile-icon-container">
        <IconButton onClick={handleMenuOpen}>
          <AccountCircleIcon sx={{ fontSize: '2.7rem' }} />
          <span className="online-indicator" />
        </IconButton>
      </div>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem disabled>
          <Typography variant="body1">Hello, {userName || 'Guest'}</Typography>
        </MenuItem>
        <MenuItem >Messages</MenuItem>
        <MenuItem onClick={() => { handleMenuClose(); handleLogout(); }}>Logout</MenuItem>
        
      </Menu>
    </>
  );
};

export default UserProfileIcon;
