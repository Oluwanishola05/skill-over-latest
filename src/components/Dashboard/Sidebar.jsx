import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, FormControl, InputLabel,Select, MenuItem, ListItemButton, Menu } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SendIcon from '@mui/icons-material/Send';




const Sidebar = () => {

  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  // const [selectedOption, setSelectedOption] = useState('');

  // const handleOptionChange = (event) => {
  //   setSelectedOption(event.target.value);
  // }

  const [anchorEl, setAnchorEl] = useState(null);
  const [menuId, setMenuId] = useState(null);

  // Generic open and close handlers
  const handleMenuClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setMenuId(id);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuId(null);
  };
  

  return (

    <>
    
    

    <Drawer variant="persistent" open={true}  anchor="left"  sx={{ bgcolor: '#2196F3', color: 'white', width: 255, flexShrink: 0, '& .MuiDrawer-paper': { width: 255, boxSizing: 'border-box'}}}>
      
      <List sx={{ marginTop: '60px' }}>

        <ListItemButton>
          <ListItemIcon>
            <HomeIcon style={{ fontSize: '1.5rem'}}/>
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>

        <Link to='dashboard'>
          <ListItemButton >
            <ListItemIcon>
              <DashboardIcon style={{ fontSize: '1.5rem'}}/>
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </Link>

        <Link to='dashboard/name'>
          <ListItemButton >
            <ListItemIcon>
              <InboxIcon style={{ fontSize: '1.5rem'}}/>
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
        </Link>

        {/* <Link to='dashboard/approveTrainers'>
          <ListItemButton >
            <ListItemIcon>
              <PersonIcon  style={{ fontSize: '1.5rem'}}/>
            </ListItemIcon>        
            <ListItemText primary="Approved Trainers" />
          </ListItemButton>
        </Link> */}

        <ListItemButton onClick={(e) => handleMenuClick(e, 'approveTrainers')}>
          <ListItemIcon>
            <PersonIcon style={{ fontSize: '1.5rem'}}/>
          </ListItemIcon>
          <ListItemText primary="Approved Trainee/Trainer" />
        </ListItemButton>
        <Menu anchorEl={anchorEl} open={menuId === 'approveTrainers'} onClose={handleMenuClose}>
          <Link to='dashboard/approveTrainees'>
            <MenuItem onClick={handleMenuClose}>Approved Trainees</MenuItem>
          </Link>
          <Link to='dashboard/approveTrainers'>
            <MenuItem onClick={handleMenuClose}>Approved Trainers</MenuItem>
          </Link>
        </Menu>

        <ListItemButton onClick={(e) => handleMenuClick(e, 'pendingTrainees')}>
          <ListItemIcon>
            <PersonIcon style={{ fontSize: '1.5rem'}}/>
          </ListItemIcon>
          <ListItemText primary="Pending Trainee/Trainer" />
        </ListItemButton>
        <Menu anchorEl={anchorEl} open={menuId === 'pendingTrainees'} onClose={handleMenuClose}>
          <Link to='dashboard/pendingTrainee'>
            <MenuItem onClick={handleMenuClose}>Pending Trainees</MenuItem>
          </Link>
          <Link to='dashboard/pendingTrainer'>
            <MenuItem onClick={handleMenuClose}>Pending Trainers</MenuItem>
          </Link>
        </Menu>

        <ListItemButton onClick={(e) => handleMenuClick(e, 'careerApproval')}>
          <ListItemIcon>
            <PersonIcon style={{ fontSize: '1.5rem'}}/>
          </ListItemIcon>
          <ListItemText primary="Career/Training Approval" />
        </ListItemButton>
        <Menu anchorEl={anchorEl} open={menuId === 'careerApproval'} onClose={handleMenuClose}>
          <Link to=''>
            <MenuItem onClick={handleMenuClose}>Training Approval</MenuItem>
          </Link>
          <Link to=''>
            <MenuItem onClick={handleMenuClose}>Career Approval</MenuItem>
          </Link>
        </Menu>

        <Link to='dashboard/mergeuser'>
          <ListItemButton >
            <ListItemIcon>
              <HelpOutlineIcon style={{ fontSize: '1.5rem'}}/>
            </ListItemIcon>
            <ListItemText primary="Merge Users" />
          </ListItemButton>
        </Link>

        <Link to='dashboard/hiring'>
          <ListItemButton >
            <ListItemIcon>
              <HelpOutlineIcon style={{ fontSize: '1.5rem'}}/>
            </ListItemIcon>
            <ListItemText primary="Approve Job" />
          </ListItemButton>
        </Link>

        

        <ListItemButton >
          <ListItemIcon>
            <NotificationsIcon style={{ fontSize: '1.5rem'}}/>
          </ListItemIcon>
          <ListItemText primary="Notification" />
        </ListItemButton>

       

        <ListItemButton >
          <ListItemIcon>
            <SendIcon style={{ fontSize: '1.5rem'}} className="slanted-icon"/>
          </ListItemIcon>
          <Link to='dashboard/sendMessage'><ListItemText primary="Send Message" /></Link>
        </ListItemButton>

        

        {/* Add additional sidebar items as needed */}
      </List>
    </Drawer>
    
    </>
  );
};

export default Sidebar;