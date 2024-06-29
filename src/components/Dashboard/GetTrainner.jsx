import { TableHead } from '@mui/material';
import React from 'react';
import { Table } from 'react-bootstrap';
import './DashStyle/GetTrainee.css';

const GetTrainer = () => {
  

  return (
    <div>
         <h3>List of All Trainer.</h3>

         <table className='table'>
            <th>
              <tr>
                  <td>S/N</td>
                  <td>LastName</td>
                  <td>FirstName</td>
                  <td>MiddleName</td>
                  <td>Address</td>
                  <td>Telephone</td>
                  <td>Email</td>
                  <td>Actions</td>
              </tr>
              
            </th>
         </table>
    </div>
    
  );
}

export default GetTrainer;