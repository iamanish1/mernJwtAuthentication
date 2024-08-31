import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Singin from "../pages/Singin";
import Profile from "../pages/Profile";
import Singup from "../pages/Singup";
const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
              {
                path : "",
                element : <Home/>,
              },
              {
                path : "/singup",
                element :<Singup/>,
              },
              {
                path : "/singin",
                element : <Singin/>,
              }, 
              {
                path : "/profile",
                element : <Profile/>,
              },
        ]
    }
])
 export default router