import React, { useEffect, useState } from 'react';
import servicesImage1 from '../../../Images/office internet service.png';
import servicesImage2 from '../../../Images/home internet service.png';
import servicesImage3 from '../../../Images/custom internet service.jpg';
import ServicesCard from '../ServicesCard/ServicesCard';

// const servicesData = [
//     {
//         image: servicesImage1,
//         title: 'Office Plan',
//         price: '60',
//         description: 'Praesent tincidunt porttitor libero, id sodales enim tincidunt. Proin dignissim leo finibus risus.'
//     },
//     {
//         image: servicesImage2,
//         title: 'Home Plan',
//         price: '100',
//         description: 'Praesent tincidunt porttitor libero, id sodales enim tincidunt. Proin dignissim leo finibus risus.'
//     },
//     {
//         image: servicesImage3,
//         title: 'Your Custom Plan',
//         price: '80',
//         description: 'Praesent tincidunt porttitor libero, id sodales enim tincidunt. Proin dignissim leo finibus risus.'
//     }
// ];

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="container mt-5 pt-5">
            <h6 className="text-brand text-center">Services</h6>
            <p className="text-center" style={{ color: 'rgb(31, 23, 49)', fontSize: '33px', fontWeight: '900' }}>We provide the fastest <br /> internet connection across the country</p>
            <div className="row">
                {
                    services.map(service => <ServicesCard service={service} key={service._id}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;