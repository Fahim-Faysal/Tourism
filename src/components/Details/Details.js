import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Details.css'

const Details = () => {
      const { id } = useParams()
      const { user } = useAuth()
      const [details, setDetails] = useState('')

      useEffect(() => {
            fetch(`https://calm-reef-13122.herokuapp.com/details/${id}`)
                  .then(res => res.json())
                  .then(data => setDetails(data));
      }, [])

      const { register, handleSubmit, reset } = useForm();
      const onSubmit = data => {
            axios.post('https://calm-reef-13122.herokuapp.com/booked', data)
                  .then(res => {
                        if (res.data.insertedId) {
                              alert('Booked Successfully')
                              reset()
                        }
                  })
      }

      return (

            <div>


                  <div className='mt-5 mb-5'>

                        <img style={{ width: "500px", height: "300px" }} src={details.img} alt="" />
                        <h2 className='mt-3 text-success'>{details.name}</h2>
                        <h3 className='text-warning'>Duration : {details.duration}</h3>
                        <h4 className='text-danger'>Price $ {details.price}</h4>
                  </div>
                  <h1 className='text-info mb-5'>Please Register To Book This Trip</h1>
                  <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
                        <input value={user?.displayName} {...register("name")} />
                        <input value={user?.email} {...register("email")} />
                        <input {...register("city")} placeholder='Enter the city name' />
                        <input {...register("address")} placeholder='Enter the address' />
                        <input type="number" {...register("phone")} placeholder='Phone Number' />
                        <input className='btn btn-danger' value='Confirm Booking' type="submit" />
                  </form>

            </div>
      );
};

export default Details;