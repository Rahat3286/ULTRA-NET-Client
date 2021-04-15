import React from 'react';
import TestimonialsCard from '../TestimonialsCard/TestimonialsCard';
import customerImage1 from '../../../Images/customerImage1.jpg';
import customerImage2 from '../../../Images/customerImage2.jpg';
import customerImage3 from '../../../Images/customerImage3.jpg';

const testimonialsData = [
    {
        image: customerImage1,
        name: 'Nash Patrik',
        ranking: 'CEO',
        location: 'Manpol',
        description: 'Praesent tincidunt porttitor libero, id sodales enim tincidunt. Proin dignissim leo finibus risus.'
    },
    {
        image: customerImage2,
        name: 'Miriam Barron',
        ranking: 'CEO',
        location: 'Manpol',
        description: 'Praesent tincidunt porttitor libero, id sodales enim tincidunt. Proin dignissim leo finibus risus.'
    },
    {
        image: customerImage3,
        name: 'Bria Malone',
        ranking: 'CEO',
        location: 'Manpol',
        description: 'Praesent tincidunt porttitor libero, id sodales enim tincidunt. Proin dignissim leo finibus risus.'
    },
]

const Testimonials = () => {
    return (
        <div className="container mt-5 pt-5">
            <h1 className="text-center" style={{ color: 'rgb(31, 23, 49)' }}>Testimonials</h1>
            <div className="row mt-5">
                {
                    testimonialsData.map(testimonial => <TestimonialsCard testimonial={testimonial} key={testimonial.name}></TestimonialsCard>)
                }
            </div>
        </div>
    );
};

export default Testimonials;