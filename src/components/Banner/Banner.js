import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../Assets/banner3.jpeg';
import banner2 from '../../Assets/banner1.jpeg';
import banner3 from '../../Assets/banner2.jpeg';

const Banner = () => {
      return (
            <div>
                  <Carousel>
                        <Carousel.Item>
                              <img
                                    className="d-block w-100"
                                    src={banner1}
                                    alt="First slide"
                              />
                              <Carousel.Caption>
                                    <h3>Swizerland</h3>
                                    <p>Travel More to explore the world</p>
                              </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                              <img
                                    className="d-block w-100"
                                    src={banner2}
                                    alt="Second slide"
                              />

                              <Carousel.Caption>
                                    <h3>England</h3>
                                    <p>Enjoy the best travelling experience with us</p>
                              </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                              <img
                                    className="d-block w-100"
                                    src={banner3}
                                    alt="Third slide"
                              />

                              <Carousel.Caption>
                                    <h3>Malaysia</h3>
                                    <p>Travel makes people more powerfull</p>
                              </Carousel.Caption>
                        </Carousel.Item>
                  </Carousel>
            </div>
      );
};

export default Banner;