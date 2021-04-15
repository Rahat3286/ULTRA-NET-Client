import React from 'react';

const TestimonialsCard = ({ testimonial }) => {
    return (
        <div className="col-md-4 d-flex justify-content-center">
            <div className="shadow-lg" style={{ width: '20rem' }}>
                <div className="card-body text-center">
                    <div className="row d-flex justify-content-around">
                        <div className="col-md-4">
                            <img className="card-img-top img-fluid" src={testimonial.image} alt="reviewer's image" />
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="text-brand">{testimonial.name}</div>
                                <div><small style={{ fontWeight: 'bold' }}>{testimonial.ranking},{testimonial.location}</small></div>
                            </div>
                        </div>
                    </div>
                    <div className="text-secondary mt-3">"{testimonial.description}"</div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsCard;