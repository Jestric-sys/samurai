import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

export const withAuthRedirect = (Component) => (props) => {
    const params = useParams();

    return !props.auth.isAuth
        ?   <Navigate to={'/login'} />
        :   <Component 
                {...props}
                params={params}
            />;
};