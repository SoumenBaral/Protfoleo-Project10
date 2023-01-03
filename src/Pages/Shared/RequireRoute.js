import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, Navigate } from 'react-router-dom';
import auth from '../firebase.ini'
const RequireRoute = ({ children }) => {
    const [user] = useAuthState(auth);
    let location = useLocation();
    if (!user) {

        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireRoute;