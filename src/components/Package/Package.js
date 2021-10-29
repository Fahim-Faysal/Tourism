import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Package.css'

const Package = () => {
      const [packages, setPackages] = useState([])


      useEffect(() => {
            fetch('http://localhost:4000/package')
                  .then(res => res.json())
                  .then(data => setPackages(data));
      }, [])



      return (
            <div>
                  <h1 className='text-success mt-5 mb-5'>Our Regular Travel Packages</h1>
                  <div className='card-container container'>

                        {
                              packages.map(pg =>

                                    <Card key={pg._id} style={{ width: '18rem' }}>
                                          <Card.Img variant="top" src={pg.img} />
                                          <Card.Body>
                                                <Card.Title>{pg.name}</Card.Title>
                                                <Card.Text>
                                                      {pg.description}
                                                </Card.Text>
                                                <Link to={`/details/${pg._id}`}>
                                                      <Button variant="primary">Details</Button>
                                                </Link>
                                          </Card.Body>
                                    </Card>

                              )
                        }

                  </div>
            </div>
      );
};

export default Package;