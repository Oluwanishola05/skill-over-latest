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
import TraineeDetail from './TraineeDetails';
import SendMessage from './SendMessage';
import ApproveTrainers from './ApproveTrainers';
import ApproveTrainee from './ApproveTrainee';
import TrainerDetail from './TrainerDetails';
import PendingTrainee from './PendingTrainee';
import PendingTrainer from './PendingTrainer';
import MergeInterface from './MergeUsers';
import Hiring from './Hiring';

const MainContent = () => {
  return (
    <>
        <Routes>
            
            <Route path= 'dashboard'  element={<HomeDashboard />} />
            <Route path= 'dashboard/name'  element={<AdminRouter />} />
            <Route path= 'dashboard/approveTrainers'  element={<ApproveTrainers />} />
            <Route path= 'dashboard/approveTrainees'  element={<ApproveTrainee />} />
            <Route path= 'dashboard/pendingTrainee'  element={<PendingTrainee />} />
            <Route path= 'dashboard/pendingTrainer'  element={<PendingTrainer />} />
            <Route path= 'dashboard/mergeuser'  element={<MergeInterface />} />
            <Route path= 'dashboard/hiring'  element={<Hiring />} />
            <Route path= 'dashboard/traineeDetail/:id'  element={<TraineeDetail />} />
            <Route path= 'dashboard/trainerDetail/:id'  element={<TrainerDetail />} />
            <Route path= 'dashboard/sendMessage'  element={<SendMessage />} />
        </Routes>
    </>
        //  <HomeDashboard /> 
  );
};

export default MainContent;