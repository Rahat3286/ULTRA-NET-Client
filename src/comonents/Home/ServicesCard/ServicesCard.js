import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = (props) => {
    // console.log(props)
    const {image,title,price,description,_id} = props.service;
    console.log(_id);
    return (
        <div className="col-md-4 d-flex justify-content-center">
            <div className="shadow-lg"  style={{ width: '20rem',cursor:'pointer' }}>
                <img className="card-img-top img-fluid" style={{ transform: 'scale(0.7)' }} src={image} alt="" />
                <div className="card-body text-center">
                    <h4 className="text-brand">{title}</h4>
                    <p className="text-center text-brand" style={{ fontWeight: '700', fontSize: '20px' }}>$ {price}</p>
                    <p className="card-text text-secondary">{description}</p>
                    {
                        props.showAddtoBookingList === true && <Link to="/bookingList">
                            <button className="btn btn-brand text-white"
                            onClick={()=>props.handleAddService}>Choose this Plan</button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;