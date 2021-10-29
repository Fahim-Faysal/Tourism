import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const AllOrders = () => {

      const [orders, setOrders] = useState([])

      useEffect(() => {
            fetch('http://localhost:4000/allbooking')
                  .then(res => res.json())
                  .then(data => setOrders(data))
      }, [])
      const element = <FontAwesomeIcon icon={faTrash} />

      //delete an user

      const handelDeleteUser = (id) => {
            const proceed = window.confirm('Are You Sure You Want To Delete')
            if (proceed) {
                  const url = `http://localhost:4000/allbooking/${id}`
                  fetch(url, {
                        method: "DELETE"
                  })
                        .then(res => res.json())
                        .then(data => {
                              if (data.deletedCount > 0) {
                                    alert('Deleted Successfully');
                                    const remaining = orders.filter(order => order._id !== id)
                                    setOrders(remaining)
                              }
                        })
            }
      }
      return (
            <div>

                  <h1>All order</h1>
                  <div>
                        <Table striped bordered hover>
                              <thead key={orders._id}>
                                    <tr>
                                          <th>Name</th>
                                          <th>Email</th>
                                          <th>City</th>
                                          <th>Address</th>
                                          <th>Phone</th>
                                    </tr>
                              </thead>

                              {
                                    orders.map(order => <tbody>
                                          <tr key={order._id}>
                                                <td>{order.name}</td>
                                                <td>{order.email}</td>
                                                <td>{order.city}</td>
                                                <td>{order.address}</td>
                                                <td>{order.phone}</td>
                                                <button onClick={() => handelDeleteUser(order._id)}><td>{element}</td></button>

                                          </tr>
                                    </tbody>)
                              }

                        </Table>
                  </div>
            </div >
      );
};

export default AllOrders;