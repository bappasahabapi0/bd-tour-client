import React from 'react';

import "./Banner.css";



const Banner = () => {


    return (
        <>
            <div className="banner d-flex  align-items-center ">
                <div className="row container">
                    <div className="col-md-12">
                        <h1 className="title "><span className="text-warning ">Travell</span> Anywhere </h1>
                        <h3 className="title-guide"> With Our  Agency Guide 👨‍🎨 </h3> <br />
                        <h5 title-sm className="text-light">Make your reservation today with the most trusted Travell agent in Bangladesh. <br /> Our team will help  take care of everything in the background </h5>
                        <br /> <br /><br /><br />
                        <h1 title-sm className="text-primary fw-bold mt-5 ms-5 pb-3">Get <span className="text-warning">20% </span> discount for pre-booking in <span className="text-warning">1st November</span>2021</h1>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Banner;