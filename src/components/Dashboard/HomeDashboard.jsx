import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import DoneAllSharpIcon from '@mui/icons-material/DoneAllSharp';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import RemoveDoneSharpIcon from '@mui/icons-material/RemoveDoneSharp';
import { Container, Typography, Grid, Paper } from '@mui/material';

const HomeDashboard = () => {

    const [countTrainee, setCountTrainee] = useState([]);
    const [countTrainer, setCountTrainer] = useState([]);
    const [countApproveTrainee, setCountsApproveTrainee] = useState([]);
    const [countApproveTrainer, setCountsApproveTrainer] = useState([]);
    const [countPendinTrainee, setCountsPendingTrainee] = useState([]);
    const [countPendingTrainer, setCountsPendingTrainer] = useState([]);

    const fetchTrainings = async () => {
        try {
          const response = await axios.get('https://localhost:7051/api/Admin/GetTotalTrainee');
          console.log('API Response:', response.data);
          setCountTrainee(response.data.data || []);
        } catch (error) {
          console.error("There was an error fetching the training data!", error);
        } 

        try {
            const response = await axios.get('https://localhost:7051/api/Admin/GetTotalTrainer');
            console.log('API Response:', response.data);
            setCountTrainer(response.data.data || []);
          } catch (error) {
            console.error("There was an error fetching the training data!", error);
        }

        try {
            const response = await axios.get('https://localhost:7051/api/Admin/GetTotalApproveTrainee');
            console.log('API Response:', response.data);
            setCountsApproveTrainee(response.data.data || []);
          } catch (error) {
            console.error("There was an error fetching the training data!", error);
        }

        try {
            const response = await axios.get('https://localhost:7051/api/Admin/GetTotalApproveTrainer');
            console.log('API Response:', response.data);
            setCountsApproveTrainer(response.data.data || []);
          } catch (error) {
            console.error("There was an error fetching the training data!", error);
        }

        try {
            const response = await axios.get('https://localhost:7051/api/Admin/GetTotalPendingTrainee');
            console.log('API Response:', response.data);
            setCountsPendingTrainee(response.data.data || []);
          } catch (error) {
            console.error("There was an error fetching the training data!", error);
        }

        try {
            const response = await axios.get('https://localhost:7051/api/Admin/GetTotalPendingTrainer');
            console.log('API Response:', response.data);
            setCountsPendingTrainer(response.data.data || []);
          } catch (error) {
            console.error("There was an error fetching the training data!", error);
        }



      };
    
      // Fetch data when component mounts
      useEffect(() => {
        fetchTrainings();
      }, []);
    

  return (
    <div>
     <Container>
      <Typography variant="h5" gutterBottom>
        Welcome to My Dashboard
      </Typography>

        <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4} s>
            <Paper elevation={3} style={{ padding: '20px', background: '#F9E897'  }}>
                {/* Your first dashboard section */}
                <GroupsIcon style={{ fontSize: '2.5rem',  color: 'black' }}/>
                <Typography variant="h6" gutterBottom>
                Total No Of Trainee
                </Typography>
                <h1>{countTrainee}</h1>
                {/* Add charts, data, or other content here */}
            </Paper>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
            <Paper elevation={3} style={{ padding: '20px', background: '#B7C9F2' }}>
                {/* Your second dashboard section */}
                <PeopleAltSharpIcon style={{ fontSize: '2.5rem',  color: 'black' }}/>
                <Typography variant="h6" gutterBottom>Total No Of Trainer
                </Typography>
                <h1>{countTrainer}</h1>
                {/* Add charts, data, or other content here */}
            </Paper>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
            <Paper elevation={3} style={{ padding: '20px', background: '#DCFFB7' }}>
                {/* Your third dashboard section */}
                <DoneAllSharpIcon style={{ fontSize: '2.5rem',  color: 'black' }}/>
                <Typography variant="h6" gutterBottom>
                Total Approved Trainee
                </Typography>
                <h1>{countApproveTrainee}</h1>
                {/* Add charts, data, or other content here */}
            </Paper>
            </Grid>

            <Grid item xs={12} md={6} lg={4} s>
            <Paper elevation={3} style={{ padding: '20px', background: '#0E185F'  }}>
                {/* Your first dashboard section */}
                <DoneAllSharpIcon style={{ fontSize: '2.5rem',  color: 'white' }}/>
                <Typography variant="h6" gutterBottom>
                Total Approved Trainer
                </Typography>
                <h1>{countApproveTrainer}</h1>
                {/* Add charts, data, or other content here */}
            </Paper>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
            <Paper elevation={3} style={{ padding: '20px', background: '#247881' }}>
                {/* Your second dashboard section */}
                <RemoveDoneSharpIcon style={{ fontSize: '2.5rem',  color: 'white' }}/>
                <Typography variant="h6" gutterBottom>
                Total Pending Trainee
                </Typography>
                <h1>{countPendinTrainee}</h1>
                {/* Add charts, data, or other content here */}
            </Paper>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
            <Paper elevation={3} style={{ padding: '20px', background: '#4700D8' }}>
                {/* Your third dashboard section */}
                <RemoveDoneSharpIcon style={{ fontSize: '2.5rem',  color: 'white' }}/>
                <Typography variant="h6" gutterBottom>
                Total Pending Trainer
                </Typography>
                <h1>{countPendingTrainer}</h1>
                {/* Add charts, data, or other content here */}
            </Paper>
            </Grid>
        </Grid>
        </Container>
    </div>
  );
};

export default HomeDashboard;