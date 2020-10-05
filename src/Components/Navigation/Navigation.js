import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logo.png';

const Navigation = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    return (
        <div className="d-flex justify-content-around mt-3">
            <div>
                <NavLink to="/">
                <img style={{width:'121px',heigth:'56px',opacity:'1'}} src={logo} alt=""/>
                </NavLink>
            </div>
            <div>
                <NavLink className ="text-decoration-none font-weight-bold text-dark mx-3" to="/home">Home</NavLink>
                <NavLink className ="text-decoration-none font-weight-bold text-dark mx-3" to="/donation">Donation</NavLink>
                <NavLink className ="text-decoration-none font-weight-bold text-dark mx-3" to="/events">Events</NavLink>
                <NavLink className ="text-decoration-none font-weight-bold text-dark mx-3" to="/blog">Blog</NavLink>
                { loggedInUser.emailVerified? <p className="font-weight-bold text-dark px-3 d-inline" style={{cursor: "pointer"}} onClick={ () => history.push('/showvolunteerdata')}>{loggedInUser.name}</p> 
                :<button className='btn btn-primary mx-3 px-5' onClick={() => history.push('/showvolunteerdata')}>Register</button>}
                <button className='btn btn-dark px-5' onClick={() => history.push('/adminpage')}>Admin</button>
            </div>
        </div>
    );
};

export default Navigation;