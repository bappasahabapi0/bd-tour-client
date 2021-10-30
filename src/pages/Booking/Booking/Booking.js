
import React, { useEffect, useState } from 'react';
import "./Booking.css";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';




const Booking = () => {

    const { serviceId } = useParams();
    // const [details, setDetails] = useState([]);
    const [service, setService] = useState({});


    // here we load the data
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(response => response.json())
            .then(data => setService(data))

    }, []);

    return (
        <div className="booking mb-5">
            <br /> <br />
            <h3 className="fw-bolder  "> {service?.name} SERVICE IS BOOKED .  </h3>
            <h3 className="fw-bolder  ">  Click 👇 to continue  </h3>
            <Link to="/managetour">
                <button className="btn btn-warning   mt-2 ms-3 mb-4 fw-bold p-3 rounded-pill"> 🟢 Place Order ▶▶  </button>
            </Link> <br />
            <img className="w-25  rounded-3 " src={service?.img} alt="" /> <br />
            <Link to="/">
                <button className="btn btn-warning mt-4 mb-4 fw-bold p-3 rounded-pill">◀◀ Go Back 🔴</button>
            </Link>

            <br />

        </div>




    );
};

export default Booking;