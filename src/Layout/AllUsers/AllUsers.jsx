import { useQuery } from "@tanstack/react-query";
import useAxios from "../../useMenu/useAxios/useAxios";
import { FaRegTrashAlt, FaUser, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxios();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleAdmin = user => {
    
  }

  const handleDeleteUser = user =>{
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
        axiosSecure.delete(`/users/${user._id}`)
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
    <div>
      <div className="flex justify-evenly">
        <h2 className="text-2xl font-bold">All Users</h2>
        <h2 className="text-2xl font-bold">Total Users: {users.length}</h2>
      </div>
      <div className="overflow-x-auto mr-4">
        <table className="table table-zebra w-full mr-8">
          {/* head */}
          <thead>
            <tr className="bg-orange-400 font-bold text-2xl">
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                <button onClick={() => handleAdmin(user)} className="btn btn-ghost bg-orange-500 text-xl text-white">
                    <FaUsers />
                  </button>
                </td>
                <td>
                  {" "}
                  <button onClick={() => handleDeleteUser(user._id)} className="btn btn-ghost btn-lg text-red-600">
                    <FaRegTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
