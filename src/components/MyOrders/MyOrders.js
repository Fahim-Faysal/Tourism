import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';




const MyOrders = () => {
      const { user } = useAuth()

      const { id } = useParams()




      const [myorders, setMyOrders] = useState([])

      useEffect(() => {
            fetch(`https://calm-reef-13122.herokuapp.com/mybooking/${id}`)
                  .then(res => res.json())
                  .then(data => setMyOrders(data))
      }, [])

      const handelDeleteUser = (id) => {
            const proceed = window.confirm('Are You Sure You Want To Delete')
            if (proceed) {
                  const url = `https://calm-reef-13122.herokuapp.com/mybooking/${id}`
                  fetch(url, {
                        method: "DELETE"
                  })
                        .then(res => res.json())
                        .then(data => {
                              if (data.deletedCount > 0) {
                                    alert('Deleted Successfully');
                                    const remaining = myorders.filter(order => order._id !== id)
                                    setMyOrders(remaining)
                              }
                        })
            }
      }
      const element = <FontAwesomeIcon icon={faTrash} />
      return (
            <div>
                  <h1 className='text-success mt-5 mb-5'>All My Bookings</h1>
                  <div>
                        <Table striped bordered hover>
                              <thead key={myorders._id}>
                                    <tr>
                                          <th>Name</th>
                                          <th>Email</th>
                                          <th>Trip Booked For</th>
                                          <th>City</th>
                                          <th>Address</th>
                                          <th>Phone</th>
                                    </tr>
                              </thead>
                              {
                                    myorders.map(order => <tbody>
                                          <tr key={order._id}>
                                                <td>{order.name}</td>
                                                <td>{order.email}</td>
                                                <td>{order.trip}</td>
                                                <td>{order.city}</td>
                                                <td>{order.address}</td>
                                                <td>{order.phone}</td>
                                                <button onClick={() => handelDeleteUser(order._id)}><td>{element}</td></button>

                                          </tr>
                                    </tbody>)
                              }
                        </Table>
                  </div>
            </div>
      );
};

export default MyOrders;