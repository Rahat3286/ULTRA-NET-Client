import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './comonents/Home/Home/Home';
import Login from './comonents/Login/Login/Login';
import Navbar from './comonents/Home/Navbar/Navbar';
import Dashboard from './comonents/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './comonents/Login/PrivateRoute/PrivateRoute';
import Book from './comonents/User/Book/Book';
import BookingList from './comonents/User/BookingList/BookingList';
import Review from './comonents/User/Review/Review';
import AddService from './comonents/Admin/AddService/AddService';
import MakeAdmin from './comonents/Admin/MakeAdmin/MakeAdmin';
import OrderList from './comonents/Admin/OrderList/OrderList';



export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard/>
          </PrivateRoute>
          <PrivateRoute path="/book">
            <Book />
          </PrivateRoute>
          <PrivateRoute path="/bookingList">
            <BookingList/>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review/>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService/>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin/>
          </PrivateRoute>
          <PrivateRoute path="/orderList">
            <OrderList/>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
