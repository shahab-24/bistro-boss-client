import { FaRegTrashAlt } from "react-icons/fa";
import useCart from "../useMenu/useAxios/useCart/useCart"
import Swal from "sweetalert2";
import useAxios from "../useMenu/useAxios/useAxios";


const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0)
  const axiosSecure = useAxios();
  const handleDelete= (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`)
        .then(res => {
            refetch()
          if(res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        })
       
      }
    });
  }
  return (
    <div className="">
   
    <div className="flex justify-evenly mt-10 p-8">
    <h2 className="text-4xl font-bold">Item: {cart.length}</h2>
    <h2 className="text-4xl font-bold">Total Price: {totalPrice}</h2>
    <button className="btn btn-primary text-4xl font-bold">Pay</button>
    </div>
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="w-full text-3xl font-bold bg-slate-400 text-white">
      <tr className="">
        <th>
         #
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    {cart.map((item, index) => <tr className="bg-gray-200 mb-4" key={item._id}>
        <th>
          {index+1}
        </th>
        <td className="">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="" />
              </div>
            </div>
            <div>
              
              <div className="text-sm opacity-50"></div>
            </div>
          </div>
        </td>
        <div className="font-bold text-2xl">{item.name}</div>
        <td className="text-xl">{item.price}</td>
        <th>
          <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-lg text-red-600"><FaRegTrashAlt /></button>
        </th>
      </tr>)}
    <tbody>
      {/* row 1 */}
      
     
    </tbody>
   

    
  </table>
</div>
      
    </div>
  );
};

export default Cart;