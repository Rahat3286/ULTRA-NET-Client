import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const Review = () => {
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar/>
            </div>
            <div className="col-md-10">
                <div className="container">
                    <h1>this review section</h1>
                </div>
            </div>
        </div>
    );
};

export default Review;