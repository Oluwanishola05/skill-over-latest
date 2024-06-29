import React from 'react';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import DoneAllSharpIcon from '@mui/icons-material/DoneAllSharp';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import RemoveDoneSharpIcon from '@mui/icons-material/RemoveDoneSharp';
import { Container, Typography, Grid, Paper } from '@mui/material';
import HomeDashboard from './HomeDashboard';
import { Route, Routes, Navigate } from 'react-router-dom';
import AdminRouter from './AdminRouter';

import GetTrainee from './GetTrainee';
import GetTrainer from './GetTrainner';
import SendMessage from './SendMessage';

const MainContent = () => {
  return (
    <>
        <Routes>
            
            <Route path= 'dashboard'  element={<HomeDashboard />} />
            <Route path= 'dashboard/name'  element={<AdminRouter />} />
            <Route path= 'dashboard/getTrainee'  element={<GetTrainee />} />
            <Route path= 'dashboard/getTrainer'  element={<GetTrainer />} />
            <Route path= 'dashboard/sendMessage'  element={<SendMessage />} />
        </Routes>
    </>
        //  <HomeDashboard /> 
  );
};

export default MainContent;