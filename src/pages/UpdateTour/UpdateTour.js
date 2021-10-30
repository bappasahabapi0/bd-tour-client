import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './UpdateTour.css';

const UpdateTour = () => {
    const [pacName, setpacName] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setpacName(data))
    }, []);

    //UPDATE PACKAGE AND PRICE
    const handleNameChange = e => {
        const updatedName = e.target.value;
        const updatedPlace = { name: updatedName, price: pacName.price };
        setpacName(updatedPlace);
    };
    const handlePriceChange = e => {
        const updatedPrice = e.target.value;
        const updatedPacPrice = { name: pacName.name, price: updatedPrice };
        setpacName(updatedPacPrice);
    };
    //------------------->

    //----------------> HANDLE THE UPDATE
    const handleUpdatePackage = e => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(pacName)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Successfully Updated ');
                    setpacName({});
                }
            })
        e.preventDefault();

    }
    //-------------------------------->
    return (
        <div className="update-container" >
            <h1>Update your tour place </h1>

            <hr className="w-50 container p-2 mt-4 " />
            <h3 className="mt-4">Updated Name: <span className="text-primary " >{pacName?.name}</span> </h3>
            <h3>Updated Cost: <span className="text-primary" >{pacName?.price}</span> </h3>
            <form onSubmit={handleUpdatePackage}>
                <small ><b>Update place:</b></small>  <input className="fw-bold bg-light mt-3" type="text" onChange={handleNameChange} value={pacName.name || ''} /> <br />
                <small><b>Update Cost:</b></small> <input className="fw-bold bg-light mt-3" type="text" onChange={handlePriceChange} value={pacName.price || ''} />
                <br /> <br />
                <input className="bg-warning ms-5 fs-5 border-0 p-3 fw-bold rounded-pill" type="submit" value="✅ Update" />
            </form>
        </div>
    );
};

export default UpdateTour;