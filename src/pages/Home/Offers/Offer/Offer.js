import React from 'react';

const Offer = ({ offer }) => {
    const { name, Regular, discout, description, hotel, contact } = offer;
    return (
        <div className=" col-lg-4 col-sm-6 col-12 mt-5 mb-4 ">

            <h2 className="mt-4 fw-bolder fs-2">{name}</h2>
            <h5 className="text-danger fw-bold"> Offer:{discout}.Tk</h5>
            <h6 className="text-success fw-bold ">Regular:{Regular}.Tk</h6>
            <p><b>{description} <br />  {hotel} ,  📞: {contact}</b></p>
            <button className="bg-warning border-0 fw-bold p-2 rounded-3" >More Details</button>

        </div>
    );
};
export default Offer;
