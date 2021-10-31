import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
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
                        <h1 className='text-success mt-5 mb-5 fw-bolder'>Top Destinations</h1>
                  </Zoom>
                  <div className='row container ms-5 '>
                        {
                              packages.map(pg =>
                                    <div className='col-lg-4 col-md-6 col-sm-12'>
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
                                    </div>
                              )
                        }
                        {/* </div> */}

                  </div>
            </div>
      );
};

export default Package;