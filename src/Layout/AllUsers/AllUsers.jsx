import { useQuery } from "@tanstack/react-query";
import useAxios from "../../useMenu/useAxios/useAxios";
import { FaRegTrashAlt, FaUsers } from "react-icons/fa";
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

  const handleMakeAdmin = user => {

    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res => {
      console.log(res.data)
      if(res.data.modifiedCount > 0) {
        refetch()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin Now!!`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
    
  }

  const handleDeleteUser = (user) =>{
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
          if(res.data.deletedCount > 0) {
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: `${user.name} has been Deleted`,
              icon: "success"
            });
          }
        })
       
      }
    });
  }

  return (
    <div>
      <div className="flex justify-evenly mt-10 mb-10">
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
               { user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-500 text-xl text-white">
                    <FaUsers />
                  </button>}
                </td>
                <td>
                 
                  <button onClick={() => handleDeleteUser(user)} className="btn btn-ghost btn-lg text-red-600">
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
