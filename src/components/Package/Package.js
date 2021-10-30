import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import './Package.css'

const Package = () => {
      const [packages, setPackages] = useState([])


      useEffect(() => {
            fetch('https://calm-reef-13122.herokuapp.com/package')
                  .then(res => res.json())
                  .then(data => setPackages(data));
      }, [])



      return (
            <div>
                  <Zoom>
                        <h1 className='text-success mt-5 mb-5'>Our Regular Travel Packages</h1>
                  </Zoom>
                  <div className='card-container container'>

                        {
                              packages.map(pg =>
                                    <Zoom>
                                          <Card key={pg._id} style={{ width: '18rem' }}>
                                                <Card.Img variant="top" src={pg.img} />
                                                <Card.Body>
                                                      <Card.Title>{pg.name}</Card.Title>
                                                      <Card.Text>
                                                            {pg.description}
                                                      </Card.Text>
                                                      <Link to={`/order/${pg._id}`}>
                                                            <Button variant="primary">Book Now</Button>
                                                      </Link>
                                                </Card.Body>
                                          </Card>
                                    </Zoom>
                              )
                        }

                  </div>
            </div>
      );
};

export default Package;