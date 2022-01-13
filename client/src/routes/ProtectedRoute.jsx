import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import axios from "axios";
function ProtectedRoute({auth}) {
    // const userCred = useContext(UserContext);
    // const location = useLocation();

    // const auth = userCred.isLoggedIn; // determine if authorized, from context or however you're doing it
    
    // console.log(userCred);
    // if(!auth) return;
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return  auth ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;