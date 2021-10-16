import React from 'react';
import { Redirect, Route } from 'react-router';
import useAught from '../../../../Hooks/Auth';

const PrivetRoute = ({children,...rest}) => {
    const{user}=useAught();
    return (
        <Route
        {...rest}
        render={({ location })=>user.email ? children :<Redirect
        to={{
            pathname: "/login",
            state: { from: location }
          }}
        ></Redirect>

        }

        >
            
        </Route>
    );
};

export default PrivetRoute;