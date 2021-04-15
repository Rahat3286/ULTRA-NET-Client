import React from 'react';
import facilityImage1 from '../../../Images/download upto 1gbps.png';
import facilityImage2 from '../../../Images/internet uptime.png';
import facilityImage3 from '../../../Images/customer support.png';
import FacilitesCard from '../FacilitiesCard/FacilitesCard';

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
            <div className="row">
                {
                    facilitesData.map(facility => <FacilitesCard facility={facility} key={facility.title}></FacilitesCard>)
                }
            </div>
        </div>
    );
};

export default Facilities;