import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faHome, faPlus, faUserPlus, faShoppingCart, faComment } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="text-brand">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/book" className="text-brand">
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Book</span>
                    </Link>
                </li>
                <div>
                    <li>
                        <Link to="/bookingList" className="text-brand">
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Booking List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/review" className="text-brand">
                            <FontAwesomeIcon icon={faComment} /> <span>Review</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/orderList" className="text-brand">
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Order List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addService" className="text-brand" >
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/makeAdmin" className="text-brand" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                        </Link>
                    </li>
                </div>
            </ul>
            <div>
                <Link to="/login" className="text-brand"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;