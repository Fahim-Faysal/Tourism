import React from 'react';
import Banner from '../Banner/Banner';
import Extra from '../Extra/Extra';
import FreeCancel from '../FreeCancel/FreeCancel';
import Package from '../Package/Package';

const Home = () => {
      return (
            <div>
                  <Banner></Banner>
                  <Extra></Extra>
                  <Package></Package>
                  <FreeCancel></FreeCancel>
            </div>
      );
};

export default Home;