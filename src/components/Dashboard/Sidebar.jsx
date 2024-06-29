import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, FormControl, InputLabel,Select, MenuItem } from '@mui/material';
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

  return (

    <>
    
    

    <Drawer variant="persistent" open={true} anchor="left"  sx={{ bgcolor: '#2196F3', color: 'white', width: 255, flexShrink: 0, '& .MuiDrawer-paper': { width: 255, boxSizing: 'border-box'}}}>
      <List sx={{ marginTop: '60px' }}>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon style={{ fontSize: '1.5rem'}}/>
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon style={{ fontSize: '1.5rem'}}/>
          </ListItemIcon>
          <Link to='dashboard'><ListItemText primary="Dashboard" /></Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon style={{ fontSize: '1.5rem'}}/>
          </ListItemIcon>
          <Link to='dashboard/name'><ListItemText primary="Inbox" /></Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PersonIcon  style={{ fontSize: '1.5rem'}}/>
          </ListItemIcon>
          <Link to='dashboard/getTrainer'><ListItemText primary="Get Approved Trainers" /></Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon style={{ fontSize: '1.5rem'}}/>
          </ListItemIcon>
          <Link to='dashboard/getTrainee'><ListItemText primary="Get Approved Trainee" /></Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PersonIcon style={{ fontSize: '1.5rem'}}/>
          </ListItemIcon>
          <ListItemText primary="Get Unapproved Trainee" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon style={{ fontSize: '1.5rem'}}/>
          </ListItemIcon>
          <ListItemText primary="Get Unapproved Trainer" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <NotificationsIcon style={{ fontSize: '1.5rem'}}/>
          </ListItemIcon>
          <ListItemText primary="Notification" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HelpOutlineIcon style={{ fontSize: '1.5rem'}}/>
          </ListItemIcon>
          <ListItemText primary="User Enquires" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SendIcon style={{ fontSize: '1.5rem'}} className="slanted-icon"/>
          </ListItemIcon>
          <Link to='dashboard/sendMessage'><ListItemText primary="Send Message" /></Link>
        </ListItem>

        

        {/* Add additional sidebar items as needed */}
      </List>
    </Drawer>
    
    </>
  );
};

export default Sidebar;