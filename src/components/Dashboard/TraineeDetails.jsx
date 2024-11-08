import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import dayjs from 'dayjs'; // Import date formatting library

const TraineeDetail = () => {
  const [trainee, setTrainee] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams(); 
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    const fetchTrainee = async () => {
      try {
        const response = await axios.get(`https://localhost:7051/api/Admin/GetPendingTraineeById/${id}`);
        setTrainee(response.data.data);
      } catch (error) {
        console.error("There was an error fetching the trainee details!", error);
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Failed to fetch trainee details. Please try again.',
        });
      }
    };

    fetchTrainee();
  }, [id]);

  if (!trainee) return <div>Loading...</div>;

  const approve = async () => {
    setLoading(true); // Set loading state
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

      if (responseCode === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Approved!',
          text: responseMessage || 'The trainee has been approved successfully.',
        });
        navigate(-1);
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: error.response?.data?.errorMessage || 'An error occurred during approval.',
      });
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  const reject = async () => {
    // Add reject functionality if needed
    Swal.fire({
      title: 'Reject Trainee',
      text: 'Are you sure you want to reject this trainee?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, reject',
      cancelButtonText: 'No, cancel'
    }).then(async (result) => {
      if (result.isConfirmed) {
        // Call reject API endpoint here if implemented
        Swal.fire('Rejected!', 'The trainee has been rejected.', 'success');
        navigate(-1); // Navigate back after rejection
      }
    });
  };

  return (
    <div className='traineeDetails'>
      <h3>Trainee Details</h3>
      <p><b>Unique ID:</b> {trainee.id}</p>
      <p><b>First Name:</b> {trainee.firstName}</p>
      <p><b>Last Name:</b> {trainee.lastName}</p>
      <p><b>Email:</b> {trainee.email}</p>
      <p><b>Location:</b> {trainee.location}</p>
      <p><b>Phone Number:</b> {trainee.phoneNumber}</p>
      <p><b>Date of Birth:</b> {dayjs(trainee.dateOfBirth).format('MM/DD/YYYY')}</p> {/* Date formatting */}
      <p><b>Gender:</b> {trainee.gender}</p>
      <p><b>NIN:</b> {trainee.nin}</p>
      <p><b>Date Created:</b> {dayjs(trainee.dateCreated).format('MM/DD/YYYY')}</p> {/* Date formatting */}
      <p><b>isActive:</b> {trainee.isActive ? 'Yes' : 'No'}</p>

      <div className='btn-div'>
        <button className="approve-btn" onClick={approve} disabled={loading}>
          {loading ? 'Approving...' : 'APPROVE'}
        </button>
        <button className="delete-btn" onClick={reject}>REJECT</button>
      </div>
    </div>
  );
};

export default TraineeDetail;
