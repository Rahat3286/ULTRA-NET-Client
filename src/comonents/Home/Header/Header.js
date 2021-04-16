import React from 'react';
import webImage from '../../../Images/webImage.png';


const Header = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center">
                    <div className="my-5 py-5" style={{ width: '30rem', border: 'none' }}>
                        <div className="card-body">
                            <p class="card-text" style={{ color: 'rgb(31, 23, 49)', fontSize: '33px', fontWeight: '900' }}>Discover the world <br /> with <span style={{ textTransform: 'uppercase', color: 'rgb(64, 30, 232)', fontSize: '50px' }}>Ultra Net</span></p>
                            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto excepturi non ex error. Dolore, quaerat.</p>
                            <button className="btn btn-brand text-white">Make Your Plan</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 py-5 d-flex justify-content-center">
                    <div style={{ width: '26rem' }}>
                        <img className="img-fluid" src={webImage} alt="headerImage" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;