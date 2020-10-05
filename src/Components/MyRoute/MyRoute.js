import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AddEvent from '../AddEvent/AddEvent';
import AdminPage from '../AdminPage/AdminPage';
import HomePage from '../HomePage/HomePage';
import Login from '../LoginPage/Login';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import VolunteerData from '../VolunteerData/VolunteerData';
import VolunteerReg from '../VolunteerReg/VolunteerReg';

const MyRoute = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/addevent" component={AddEvent} />
            <PrivateRoute exact path="/showvolunteerdata" component={VolunteerData} />
            <PrivateRoute exact path="/adminpage" component={AdminPage} />
            <PrivateRoute exact path="/volunteerreg/:work" component={VolunteerReg} />
        </BrowserRouter>
    );
};

export default MyRoute;