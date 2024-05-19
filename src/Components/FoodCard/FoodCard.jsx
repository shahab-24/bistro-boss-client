

const FoodCard = ({item}) => {
  const { name, image, price, recipe} = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src={image} alt="Shoes" /></figure>
    <p className="absolute bg-slate-900 px-4 right-0 mr-4 mt-4 text-white">${price}</p>
    <div className="card-body">
      <h2 className="card-title">{name}</h2>
      <p>{recipe}</p>
      <div className="card-actions justify-center">
        <button className="btn btn-outline border-0 bg-slate-100 border-b-4 hover:border-orange-400 hover:text-orange-400 hover:bg-slate-200 uppercase">Add to Cart</button>
      </div>
    </div>
  </div>
  );
};

export default FoodCard;