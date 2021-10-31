import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faInstagram, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
const Footer = () => {
      return (
            <div>

                  <div className='row bg-info p-5 mt-5 d-flex justify-content-center'>

                        <div className=' col-lg-4 col-md-6 col-12'>
                              <h3>Faysal Travel Agency</h3>
                              <p>Mobile : <small>01785448325</small></p>
                        </div>
                        <div className=' col-lg-4 col-md-6 col-12'>
                              <h2>Head Office</h2>
                              <p> Green Road, Dhanmondi, Dhaka, Bangladesh</p>
                              <h5>Phone : 02-222246338, 02-222246339, 02-222246340</h5>
                              <p>fayslasiyam@gmail.com</p>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 '>
                              <h5>Social Media Links</h5>
                              {/* <input type="text" placeholder='Enter your Email' /> */}
                              <span className='me-3 size fs-3'><FontAwesomeIcon icon={faYoutube} /></span>
                              <span className='me-3 size fs-3'><FontAwesomeIcon icon={faGoogle} /></span>
                              <span className='me-3 size fs-3'><FontAwesomeIcon icon={faTwitter} /></span>
                              <span className='me-3 size fs-3'><FontAwesomeIcon icon={faInstagram} /></span>
                        </div>

                  </div>
            </div>

            // <div className='bg-info p-4 mt-5 '>

            //       <div className='d-flex mx-5 justify-content-between'>
            //             <div>
            //                   <h3>Faysal Travel Agency</h3>
            //                   <p>Mobile : <small>01785448325</small></p>
            //             </div>
            //             <div>
            //                   <h2>Head Office</h2>
            //                   <p> Green Road, Dhanmondi, Dhaka, Bangladesh</p>
            //                   <h5>Phone : 02-222246338, 02-222246339, 02-222246340</h5>
            //                   <p>fayslasiyam@gmail.com</p>
            //             </div>
            //             <div>
            //                   <h5>Enter Your Email</h5>
            //                   <input type="text" placeholder='Enter your Email' />
            //             </div>

            //       </div>
            //       <p className='text-success'>Copyright@ Fahim Faysal Siyam</p>
            // </div>


      );
};

export default Footer;