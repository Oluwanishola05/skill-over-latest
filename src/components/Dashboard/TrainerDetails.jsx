import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';

const TrainerDetail = () => {
  const [trainee, setTrainee] = useState(null);
  const { id } = useParams();  

  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    const fetchTrainee = async () => {
      try {
        const response = await axios.get(`https://localhost:7051/api/Admin/GetPendingTrainerById/${id}`);
        
        setTrainee(response.data.data);
      } catch (error) {
        console.error("There was an error fetching the trainee details!", error);
      }
    };

    fetchTrainee();
  }, [id]);

  if (!trainee) return <div>Loading...</div>;

  const approve = async () => {
    try {
          MySwal.fire({
            title: 'Please wait...',
            text: 'Approving the trainee...',
            allowOutsideClick: false,
            didOpen: () => {
                MySwal.showLoading();
            }
        });

      const response = await axios.put(`https://localhost:7051/api/Admin/ActivateTraineeUser/${trainee.id}`);
      console.log(response.data);

      const { responseCode, responseMessage } = response.data;

      if(responseCode === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Approved!',
          text: responseMessage || 'The trainee has been approved successfully.',
        });
      }
      
      navigate(-1);


    } catch (error) {
      Swal.fire({
        icon: 'errpr',
        title: 'Error!',
        text: error || 'Error Occurred.',
      });
    }
  };

  return (
    <div className='trainneeDetails'>
      <h3>Trainer Details</h3>
      <p><b>Unique ID:</b> {trainee.id}</p>
      <p><b>First Name:</b> {trainee.firstName}</p>
      <p><b>Last Name:</b> {trainee.lastName}</p>
      <p><b>Email:</b> {trainee.email}</p>
      <p><b>Location:</b> {trainee.location}</p>
      <p><b>Phone Number:</b> {trainee.phoneNumber}</p>
      <p><b>Date of Birth:</b> {trainee.dateOfBirth}</p>
      <p><b>Gender:</b> {trainee.gender}</p>
      <p><b>NIN:</b> {trainee.nin}</p>
      <p><b>Date Created:</b> {trainee.dateCreated}</p>
      <p><b>isActive:</b> {trainee.isActive}</p>
      {/* Add more fields as necessary */}

      <div className='btn-div'>
      <button className="approve-btn" onClick={approve}>APPROVE</button>
      <button className="delete-btn">REJECT</button>
      </div>
    </div>
  );
};

export default TrainerDetail;
