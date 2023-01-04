import React from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, Navigate } from 'react-router-dom';
import auth from '../firebase.ini'
import Loading from '../Login/Loading';
const RequireRoute = ({ children }) => {
    const [user] = useAuthState(auth);    
    let location = useLocation();
    const [loading] = useSignInWithEmailAndPassword(auth);
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {

        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireRoute;