import React from 'react';
import { Navigate } from "react-router-dom";

// Компонент высшего порядка (НОС) для защиты маршрутов
const ProtectedRoute = ({ element: Component, ...props }) => {
  if (props.loggedIn) {
    return (
      <Component {...props} />
    )
  } else {
    return (
      <Navigate to={"/"} />
    ) 
  }
};

export default ProtectedRoute;