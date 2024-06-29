import React from "react";
import Header from "./Header/Header";
import PageRouter from "./PageRouter";
import Footer from "./Footer/Footer";
import AdminFooter from "./Dashboard/AdminFooter";
import AdminNav from "./Dashboard/AdminNav";

import { useLocation } from "react-router-dom";
import DashNavbar from "./Dashboard/DashNavbar";


const Layout = () => {

    const location = useLocation();


    return(
    <>
        {
            location.pathname.startsWith('/dashboard' ) ? <AdminNav/> : <Header/>
        }

        <div> 
        {
            location.pathname.startsWith('/dashboard' ) ? <DashNavbar/> : <PageRouter /> 
        }
            
        </div>

         

        {
            location.pathname.startsWith('/dashboard' ) ? <AdminFooter/> : <Footer/>
        }
    </>
    )
}

export default Layout;