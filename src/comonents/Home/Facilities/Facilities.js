import React from 'react';
import facilityImage1 from '../../../Images/download upto 1gbps.png';
import facilityImage2 from '../../../Images/internet uptime.png';
import facilityImage3 from '../../../Images/customer support.png';
import FacilitesCard from '../FacilitiesCard/FacilitesCard';
import { CircularProgress } from '@material-ui/core';

const facilitesData = [
    {
        image: facilityImage1,
        title: 'Download upto 1Gbps',
        description: 'Praesent tincidunt porttitor libero, id sodales enim tincidunt. Proin dignissim leo finibus risus.'
    },
    {
        image: facilityImage2,
        title: '99% Internet uptime',
        description: 'Praesent tincidunt porttitor libero, id sodales enim tincidunt. Proin dignissim leo finibus risus.'
    },
    {
        image: facilityImage3,
        title: '24/7 Customer Support',
        description: 'Praesent tincidunt porttitor libero, id sodales enim tincidunt. Proin dignissim leo finibus risus.'
    },
]

const Facilities = () => {
    return (
        <div className="container">
            <h6 className="text-brand text-center">Facilites</h6>
            <p className="text-center" style={{ color: 'rgb(31, 23, 49)', fontSize: '33px', fontWeight: '900' }}>Experience smoother & <br /> faster internet connection</p>
            <div className="row">
                {
                    facilitesData.lenght === 0 && <CircularProgress color="primary"/>
                }
                {
                    facilitesData.map(facility => <FacilitesCard facility={facility} key={facility.title}></FacilitesCard>)
                }
            </div>
        </div>
    );
};

export default Facilities;