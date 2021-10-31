import React, { useEffect, useState } from 'react';

import Offer from './Offer/Offer';

const Offers = () => {
    const [offers, setOffers] = useState([]);
    useEffect(() => {
        fetch(`https://whispering-beyond-39369.herokuapp.com/offers`)
            .then(res => res.json())
            .then(data => setOffers(data))
    }, []);
    return (
        <div id="offers" className="container ">
            <h2 className="text-dark fw-bolder m-5"> 🎉🧨 Holydays Offers🎈🎄</h2>
            <div className="row bg-warning bg-opacity-10">
                {
                    offers.map(offer => <Offer
                        key={offer.name}
                        offer={offer}
                    >
                    </Offer>)
                }
            </div>
        </div>
    );
};

export default Offers;


