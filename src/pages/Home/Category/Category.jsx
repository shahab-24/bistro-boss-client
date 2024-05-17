import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/assets/home/slide1.jpg'
import slide2 from '../../../assets/assets/home/slide2.jpg'
import slide3 from '../../../assets/assets/home/slide3.jpg'
import slide4 from '../../../assets/assets/home/slide4.jpg'
import slide5 from '../../../assets/assets/home/slide5.jpg'
// import slide6 from '../../../assets/assets/home/slide6.jpg'



import 'swiper/css';
import 'swiper/css/pagination';

import 'swiper/css';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
const Category = () => {
  return (
    <>
   <section>
   <SectionTitle subHeading={'from 10 am to 11 am'}
   heading={"order online"}>

   </SectionTitle>
   <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mb-24"
    >
      <SwiperSlide><img src={slide1} alt="" />
      <p className='text-4xl text-center uppercase -mt-16 text-white'>Salads</p></SwiperSlide>
      <SwiperSlide><img src={slide2} alt="" /><p className='text-4xl text-center uppercase -mt-16 text-white'>pizzas</p></SwiperSlide>
      <SwiperSlide><img src={slide3} alt="" /><p className='text-4xl text-center uppercase -mt-16 text-white'>Soups</p></SwiperSlide>
      <SwiperSlide><img src={slide4} alt="" /><p className='text-4xl text-center uppercase -mt-16 text-white'>dessert</p></SwiperSlide>
      <SwiperSlide><img src={slide5} alt="" /><p className='text-4xl text-center uppercase -mt-16 text-white'>Salads</p></SwiperSlide>
      {/* <SwiperSlide><img src={slide6} alt="" /></SwiperSlide> */}
      {/* <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide> */}
    </Swiper>
   </section>
  </>
  );
};

export default Category;