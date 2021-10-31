import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './Custompack.css';
import { Link } from 'react-router-dom';


const Custompack = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        //post related code using axios ---------->
        axios.post('https://whispering-beyond-39369.herokuapp.com/services', data)
            .then(response => {
                if (response.data.insertedId) {
                    alert('Your booking is succesfully added');
                    reset();
                }

            })
        //---------------------->
    }
    return (
        <div className="tour" >

            <h1 className="mt-5" > Booking Your Order by giving proper  </h1>
            <small><b>[🔹 booked package name, description, tour cost 🔹]</b></small>
            <br /> <br />
            <form className="m-0" onSubmit={handleSubmit(onSubmit)}>
                <input className="fw-bold" {...register("name", { required: true, maxLength: 20 })} placeholder=" Package Name" />
                <textarea className="fw-bold" {...register("description", { required: true })} placeholder=" Package Description" />
                <input className="fw-bold" type="number" {...register("price", { required: true })} placeholder=" Total Cost" />
                <input className="fw-bold" {...register("img", { required: true })} placeholder=" Give Valid Image Url " />
                <input className="bg-warning rounded-pill p-2 border-0 fw-bold fs-4" type="submit" />
            </form>
            <p className="mt-3" ><b> ✅ You find in your booking infomation in the ManageTour sectioin and also find it in the Special package section in the homepage </b><br />
                <h3>👇</h3> </p>
            <Link to="/managetour">
                <button className="btn btn-warning   mt-2 ms-3 mb-2 fw-bold p-3 rounded-pill"> 🟢🔴🟡 <br /> Manage Your Tour  </button>
            </Link>
        </div>
    );
};


export default Custompack;