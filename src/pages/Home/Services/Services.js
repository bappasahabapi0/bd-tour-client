import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="packages">
            <h2 className="text-dark fw-bolder m-5">BEST SELLING TOUR PACKAGES🏝️ </h2>
            <div className="service-container container">
                {
                    services.map(service => <Service
                        key={service.name}
                        service={service}
                    ></Service>)

                }
            </div>
        </div>
    );
};

export default Services;