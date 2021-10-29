import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useFireabse from '../../hooks/useFireabse';

const Header = () => {
      const { user, googleSignOut } = useFireabse()
      let history = useHistory()
      let location = useLocation()

      const redirect_uri = location?.state?.from || '/home';

      const handelLgoin = () => {
            history.push('/login')
      }
      const googleOut = () => [
            googleSignOut()
      ]

      return (
            <div>
                  <Navbar collapseOnSelect expand="lg" bg="light" variant="dark" sticky="top" >
                        <Container>
                              <Navbar.Brand to="#home" className='text-info'>Faysal Travel Agency <br />Center</Navbar.Brand>
                              <Navbar.Toggle />
                              <Navbar.Collapse>
                                    <Nav className="me-auto">
                                          <NavLink className='text-decoration-none mx-5' to="/home" activeStyle={{
                                                fontWeight: "bold",
                                                color: "red"
                                          }}>Home</NavLink>
                                          <NavLink className='text-decoration-none mx-5' to="/package" activeStyle={{
                                                fontWeight: "bold",
                                                color: "red"
                                          }}>Travel Detalis</NavLink>
                                          {/* <NavLink className='text-decoration-none mx-5' to="/doctor" activeStyle={{
                                                fontWeight: "bold",
                                                color: "red"
                                          }}>Doctors</NavLink> */}
                                          <NavLink className='text-decoration-none mx-5' to="/About" activeStyle={{
                                                fontWeight: "bold",
                                                color: "red"
                                          }}>About Us</NavLink>
                                    </Nav>

                                    <Button onClick={handelLgoin} variant="outline-success">LogIn</Button>

                                    <Button onClick={googleOut} variant="outline-danger m-2">logOut</Button>

                                    {user.email &&
                                          <Navbar.Text className='text-warning'>
                                                Wellcome :  {user.displayName}
                                          </Navbar.Text>}
                              </Navbar.Collapse>

                        </Container>
                  </Navbar>
            </div>
      );
};

export default Header;