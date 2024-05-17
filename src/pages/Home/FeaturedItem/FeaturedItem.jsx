import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featureImg from '../../../assets/assets/home/featured.jpg'
// import FeaturedItem from '../FeaturedItem/FeaturedItem.css'
import '../FeaturedItem/FeaturedItem.css'

const FeaturedItem = () => {
  return (
    <section className="Featured-Item bg-fixed text-white mb-12">
    <SectionTitle heading={'Featured Item'} subHeading={'check it out'}>

    </SectionTitle>
    <div className="flex justify-center bg-slate-600 bg-opacity-60 items-center gap-4 py-8 px-16">
    <div>
      <img src={featureImg} alt="" />
    </div>
    <div className="space-y-4 ml-10">
    <p>April 25, 2021</p>
      <p className="uppercase">Where can i get some?</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vero sapiente maxime recusandae dolore quidem ipsam, architecto perferendis, enim eum fugit similique! Aliquam harum eaque perspiciatis numquam consequatur, magnam, explicabo sit minus tempora voluptatem omnis porro delectus quaerat dolores, alias pariatur ex amet. Repudiandae ullam perspiciatis maxime id consequatur recusandae!
      </p>
      <button className="btn btn-outline border-0 border-b-4">Order Now</button>
    </div>
      
    </div>
    </section>
  );
};

export default FeaturedItem;