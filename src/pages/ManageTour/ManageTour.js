import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ManageTour.css';

const ManageTour = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch('https://whispering-beyond-39369.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setTours(data))
    }, []);

    //---------------------> HANDLE THE DELETE 
    const handleDelete = id => {
        const proceed = window.confirm('Sure ,You want to delete 😮 ?');
        if (proceed) {
            const url = `https://whispering-beyond-39369.herokuapp.com/services/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Your tour package is successfully deleted');
                        const remaining = tours.filter(tour => tour._id !== id);
                        setTours(remaining);
                    }

                })
        }
    }
    //--------------------------->


    return (
        <div className="m-5 mb-5" >
            <h2>My Tour packag </h2>
            <Link to="/tourplan">
                <button className="btn btn-warning   mt-2 ms-3 mb-4 fw-bold p-3 rounded-pill"> 🟢🔴🟡 <br /> Add New Tour  </button>
            </Link> <br />
            {
                tours.map(tour =>
                    <div className="container-fluide bg-light" key={tour._id}>
                        <div className="d-felx">


                            <Card.Body>
                                <Card.Title><small>Package Name: </small>{tour.name}</Card.Title>
                                <Card.Footer>
                                    <div>
                                        <button className="btn btn-dark mt-2 ms-3 mb-4 fw-bold p-2 rounded-pill " onClick={() => handleDelete(tour._id)} > 🔴 Delete ❌</button >
                                        <Link to={`/updatetour/${tour._id}`}>
                                            <button className="btn btn-success   mt-2 ms-3 mb-4 fw-bold p-2 rounded-pill"> 🟢  Update package ✔ </button>
                                        </Link> <br />

                                    </div>
                                </Card.Footer>
                            </Card.Body>

                        </div>
                    </div>)
            }
        </div >
    );
};

export default ManageTour;



