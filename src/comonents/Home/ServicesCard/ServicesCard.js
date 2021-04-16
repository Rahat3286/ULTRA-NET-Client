import React from 'react';

const ServicesCard = ({ service }) => {

    return (
        <div className="col-md-4 d-flex justify-content-center">
            <div className="shadow-lg"  style={{ width: '20rem',cursor:'pointer' }}>
                <img className="card-img-top img-fluid" style={{ transform: 'scale(0.7)' }} src={service.image} alt="" />
                <div className="card-body">
                    <h4 className="text-brand text-center">{service.title}</h4>
                    <p className="text-center text-brand" style={{ fontWeight: '700', fontSize: '20px' }}>$ {service.price}</p>
                    <p className="card-text text-secondary text-center">{service.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;