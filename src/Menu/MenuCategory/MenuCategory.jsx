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
    </div>
  );
};

export default MenuCategory;