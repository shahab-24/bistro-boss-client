
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../useMenu/useAuth/useAuth";

const PrivateRoute = ({children}) => {
  const {user, loading} = useAuth();
  const location = useLocation();
  

  if(loading){
    return <progress className="progress w-56 text-orange-500"></progress>
  }

  if(user) {
    return children;
  }
  return <Navigate to='/login' state={{from: location}} replace></Navigate>
    
  
};

export default PrivateRoute;