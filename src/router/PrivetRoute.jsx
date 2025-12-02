import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom'; // Corrected import
import { ClipLoader } from 'react-spinners'; // Import ClipLoader

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return (
            <div className="flex justify-center items-center h-screen">
                <ClipLoader color="#36d7b7" size={50} />
            </div>
        );
    } 
    
    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to='/login'/>;
};

export default PrivetRoute;