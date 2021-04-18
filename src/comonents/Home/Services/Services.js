import React, { useEffect, useState } from 'react';
import { addToDatabseBookingList } from '../../../Utilities/databaseManager';
import BookingList from '../../User/BookingList/BookingList';
import ServicesCard from '../ServicesCard/ServicesCard';


const Services = () => {
    const [services, setServices] = useState([]);
    const [bookingList, setBookingList] = useState([]);

    useEffect(() => {
        fetch('https://boiling-journey-92823.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleAddService = (service) => {
        const toBeAddedId = service._id;
        const sameService = bookingList.find(service => service._id == toBeAddedId);
        let count = 1;
        let newBookingList;
        if (sameService) {
            count = sameService.qunatity + 1;
            sameService.qunatity = count;
            const others = bookingList.filter(service => service._id !== toBeAddedId);
            newBookingList = [...others, sameService];
        }
        else {
            service.quantity = 1;
            newBookingList = [...bookingList, service];
        }
        setBookingList(newBookingList);
        addToDatabseBookingList(service._id, count);
    }

    return (
        <div className="container mt-5 pt-5">
            <h6 className="text-brand text-center">Services</h6>
            <p className="text-center" style={{ color: 'rgb(31, 23, 49)', fontSize: '33px', fontWeight: '900' }}>We provide the fastest <br /> internet connection across the country</p>
            <div className="row">
                {
                    services.map(service => <ServicesCard key={service._id} showAddtoBookingList={true} handleAddService={handleAddService} service={service} ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;
































// import React, { useEffect, useState } from 'react';
// import ServicesCard from '../ServicesCard/ServicesCard';


// const Services = () => {
//     const [services,setServices]=useState([]);
//     useEffect(() => {
//         fetch('https://boiling-journey-92823.herokuapp.com/services')
//             .then(res => res.json())
//             .then(data => setServices(data))
//     }, [])

//     return (
//         <div className="container mt-5 pt-5">
//             <h6 className="text-brand text-center">Services</h6>
//             <p className="text-center" style={{ color: 'rgb(31, 23, 49)', fontSize: '33px', fontWeight: '900' }}>We provide the fastest <br /> internet connection across the country</p>
//             <div className="row">
//                 {
//                     services.map(service => <ServicesCard service={service} key={service._id}></ServicesCard>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default Services;