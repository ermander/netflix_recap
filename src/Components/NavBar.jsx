import React from "react";
import {Navbar, Nav} from "react-bootstrap"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Register from "./Register"

const NavBar = () => {
   return( 
        <div>
            <Router>
                <Navbar variant="dark" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#">TV Shows</Nav.Link>
                        <Nav.Link href="#">Movies</Nav.Link>
                        <Nav.Link href="#">Recently Added</Nav.Link>        
                        <Nav.Link href="#">My List</Nav.Link>
                        <Nav.Link href="#">Link</Nav.Link>    
                        <Route path="/register" exact component={Register} /> 
                        <Link to="/register">Register</Link>                        
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </Router>
        </div>
    )
}

export default NavBar