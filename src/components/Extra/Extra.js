import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faFighterJet, faMoneyCheck } from '@fortawesome/free-solid-svg-icons'
import { faAngellist } from '@fortawesome/free-brands-svg-icons';

const Extra = () => {

      return (
            <div className='mt-5 container'>
                  <h1 className='mb-5 fw-bold'>Why book with US?</h1>

                  <div className='row'>
                        <div className='col-lg-3 col-md-4 col-6'>
                              <span className='fs-2'><FontAwesomeIcon icon={faMoneyCheck} /></span>
                              <br />
                              <h4>Ultimate flexibility</h4>
                              <p>You’re in control, with free cancellation and payment options to satisfy any plan or budget.</p>
                        </div>
                        <div className='col-lg-3 col-md-4 col-6'>
                              <span className='fs-2'><FontAwesomeIcon icon={faFighterJet} /></span>
                              <br />
                              <h4>Memorable experiences</h4>
                              <p>Browse and book tours and activities so incredible, you’ll want to tell your friends.</p>
                        </div>
                        <div className='col-lg-3 col-md-4 col-6'>
                              <span className='fs-2'><FontAwesomeIcon icon={faAngellist} /></span>
                              <br />
                              <h4>Quality at our core</h4>
                              <p>High quality standards. Millions of reviews. A Tripadvisor company.</p>
                        </div>
                        <div className='col-lg-3 col-md-4 col-6'>
                              <span className='fs-2'><FontAwesomeIcon icon={faAward} /></span>
                              <br />
                              <h4>Award-winning support</h4>
                              <p>New price? New plan? No problem. We’re here to help, 24/7.</p>
                        </div>
                  </div>

            </div>
      );
};

export default Extra;