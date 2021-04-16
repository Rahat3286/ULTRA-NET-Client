import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import brandImage from '../../../Images/Ultra Net Image.jpg';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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
                            <Link to="/home" className="nav-link me-5 text-brand" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link me-5 text-brand" href="#">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link me-5 text-brand" href="#">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link me-5 text-brand" href="#"  >Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link me-5 text-brand" href="#"  >Dashboard</Link>
                        </li>
                        <li className="nav-item"><Link to="/login" className="nav-link">{
                        loggedInUser.isSignedIn ? <img style={{ height: '20px', width: '20px' }} src={loggedInUser.photo} alt="" /> :
                            <span className="btn btn-brand text-white">Log In</span>
                    }</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;