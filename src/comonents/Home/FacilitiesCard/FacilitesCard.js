import React from 'react';

const FacilitesCard = ({ facility }) => {

    return (
        <div className="col-md-4 d-flex justify-content-center">
            <div className="shadow-lg" style={{ width: '20rem', cursor: 'pointer' }}>
                <img className="card-img-top img-fluid" style={{ transform: 'scale(0.7)' }} src={facility.image} alt="" />
                <div className="card-body">
                    <h4 className="text-brand text-center">{facility.title}</h4>
                    <p className="card-text text-secondary text-center">{facility.description}</p>
                </div>
            </div>
        </div>
    );
};

export default FacilitesCard;