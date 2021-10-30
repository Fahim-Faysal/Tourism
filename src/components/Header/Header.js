import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory } from "react-router-dom";
import useFireabse from '../../hooks/useFireabse';

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
      // const url = 

      return (
            <div>
                  <Navbar collapseOnSelect expand="lg" bg="light" variant="dark" sticky="top" >
                        <Container>
                              <Navbar.Brand to="#home" className='text-info'>Faysal Travel Agency <br /></Navbar.Brand>
                              <Navbar.Toggle />
                              <Navbar.Collapse>
                                    <Nav className="me-auto">
                                          <NavLink className='text-decoration-none mx-4' to="/home" activeStyle={{
                                                fontWeight: "bold",
                                                color: "red"
                                          }}>Home</NavLink>
                                          <NavLink className='text-decoration-none mx-4' to="/addservice" activeStyle={{
                                                fontWeight: "bold",
                                                color: "red"
                                          }}>Add A Service</NavLink>
                                          {
                                                user.email &&
                                                <NavLink className='text-decoration-none mx-4' to={`/mybooking/${user?.email}`} activeStyle={{
                                                      fontWeight: "bold",
                                                      color: "red"
                                                }}>My Orders</NavLink>
                                          }

                                          {
                                                user.email &&
                                                <NavLink className='text-decoration-none mx-4' to="/orders" activeStyle={{
                                                      fontWeight: "bold",
                                                      color: "red"
                                                }}>All Orders</NavLink>
                                          }

                                          <NavLink className='text-decoration-none mx-4' to="/about" activeStyle={{
                                                fontWeight: "bold",
                                                color: "red"
                                          }}>About Us</NavLink>
                                    </Nav>

                                    {
                                          user.email ?
                                                <Button onClick={googleOut} variant="outline-danger m-2">logOut</Button>
                                                :
                                                <Button onClick={handelLgoin} variant="outline-success">LogIn</Button>
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