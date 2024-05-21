import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";


const Main = () => {
  const location = useLocation();
  const islogin = location.pathname.includes('login') || location.pathname.includes('signup')
  return (
    <div>
    {/* if login has in ui then dont display navbar and footer. show only login page */}
      {islogin || <NavBar></NavBar>}
     <Outlet></Outlet>
      {islogin || <Footer></Footer>}
      
    </div>
  );
};

export default Main;