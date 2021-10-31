import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, useHistory } from "react-router-dom";
import useFireabse from '../../hooks/useFireabse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
      const { user, googleSignOut } = useFireabse()
      let history = useHistory()

      // const userEmail = user?.email;

      const handelLgoin = () => {
            history.push('/login')
      }
      const googleOut = () => [
            googleSignOut()
      ]
      const signIn = <FontAwesomeIcon icon={faSignInAlt} />
      const signOut = <FontAwesomeIcon icon={faSignInAlt} />


      return (
            <div>
                  <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top" >
                        <Container>
                              <Navbar.Brand to="#home" className='text-secondary text-decoration-none'>Faysal Travel Agency <br /></Navbar.Brand>
                              <Navbar.Toggle />
                              <Navbar.Collapse>
                                    <Nav className="me-auto">
                                          <NavLink className='text-decoration-none mx-4' to="/home" activeStyle={{
                                                fontWeight: "bold",
                                                color: "red"
                                          }}>Home</NavLink>
                                          {
                                                user.email &&
                                                <NavLink className='text-decoration-none mx-4' to="/addservice" activeStyle={{
                                                      fontWeight: "bold",
                                                      color: "red"
                                                }}>Add A New Package</NavLink>}
                                          {
                                                user.email &&
                                                <NavLink className='text-decoration-none mx-4' to={`/mybooking/${user?.email}`} activeStyle={{
                                                      fontWeight: "bold",
                                                      color: "red"
                                                }}>My Bookings</NavLink>
                                          }

                                          {
                                                user.email &&
                                                <NavLink className='text-decoration-none mx-4' to="/orders" activeStyle={{
                                                      fontWeight: "bold",
                                                      color: "red"
                                                }}>Manage All Bookings</NavLink>
                                          }

                                          <NavLink className='text-decoration-none mx-4' to="/about" activeStyle={{
                                                fontWeight: "bold",
                                                color: "red"
                                          }}>About Us</NavLink>
                                    </Nav>

                                    {
                                          user.email ?
                                                <Button onClick={googleOut} variant="outline-danger m-2"><span>{signOut}</span>&nbsp; LogOut</Button>
                                                :
                                                <Button onClick={handelLgoin} variant="outline-success"><span>{signIn}</span>&nbsp; LogIn</Button>
                                    }

                                    {user.email &&
                                          <Navbar.Text className='text-warning'>
                                                Wellcome :  {user.displayName}
                                          </Navbar.Text>}
                              </Navbar.Collapse>

                        </Container>
                  </Navbar>
            </div >
      );
};

export default Header;