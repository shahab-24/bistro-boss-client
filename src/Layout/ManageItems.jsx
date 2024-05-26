import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import useMenu from "../useMenu/useMenu";
import Swal from "sweetalert2";
import useAxiosPublic from "../useMenu/useAxiosPublic/useAxiosPublic";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, loading, refetch] = useMenu();
  const axiosPublic = useAxiosPublic();

  const handleDeleteItem =(item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then( async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.delete(`/menu/${item._id}`)
        if(res.data.deletedCount >0)
        refetch()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${item.name} has been Deleted.`,
          showConfirmButton: false,
          timer: 1500
        });
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success"
        // });
      }
    });
  }


  return (
    <div className="">
      <SectionTitle
        heading="manage all items"
        subHeading="hurry up"
      ></SectionTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full bg-gray-200">
            {/* head */}
            <thead>
              <tr className="text-2xl font-bold text-orange-400">
                <th>#</th>
                <th>Name</th>
                <th>Item Image</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id} className="pb-2">
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} alt="" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                    <button className="btn btn-ghost btn-sm bg-orange-500">Edit <FaEdit></FaEdit></button>
                    </Link>
                  </td>
                  <td>
                  <button onClick={() => handleDeleteItem(item)} className="btn btn-ghost btn-lg text-red-600"><FaRegTrashAlt /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
