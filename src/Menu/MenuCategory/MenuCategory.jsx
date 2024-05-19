import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../Cover/Cover";


const MenuCategory = ({items, title, itemImg}) => {
  return (
    <div className="mt-10">
       { title && <Cover img={itemImg} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-4 mt-20">
   
      {
        items.map(item => <MenuItem key={item._id} item={item}>

        </MenuItem> )
      }
    </div>
  
   <div className="mt-6 text-center mb-6">
   <Link to={`/order/${title}`}><button className="btn btn-outline font-bold text-xl  bg-slate-200 w-1/2 border-0 border-b-4 text-center">Order Now</button></Link>
      
   </div>
    </div>
  );
};

export default MenuCategory;