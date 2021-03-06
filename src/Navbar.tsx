import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import "./Navbar.css"

/**
 * NavBar
 * props: none
 * state: none
 * routes to ===> LandingPage, NewMessageForm, NewUserForm
 */
function NavBar() {

    return (
        <div className="NavBar Navbg" >
            <Navbar expand="lg" variant="dark">
                <Nav className="mr-auto" >
                    <NavLink exact to="/" className="nav-link navbar-brand">Apollo Messagely</NavLink>
                    <NavLink exact to="/users/new" className="nav-link">New User</NavLink>
                    <NavLink exact to="/messages/new" className="nav-link">New Message</NavLink>
                    <NavLink exact to="/users" className="nav-link">Users</NavLink>
                    <NavLink exact to="/messages" className="nav-link">Messages</NavLink>
                </Nav>
            </Navbar>
        </div >)
}

export default NavBar;