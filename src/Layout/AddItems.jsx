import { useForm } from "react-hook-form";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../useMenu/useAxiosPublic/useAxiosPublic";
import useAxios from "../useMenu/useAxios/useAxios";
import Swal from "sweetalert2";



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {
  const axiosSecure = useAxios()
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const onSubmit = async(data) => {
    console.log(data);
    const imageFile = {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {

        'content-type': 'multipart/form-data'
      }
    });
    
 if(res.data.success){
  const menuItem = {
    name: data.name,
    category: data.category,
    price: parseFloat(data.price),
    recipe: data.recipe,
    image: res.data.data.display_url,
  }
  const menuRes = await axiosSecure.post('/menu', menuItem)
  console.log(menuRes.data);
  if(menuRes.data.insertedId){
    reset()
    Swal.fire({
      position: "top-end",
      icon: "success",
      title:`${data.name} is added to the Menu.`,
      showConfirmButton: false,
      timer: 1500
    });
    
    
  }
 }
 console.log('with image', res.data);
  };

  return (
    <div className="bg-gray-100">
      <div>
        <SectionTitle
          heading={"add an item"}
          subHeading={"what's new"}
        ></SectionTitle>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe Name"
              {...register("name")}
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-6 my-4">
            {/* category */}
            <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Select a Category*</span>
              </label>
              <select defaultValue='default'
                {...register("Category")}
                className="select select-bordered w-full"
              >
            
                
                <option disabled value='default'>
                  Select a Category
                </option>
                <option value="Salad">Salad</option>
                <option value="Pizza">Pizza</option>
                <option value="Drinks">Drinks</option>
                <option value="Dessert">Dessert</option>
                <option value="Soup">Soup</option>
              </select>
            </div>

            {/* price */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                {...register("price")}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control w-full">
          <label className="label">
                <span className="label-text">Recipe</span>
              </label>
          <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
          </div>
          <div className="mt-2">
          <input type="file" {...register("image")} className="file-input file-input-bordered w-full max-w-xs" />
          </div>

          <button className="btn bg-orange-400 mt-2">
          Add Item <FaUtensils></FaUtensils>
          
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
