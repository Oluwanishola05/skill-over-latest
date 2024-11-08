import React, { useState, useEffect } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography, Paper } from '@mui/material';
//import { fetchTrainees, fetchTrainers, mergeRecords } from './apiService'; // Example API functions

const MergeInterface = () => {
  const [trainees, setTrainees] = useState([]);
  const [trainers, setTrainers] = useState([]);
  const [selectedTrainee, setSelectedTrainee] = useState(null);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Fetch trainees and trainers data from API on component mount
    const fetchData = async () => {
    //   const traineesData = await fetchTrainees();
    //   const trainersData = await fetchTrainers();
    //   setTrainees(traineesData);
    //   setTrainers(trainersData);
    };
    fetchData();
  }, []);

  const handleSelectTrainee = (trainee) => {
    setSelectedTrainee(trainee);
  };

  const handleSelectTrainer = (trainer) => {
    setSelectedTrainer(trainer);
  };

  const handleOpenDialog = () => {
    if (selectedTrainee && selectedTrainer) {
      setOpen(true);
    } else {
      alert("Please select both a trainee and a trainer to merge.");
    }
  };

  const handleMerge = async () => {
    //await mergeRecords(selectedTrainee.id, selectedTrainer.id);
    setOpen(false);
    setSelectedTrainee(null);
    setSelectedTrainer(null);
    alert("Merge successful!");
    // Optionally re-fetch data to update the interface
  };

  return (
    <div style={{ display: 'flex', gap: '2rem', padding: '1rem' }}>
      {/* Trainee Table */}
      <TableContainer component={Paper} style={{ width: '50%' }}>
        <Typography variant="h6" align="center" gutterBottom>
          Trainees
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trainees.map((trainee) => (
              <TableRow key={trainee.id} selected={selectedTrainee?.id === trainee.id}>
                <TableCell>{trainee.name}</TableCell>
                <TableCell>{trainee.email}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => handleSelectTrainee(trainee)}>
                    Select
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Trainer Table */}
      <TableContainer component={Paper} style={{ width: '50%' }}>
        <Typography variant="h6" align="center" gutterBottom>
          Trainers
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trainers.map((trainer) => (
              <TableRow key={trainer.id} selected={selectedTrainer?.id === trainer.id}>
                <TableCell>{trainer.name}</TableCell>
                <TableCell>{trainer.email}</TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary" onClick={() => handleSelectTrainer(trainer)}>
                    Select
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Merge Button */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Button variant="contained" color="success" onClick={handleOpenDialog} style={{ marginTop: '1rem' }}>
          Merge Selected
        </Button>
      </div>

      {/* Merge Confirmation Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Confirm Merge</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to merge the selected trainee "{selectedTrainee?.name}" with the trainer "{selectedTrainer?.name}"?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">Cancel</Button>
          <Button onClick={handleMerge} color="secondary">Confirm Merge</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MergeInterface;
