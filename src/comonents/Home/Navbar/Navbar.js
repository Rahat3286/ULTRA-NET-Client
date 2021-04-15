import React from 'react';
import brandImage from '../../../Images/Ultra Net Image.jpg';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <div className="container">
                <a className="navbar-brand text-brand" href="#"><img src={brandImage} alt="" width="25" height="25" class="d-inline-block align-text-top"/> ULTRA NET</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav text-center ms-auto">
                        <li className="nav-item">
                            <a className="nav-link me-5 text-brand" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-5 text-brand" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-5 text-brand" href="#">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-5 text-brand" href="#"  >Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-5 text-brand" href="#"  >Admin</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link btn btn-brand text-white me-5" href="#">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;