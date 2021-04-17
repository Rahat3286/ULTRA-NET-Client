import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { removeFromDatabaseBookingList } from '../../../Utilities/databaseManager';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import BookedItem from '../BookedItem/BookedItem';

const BookingList = () => {
    const [addService, setAddService] = useState([]);
    const history =useHistory();

    const cancelService = (serviceId)=>{
        const newService = addService.filter(service => service._id !== serviceId);
        setAddService(newService);
        removeFromDatabaseBookingList(serviceId);
    }

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar/>
            </div>
            <div className="col-md-10">
                <div className="container py-5">
                    <h1 className="text-brand">Booking List</h1>
                    <div className="row">
                        <div className="col-md-4">
                            {
                                addService.map(service => <BookedItem key={service._id} cancelService={cancelService} service={service}></BookedItem>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingList;