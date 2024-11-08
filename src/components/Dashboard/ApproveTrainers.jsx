import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import './DashStyle/GetTrainee.css';
import { useNavigate } from 'react-router-dom';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { toast } from 'react-toastify';

const ApproveTrainers = () => {
  
  const [trainings, setTrainings] = useState([]);
  const navigate = useNavigate();
  const [connection, setConnection] = useState(null);

  const fetchTrainings = async () => {
    try {
      const response = await axios.get('https://localhost:7051/api/Admin/GetApprovedTrainer');
      console.log('API Response:', response.data);
      setTrainings(response.data.data || []);
    } catch (error) {
      console.error("There was an error fetching the training data!", error);
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    fetchTrainings();
  }, []);

  // Setup SignalR connection
  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .withUrl("https://localhost:7051/notificationHub", {
        withCredentials: true
      })
      .withAutomaticReconnect()
      .configureLogging(LogLevel.Information)
      .build();

    setConnection(newConnection);
  }, []);

  // Handle SignalR connection and incoming notifications
  useEffect(() => {
    if (connection) {
      connection.start()
        .then(result => {
          toast.success('Connected to SignalR!');

          connection.on('ReceiveNotification', message => {
            console.log('New notification received:', message);
            fetchTrainings(); // Refetch the trainee list when a new notification is received
          });
        })
        .catch(e => console.log('Connection failed: ', e));
    }
  }, [connection]);

    const handleView = (id) => {
      navigate(`/dashboard/traineeDetail/${id}`); 
    };

  return (
    <div>
         <h3>APPROVE TRAINERS.</h3>

         <table className='styled-table'>
        <thead>
          <tr>
            <th>S/N</th>
            <th>ID</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Location</th>
            <th>Telephone</th>
            <th>Date Created</th>
            
          </tr>
        </thead>
        <tbody>
          {trainings.Length === 0 ? 
          (<div>No trainee User data available.</div>)
          :
          (trainings.map((training, index)  => (
            <tr key={training.id}>
              <td>{index + 1}</td>
              <td>{training.id}</td> 
              <td>{training.lastName}</td>
              <td>{training.email}</td>
              <td>{training.location}</td>
              <td>{training.phoneNumber}</td>
              <td>{training.dateCreated}</td>

              
            </tr>
          )))}
        </tbody>
      </table>
    </div>
    
  );
}

export default ApproveTrainers;


