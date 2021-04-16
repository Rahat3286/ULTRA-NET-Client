import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Book from '../Book/Book';


const stripePromise = loadStripe('pk_test_51Ie1iKIepqUdlQr1YEoDJ6R92y5h16l89uwGt2LbgukmNnC6JqVJiIjvS3mSk3bafIcZzT7SLOrVuDf2BcYDrqTK00rxaRqPIx');

const PaymentProcess = () => {
    return (
        <Elements stripe={stripePromise}>
            <Book/>
        </Elements>
    );
};

export default PaymentProcess;