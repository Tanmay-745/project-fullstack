import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { UserContext } from '../../contexts/UserContext';



const PrivateRoute = ({ children, ...rest }) => {
    // const { user, isLoading } = useAuth();
    const { user } = useContext(UserContext)
    // if (isLoading) {
    //     return (<div className="mx-auto text-center">
    //         <Spinner animation="border" variant="danger" />
    //     </div>)
    // }

    return (
        <Route
            {...rest}
            render={({ location }) => user ? children : <Redirect
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

export default PrivateRoute;