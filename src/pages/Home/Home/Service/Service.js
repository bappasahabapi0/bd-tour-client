import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {

    const { _id, name, description, img, price } = service;
    return (
        <div className="service pb-3 bg-primary bg-opacity-10 ">
            <img className="w-75 mt-3 rounded-3 " src={img} alt="" />
            <h3 className="mt-4">{name} [{price}]</h3>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning fw-bold">Booking {name.toLowerCase()}package</button>
            </Link>
        </div>
    );
};

export default Service;