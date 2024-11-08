import React, {useState} from "react";
import Header from "./Header/Header";
import PageRouter from "./PageRouter";
import Footer from "./Footer/Footer";
import AdminFooter from "./Dashboard/AdminFooter";
import AdminNav from "./Dashboard/AdminNav";

import { useLocation } from "react-router-dom";
import DashNavbar from "./Dashboard/DashNavbar";
import { useAuth } from "./AuthContext";


const Layout = () => {

    const { isAuthenticated, setIsAuthenticated } = useAuth(); // Access the authentication state from context
    const location = useLocation();


    return(
    <>
        {
            location.pathname.startsWith('/dashboard' ) 
                ? <AdminNav/> 
                : <Header  isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        }

        <div> 
        {
            location.pathname.startsWith('/dashboard' ) ? <DashNavbar/> : <PageRouter setIsAuthenticated={setIsAuthenticated}/> 
        }
            
        </div>

         

        {
            location.pathname.startsWith('/dashboard' ) ? <AdminFooter/> : <Footer/>
        }
    </>
    )
}

export default Layout;