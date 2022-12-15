import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

export const withParamsRedirect = (Component) => (props) => {
    const params = useParams();

    return <Component {...props} params={params} />
};

export const withAuthRedirect = (Component) => (props) => {

    return !props.auth.isAuth
        ?   <Navigate to={'/login'} />
        :   <Component 
                {...props}
            />;
};