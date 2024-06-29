import React from 'react';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import DoneAllSharpIcon from '@mui/icons-material/DoneAllSharp';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import RemoveDoneSharpIcon from '@mui/icons-material/RemoveDoneSharp';
import { Container, Typography, Grid, Paper } from '@mui/material';

const HomeDashboard = () => {
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
                <h3>30</h3>
                {/* Add charts, data, or other content here */}
            </Paper>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
            <Paper elevation={3} style={{ padding: '20px', background: '#B7C9F2' }}>
                {/* Your second dashboard section */}
                <PeopleAltSharpIcon style={{ fontSize: '2.5rem',  color: 'black' }}/>
                <Typography variant="h6" gutterBottom>Total No Of Trainer
                </Typography>
                <h3>30</h3>
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
                <h3>30</h3>
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
                <h3>30</h3>
                {/* Add charts, data, or other content here */}
            </Paper>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
            <Paper elevation={3} style={{ padding: '20px', background: '#247881' }}>
                {/* Your second dashboard section */}
                <RemoveDoneSharpIcon style={{ fontSize: '2.5rem',  color: 'white' }}/>
                <Typography variant="h6" gutterBottom>
                Total Unapproved Trainee
                </Typography>
                <h3>30</h3>
                {/* Add charts, data, or other content here */}
            </Paper>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
            <Paper elevation={3} style={{ padding: '20px', background: '#4700D8' }}>
                {/* Your third dashboard section */}
                <RemoveDoneSharpIcon style={{ fontSize: '2.5rem',  color: 'white' }}/>
                <Typography variant="h6" gutterBottom>
                Total Unapproved Trainer
                </Typography>
                <h3>30</h3>
                {/* Add charts, data, or other content here */}
            </Paper>
            </Grid>
        </Grid>
        </Container>
    </div>
  );
};

export default HomeDashboard;