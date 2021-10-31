
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar className="header  " sticky="top" bg="dark" variant="dark" collapseOnSelect expand="lg" >
                <Container  >
                    <Navbar.Brand as={HashLink} to="/home#home"> 🟢 BD-Tour ✈ </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="text-warning fw-bold " as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className="text-warning fw-bold" as={HashLink} to="/home#packages">Packages</Nav.Link>
                        <Nav.Link className="text-warning fw-bold" as={HashLink} to="/home#blogs">Blogs</Nav.Link>
                        <Nav.Link className="text-warning fw-bold" as={HashLink} to="home/#offers">Offers</Nav.Link>

                        {/* <Nav.Link className="text-warning fw-bold" as={Link} to="/placeorder">PlaceOrder</Nav.Link> */}
                        <Nav.Link className="text-warning fw-bold" as={Link} to="/tourplan">TourPlan</Nav.Link>
                        <Nav.Link className="text-warning fw-bold" as={Link} to="/managetour">ManageTour</Nav.Link>


                        {user?.email ?
                            <Button variant="success" onClick={logOut} >Logout</Button> :
                            <Nav.Link className="text-light fw-bold" as={Link} to="/login">Login </Nav.Link>}
                        <Navbar.Text className="m-3 text-primary">
                            Login as  <a href="#login">  {user?.displayName}</a>
                        </Navbar.Text>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;