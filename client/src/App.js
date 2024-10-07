import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Route, RouterProvider, Redirect } from 'react-router-dom';
import Register from './views/register.js/register';
import Home from './views/home/home';
import Login from './views/Login/login';
import Bookingcar from './views/booking car/bookingcar';
import Carspage from './views/cars/carspage';
import Aboutpage from './views/about/aboutpage';
import Addvehicle from './views/Admin/addVehicle/Manage_vehicles';
import { UserBookingHistory } from './views/bookingHistory/Bookingshistory';
import AdminBookingHistory from "./views/Admin/adminbookinghistory/adminbookinghistory"
import { ProtectedRoute } from './protectedroute/Protectedroute';
import Adminpage from './views/Admin/admin';
import ManageUsers from './views/Admin/allusers/manage_users';


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Register />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/home",
    element: (<ProtectedRoute > <Home /> </ProtectedRoute>)
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/home/carspage",
    element: (<ProtectedRoute ><Carspage /></ProtectedRoute>)
  },
  {
    path: "/booking/:carid",
    element: <Bookingcar />
  },
  {
    path: "/about",
    element: <Aboutpage />
  },
  {
    path: "/addvehicle",
    element: <Addvehicle />
  },
  {
    path: "/adminbookinghistory",
    element: <AdminBookingHistory />
  },
  {
    path: "/userbookinghistory",
    element: <UserBookingHistory />
  },{
    path:"/admin",
    element:<Adminpage/>
  },
  {
    path:"/manageusers",
    element:<ManageUsers/>
  },
  {
    path:"/aboutpage",
    element:<Aboutpage/>
  }
])



function App() {
  return <RouterProvider router={routes} />;
}

export default App;

// //protetedRoute
// export function protectedRoute(props){

//   if(localStorage.setItem('user')){
//     return <Route {...props}/>
//   }
//   else{
//     return <Redirect to ='/login'/>
//   }
// }