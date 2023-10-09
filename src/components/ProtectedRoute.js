import React from 'react';
import { Navigate } from "react-router-dom";

// Компонент высшего порядка (НОС) для защиты маршрутов
const ProtectedRoute = ({ element: Component, ...props }) => {
  return (
    props.loggedIn ? <Component {...props} /> : <Navigate to="/signin" replace />
  )
};

export default ProtectedRoute;