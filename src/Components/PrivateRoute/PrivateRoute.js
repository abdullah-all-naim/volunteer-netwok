import React, { useContext } from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';


const PrivateRoute = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const location = useLocation()
    return (
      <Route
      path={props.path}
         render={data =>
          loggedInUser.emailVerified ? (
            <props.component {...data}></props.component>
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  export default PrivateRoute;