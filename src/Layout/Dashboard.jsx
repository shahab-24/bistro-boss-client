import { FaAd, FaAddressBook, FaBook, FaCalendar, FaEnvelope, FaHamburger, FaHome, FaList, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

import useCart from "../useMenu/useAxios/useCart/useCart";


const Dashboard = () => {
  const [cart] = useCart();
  const isAdmin = true;

  return (
    <div className="flex">
    {/* dashboard sidebar */}
    <div className="w-64 min-h-screen bg-orange-400">
    <h2 className="uppercase font-bold text-2xl text-white text-center pt-4">bistro boss <br /> <span className="uppercase text-sm">
    r e s t a u r a n t
    </span> </h2>
   

    <ul className="menu mt-8">

    {
      isAdmin ? <>

      <li><NavLink to='/dashboard/adminHome'>
      <FaHome></FaHome>Admin Home</NavLink>
      </li>
      <li><NavLink to='/dashboard/addItems'>
      <FaUtensils></FaUtensils>Add Items</NavLink>
      </li>
      <li><NavLink to='/dashboard/manageItems'>
      <FaList></FaList>Manage Items</NavLink>
      </li>
      <li><NavLink to='/dashboard/Bookings'>
      <FaBook></FaBook>Manage Bookings</NavLink>
      </li>
      <li><NavLink to='/dashboard/users'>
      <FaUsers></FaUsers>All Users</NavLink>
      </li>

      </> :
      <>

      <li><NavLink to='/dashboard/cart'>
      <FaShoppingCart></FaShoppingCart> My Cart : {cart.length} </NavLink>
      </li>
      <li><NavLink to='/dashboard/userHome'>
      <FaHome></FaHome> User Home</NavLink>
      </li>
      <li><NavLink to='/dashboard/reservation'>
      <FaCalendar></FaCalendar> Reservation</NavLink>
      </li>
      <li><NavLink to='/dashboard/review'>
      <FaAd></FaAd> Add Review</NavLink>
      </li>
      <li><NavLink to='/dashboard/bookings'>
      <FaList></FaList>My Bookings</NavLink>
      </li>
      </>
    }
     
      <div className="divider">
      
      </div>
      <li><NavLink to='/'>
      <FaHome></FaHome> User Home</NavLink>
      </li>
      <li><NavLink to='/order/salad'>
      <FaHamburger></FaHamburger> Menu</NavLink>
      </li>
      <li><NavLink to='/order/salad'>
      <FaEnvelope></FaEnvelope> Contact</NavLink>
      </li>
    </ul>
    </div>
    <div className="flex-1">
      <Outlet></Outlet>
    </div>
    </div>
  );
};

export default Dashboard;