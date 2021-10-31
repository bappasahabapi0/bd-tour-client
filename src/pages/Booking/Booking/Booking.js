
import React, { useEffect, useState } from 'react';
import "./Booking.css";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';




const Booking = () => {

    const { serviceId } = useParams();
    // const [details, setDetails] = useState([]);
    const [service, setService] = useState({});


    // here we load the data
    useEffect(() => {
        fetch(`https://whispering-beyond-39369.herokuapp.com/services/${serviceId}`)
            .then(response => response.json())
            .then(data => setService(data))

    }, []);

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
        <div className="booking mb-5 tour">
            <Link to="/">
                <button className="btn btn-warning mt-2 mb-2 fw-bold p-3 rounded-pill">◀◀ Go Back 🔴</button>
            </Link>
            <br />
            <h5 className="fw-bolder  "> {service?.name} SERVICE IS BOOKED .  </h5>
            <h5 className="fw-bolder  ">  Click 👇 to continue  </h5>
            {/* <Link to="/tourplan">
                <button className="btn btn-warning   mt-2 ms-3 mb-4 fw-bold p-3 rounded-pill"> 🟢 Place Order ▶▶  </button>
            </Link> <br /> */}
            <form className="m-0" onSubmit={handleSubmit(onSubmit)}>
                <img className="w-25  rounded-3 mb-2 " src={service?.img} alt="" />
                <small>type this <b>[  {service?.name}]</b> as package name </small>  <input className="fw-bold mt-3" {...register("name", { required: true, maxLength: 20 })} placeholder="package name" />
                <textarea className="fw-bold" {...register("description", { required: true })} placeholder=" Email  or   Address " />
                <input className="fw-bold" type="number" {...register("price", { required: true })} placeholder=" Your Contact Number" />
                <small><b>type this 👇 showing url </b></small> <input className="fw-bold" {...register("img", { required: false })} placeholder={service?.img} />
                <input className="bg-warning w-25 rounded-pill p-2 border-0 fw-bold fs-4" type="submit" />
            </form>


            <br />

        </div>




    );
};

export default Booking;