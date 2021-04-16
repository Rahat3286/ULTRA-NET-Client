import React, { useEffect, useState } from 'react';
import TestimonialsCard from '../TestimonialsCard/TestimonialsCard';
import customerImage1 from '../../../Images/customerImage1.jpg';
import customerImage2 from '../../../Images/customerImage2.jpg';
import customerImage3 from '../../../Images/customerImage3.jpg';

const Testimonials = () => {

    const [reviews,setReviews] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div className="container mt-5 pt-5">
            <h1 className="text-center" style={{ color: 'rgb(31, 23, 49)' }}>Testimonials</h1>
            <div className="row mt-5">
                {
                    reviews.map(testimonial => <TestimonialsCard testimonial={testimonial} key={testimonial._id}></TestimonialsCard>)
                }
            </div>
        </div>
    );
};

export default Testimonials;