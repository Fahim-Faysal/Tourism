import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
      const { id } = useParams()
      const [details, setDetails] = useState('')
      console.log(id);

      useEffect(() => {
            fetch(`http://localhost:4000/details/${id}`)
                  .then(res => res.json())
                  .then(data => setDetails(data));
      }, [])

      return (
            <div className='mt-5'>

                  <img style={{ width: "500px", height: "300px" }} src={details.img} alt="" />
                  <h2 className='mt-3 text-success'>{details.name}</h2>
                  <h3 className='text-warning'>Duration : {details.duration}</h3>
                  <h4 className='text-danger'>Price $ {details.price}</h4>
            </div>
      );
};

export default Details;