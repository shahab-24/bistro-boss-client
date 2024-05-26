import {
  createBrowserRouter,
  
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Secret from "../Components/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Cart";
import AllUsers from "../Layout/AllUsers/AllUsers";
import AddItems from "../Layout/AddItems";
import AdminRoute from "./PrivateRoute/AdminRoute";
import ManageItems from "../Layout/ManageItems";
import UpdateItem from "../Layout/UpdateItem";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'menu',
        element: <Menu></Menu>
      },
      {
        path: 'order/:category',
        element: <Order></Order>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'secret',
        element: <PrivateRoute>
          <Secret></Secret>
        </PrivateRoute>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path:'cart',
        element: <Cart></Cart>
      },
      // -------admin route-----
      {
        path: 'addItems',
        element: <AdminRoute><AddItems></AddItems></AdminRoute>
     
      },
      {
        path: 'manageItems',
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
     
      },
      {
        path: 'updateItem/:id',
        element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
     
      },
      {
        path: 'users',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      }
    ]
  }
]);