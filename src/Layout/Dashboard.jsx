import { FaAd, FaAddressBook, FaCalendar, FaHamburger, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

import useCart from "../useMenu/useAxios/useCart/useCart";


const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="flex">
    <div className="w-64 min-h-screen bg-orange-400">
    <ul className="menu mt-8">
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
      <div className="divider">
      
      </div>
      <li><NavLink to='/'>
      <FaHome></FaHome> User Home</NavLink>
      </li>
      <li><NavLink to='/order/salad'>
      <FaHamburger></FaHamburger> Menu</NavLink>
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