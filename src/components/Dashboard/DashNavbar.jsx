import React from "react";
import { AppBar, Container, CssBaseline, Toolbar, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import logo from '../../assets/image/skillOver.png';



const DashNavbar = () => {

    return (
        <>
            <div style={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: '#112351' }}>
                    <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        <img src={logo} className="skillOver"/>
                    </Typography>
                    </Toolbar>
                </AppBar>
                <Sidebar />
                <Container component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                    <MainContent />
                </Container>
            </div>
        
        </>
    )
}


export default DashNavbar;