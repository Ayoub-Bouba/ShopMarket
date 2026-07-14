import React from 'react';
import Product from './Product';
import './slideProduct.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

function SlideProduct({ data, title }) {
  return (
    <div className='slide_Product slide'>

      <div className="container">
        <div className="top_slide">
          <h2>{title}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, qui.</p>
        </div>

        <Swiper
          slidesPerView={5}
          
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={true} modules={[Pagination, Autoplay]} className="mySwiper"
        >
          {data.map((items) => {
             return(
                <SwiperSlide><Product items={items} /></SwiperSlide>

          )
      
          })}


        </Swiper>


      </div>
    </div>
  )
}

export default SlideProduct