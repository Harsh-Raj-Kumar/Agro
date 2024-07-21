import React from 'react';
import { Navigate } from 'react-router-dom';


const ProtectedRoute = ({children}) => {

   const user = localStorage.getItem("user");

   return (
       !!user ? <Navigate to="/sensor" replace={true} /> : children
   )

}

export default ProtectedRoute;