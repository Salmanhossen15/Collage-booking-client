import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Components/Home";
import AllCollages from "../Components/AllCollages";
import Admission from "../Components/Admission";
import MyCollages from "../Components/MyCollages";
import ErrorPage from "../Components/ErrorPage";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element: <Home></Home> 
        },
        {
            path:"allCollages",
            element: <AllCollages></AllCollages>
        },
        {
            path:"admission",
            element: <Admission></Admission>
        },
        {
            path:"myCollages",
            element:<MyCollages></MyCollages> 
        },
        {
          path:"login",
          element:<Login></Login>
        },
        {
          path:"signUp",
          element:<SignUp></SignUp>
        },
        
      ]
    },
    {
        path:"*",
        element:<ErrorPage></ErrorPage>
    }
  ]);