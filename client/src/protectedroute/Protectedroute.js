import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('userdata'));  // ithun te check krt data ahe ka getItem madhey key deto ki barobar pahije
    const location = useLocation();

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
};