import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import './DashStyle/GetTrainee.css';
import { useNavigate } from 'react-router-dom';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { toast } from 'react-toastify';

const Hiring = () => {
  
  const [trainings, setTrainings] = useState([]);
  const navigate = useNavigate();
  const [connection, setConnection] = useState(null);

  const fetchTrainings = async () => {
    try {
      const response = await axios.get('https://localhost:7051/api/Admin/GetApprovedTrainee');
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
         <h3>PENDING JOBS.</h3>

         <table className='styled-table'>
        <thead>
          <tr>
            <th>S/N</th>
            <th>ID</th>
            <th>EmployerID</th>
            <th>Business Name</th>
            <th>Position</th>
            <th>Location</th>
            <th>Date Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {trainings.Length === 0 ? 
          (<div>No trainee User data available.</div>)
          :
          (trainings.map((training, index)  => (
            <tr key={training.id}>
              <td>{index + 1}</td>
              <td>{training.ID}</td> 
              <td>{training.EmployerID}</td>
              <td>{training.BusinessName}</td>
              <td>{training.Position}</td>
              <td>{training.Location}</td>
              <td>{training.dateCreated}</td>

              <td>
                <button className="approve-btn" onClick={() => handleView(training.id)}>View</button>
                {/* <button className="delete-btn">Delete</button> */}
              </td>
            </tr>
          )))}
        </tbody>
      </table>
    </div>
    
  );
}

export default Hiring;


