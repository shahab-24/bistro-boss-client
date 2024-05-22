import Swal from "sweetalert2";
import useAuth from "../../useMenu/useAuth/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxios from "../../useMenu/useAxios/useAxios";
import useCart from "../../useMenu/useAxios/useCart/useCart";


const FoodCard = ({item}) => {
  const { name, image, price, recipe, _id} = item;
  const {user} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxios()
  const [, refetch] = useCart()
 


  const handleAddCart = () => {

    if(user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      axiosSecure.post("/carts", cartItem)
      .then(res => {if(res.data.insertedId){
        
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} has been Saved To Your Cart`,
          showConfirmButton: false,
          timer: 1500
        });
        refetch();
      }})
      
      
    }
    else{
      Swal.fire({
        title: "Are you want to add food item?",
        text: "Please, LogIn First!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, LogIn!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: {from: location}})
        }
      });

    }
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src={image} alt="Shoes" /></figure>
    <p className="absolute bg-slate-900 px-4 right-0 mr-4 mt-4 text-white">${price}</p>
    <div className="card-body">
      <h2 className="card-title">{name}</h2>
      <p>{recipe}</p>
      <div className="card-actions justify-center">
        <button onClick={handleAddCart} className="btn btn-outline border-0 bg-slate-100 border-b-4 hover:border-orange-400 hover:text-orange-400 hover:bg-slate-200 uppercase">Add to Cart</button>
      </div>
    </div>
  </div>
  );
};

export default FoodCard;