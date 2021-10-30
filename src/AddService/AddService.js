import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
const AddService = () => {
      const { register, handleSubmit, reset } = useForm();
      const onSubmit = data => {
            // axios.post('https://calm-reef-13122.herokuapp.com/booked', data)
            //       .then(res => {
            //             if (res.data.insertedId) {
            //                   alert('Booked Successfully')
            //                   reset()
            //             }
            //       })
      }
      return (
            <div>
                  <h1 className=' mt-5 text-info'>Add A Service</h1>
                  <form className='form-container mt-5' onSubmit={handleSubmit(onSubmit)}>


                        <input  {...register("name")} placeholder='Enter your Name' />
                        <input  {...register("email")} placeholder="Enter your Email" />
                        <input {...register("trip")} placeholder="Enter the destination name" />
                        <input {...register("city")} placeholder='Enter the city name' />
                        <input {...register("address")} placeholder='Enter the address' />
                        <input type="number" {...register("phone")} placeholder='Phone Number' />
                        <input className='btn btn-danger' value='Add Service' type="submit" />
                  </form>
            </div>
      );
};

export default AddService;