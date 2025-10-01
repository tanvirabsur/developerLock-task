import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../hooks/AuthProvider';

const ProtectedRoute = () => {
  const { user } = useAuth();

  if (user) {
    // If user is not authenticated, redirect to login page
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
