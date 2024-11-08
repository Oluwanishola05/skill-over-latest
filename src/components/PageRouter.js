import React, { useState, useEffect } from 'react';
import {  Routes, Route, Navigate } from  "react-router-dom";

import Home from "../components/WelcomePage/Home";
import TraineeRegister from "./Register/TraineeRegister";
import TrainerRegister from "./Register/TrainerRegister";
import SelectUser from "./SelectUser";
import TrainerLogin from "./Login/TrainerLogin";
import TraineeLogin from "./Login/TraineeLogin";
import HomeLogin from "./News";
import ApplyForm from "./WelcomePage/ApplicationForm/ApplyForm";
import PostCareer from "./Post/PostCareer";
import PostTraining from "./Post/PostTraining";
import ContactPage from "./WelcomePage/ContactPage";
import DashNavbar from "./Dashboard/DashNavbar";
import HomeDashboard from "./Dashboard/HomeDashboard";
import ForgotPassword from "./Login/ForgotPassword";
import ProtectedRoute from './Protected/ProtectedRoutes';
import HirePage from './Hire/Hire';


const PageRouter = ({ setIsAuthenticated}) => {

   // const [isAuthenticated, setIsAuthenticated] = useState(!!sessionStorage.getItem('token'));
//    const [isAuthenticated, setLocalIsAuthenticated] = useState(!!sessionStorage.getItem('token'));

//    // Use effect to check sessionStorage for authentication status updates
//    useEffect(() => {
//      const token = sessionStorage.getItem('token');
//      setLocalIsAuthenticated(!!token);
//    }, []);


    return(
        <Routes>
            <Route path= '/' element={ <Navigate to= 'home' />} />
            <Route Index path= 'home' element={<Home />} />
            <Route path= 'selectUser' element={<SelectUser />} />
            <Route path= 'loginTrainee' element={<TraineeLogin setIsAuthenticated={setIsAuthenticated}/>} />
            <Route path= 'loginTrainer' element={<TrainerLogin />} />
            <Route path= 'traineeRegister' element={<TraineeRegister />} />
            <Route path= 'trainerRegister' element={<TrainerRegister />} />
            <Route path= 'forgotPassword' element={<ForgotPassword />} />

            <Route element={<ProtectedRoute  redirectTo="selectUser" />}>
                
                
                <Route path= 'homeLogin' element={<HomeLogin />} />
                <Route path= 'applyForm' element={<ApplyForm />} />
                <Route path= 'postCareer' element={<PostCareer />} />
                <Route path= 'postTraining' element={<PostTraining />} />
                <Route path= 'contactPage' element={<ContactPage />} />
                <Route path= 'hirePage' element={<HirePage />} />
                
            </Route>

            <Route path= 'dashboard/' element={<DashNavbar />} />
            

        </Routes>
    )
}

export default PageRouter;