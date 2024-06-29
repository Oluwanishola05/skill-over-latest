import React from "react";
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

const PageRouter = () => {

    return(
        <Routes>
            <Route path= '/' element={ <Navigate to= 'home' />} />
            <Route Index path= 'home' element={<Home />} />
            <Route path= 'loginTrainee' element={<TraineeLogin />} />
            <Route path= 'loginTrainer' element={<TrainerLogin />} />
            <Route path= 'traineeRegister' element={<TraineeRegister />} />
            <Route path= 'trainerRegister' element={<TrainerRegister />} />
            <Route path= 'selectUser' element={<SelectUser />} />
            <Route path= 'homeLogin' element={<HomeLogin />} />
            <Route path= 'applyForm' element={<ApplyForm />} />
            <Route path= 'postCareer' element={<PostCareer />} />
            <Route path= 'postTraining' element={<PostTraining />} />
            <Route path= 'contactPage' element={<ContactPage />} />
            <Route path= 'forgotPassword' element={<ForgotPassword />} />

            <Route path= 'dashboard/' element={<DashNavbar />} />
            

        </Routes>
    )
}

export default PageRouter;