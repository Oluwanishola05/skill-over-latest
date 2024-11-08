import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../styles/Header.css';
import logo from '../../assets/image/skillOver.png';
import { Link, useNavigate } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Swal from 'sweetalert2';
import UserProfileIcon from "./ProfileIcon";
import { useAuth } from "../AuthContext";

const Header = () => {
    const { isAuthenticated, setIsAuthenticated } = useAuth(); // Use context for authentication
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('lastName');
        sessionStorage.removeItem('id');
        setIsAuthenticated(false);

        Swal.fire({
            title: 'Logged Out',
            text: 'You have been successfully logged out.',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            navigate('/selectUser');
        });
    };

    return (
        <Navbar expand="lg" className="header">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} className="skillOver" alt="SkillOver Logo" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" style={{ backgroundColor: 'blue' }} />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="m-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link href="home" id="navName">HOME</Nav.Link>
                        <Nav.Link href="#features" id="navName">NEWS</Nav.Link>
                        <Nav.Link href="#pricing" id="navName">LIBRARY</Nav.Link>
                        <Nav.Link href="hirePage" id="navName">HIRE</Nav.Link>
                        <Nav.Link href="#pricing" id="navName"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            POST
                        </Nav.Link>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{ 'aria-labelledby': 'basic-button' }}
                        >
                            <Link to='postTraining'>
                                <MenuItem onClick={handleClose}>Post Training</MenuItem>
                            </Link>
                            <Link to='postCareer'>
                                <MenuItem onClick={handleClose}>Post Career News</MenuItem>
                            </Link>
                        </Menu>
                    </Nav>

                    <Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="#"><img src={`https://i.imgur.com/s3noPaC.png`} alt="" /></a>
                                <a href="#"><img src={`https://i.imgur.com/rxgJBL4.png`} alt="" /></a>
                                <a href="#"><img src={`https://i.imgur.com/cE0RPru.png`} alt="" /></a>
                            </div>

                            {isAuthenticated ? (
                                <UserProfileIcon handleLogout={handleLogout} />
                            ) : (
                                <Link to='selectUser'>
                                    <button className="vvd">
                                        <span>Sign In </span>
                                    </button>
                                </Link>
                            )}
                        </span>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
