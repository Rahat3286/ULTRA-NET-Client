import React, { useContext } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import './Book.css';

const Book = () => {
    const [loggedInUser, setLoggedInUser] =useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) =>{
        console.log(data);
    }
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar/>
            </div>
            <div className="col-md-10">
                <div className="container py-5">
                    <h1 className="text-brand">Book</h1>
                </div>
                <div>
                    <form className="book-form" onSubmit={handleSubmit(onSubmit)}>
                        <input name="name" defaultValue={loggedInUser.name} {...register("name", { required: true })} placeholder="Your Name" />
                        {errors.name && <span className="error">Name is required</span>}
                        <input name="email" defaultValue={loggedInUser.email} {...register("email", { required: true })} placeholder="Your Name" />
                        {errors.email && <span className="error">Name is required</span>}
                        <input name="service"  {...register("service", { required: true })} placeholder="Enter the service you want" />
                        {errors.service && <span className="error">Which Service do you want?</span>}
                        <br/>
                        <button className="btn btn-brand text-white mt-4">Pay</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Book;