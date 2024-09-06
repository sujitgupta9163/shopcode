import { useState } from "react";

import Layout from "./Layout";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Navigation , Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Home = ()=>{

  const [products , setProdcts] =useState([
    {
      title : 'New blue shirts men',
      price : 2000,
      discount : 15,
      thumbnail : '/products/a.jpg'
    },

    {
      title : 'New blue shirts men',
      price : 2000,
      discount : 15,
      thumbnail : '/products/b.jpg'
    },

    {
      title : 'New blue shirts men',
      price : 2000,
      discount : 15,
      thumbnail : '/products/c.jpg'
    },

    {
      title : 'New blue shirts men',
      price : 2000,
      discount : 15,
      thumbnail : '/products/d.jpg'
    },

    {
      title : 'New blue shirts men',
      price : 2000,
      discount : 15,
      thumbnail : '/products/e.jpg'
    },


    {
      title : 'New blue shirts men',
      price : 2000,
      discount : 15,
      thumbnail : '/products/f.jpg'
    },

    {
      title : 'New blue shirts men',
      price : 2000,
      discount : 15,
      thumbnail : '/products/g.jpg'
    },

    {
      title : 'New blue shirts men',
      price : 2000,
      discount : 15,
      thumbnail : '/products/h.jpg'
    },

    {
      title : 'New blue shirts men',
      price : 2000,
      discount : 15,
      thumbnail : '/products/i.jpg'
    },

    {
      title : 'New blue shirts men',
      price : 2000,
      discount : 15,
      thumbnail : '/products/j.jpg'
    },

    {
      title : 'New blue shirts men',
      price : 2000,
      discount : 15,
      thumbnail : '/products/k.jpg'
    },

    {
      title : 'New blue shirts men',
      price : 2000,
      discount : 15,
      thumbnail : '/products/l.jpg'
    },


    {
      title : 'New blue shirts men',
      price : 2000,
      discount : 15,
      thumbnail : '/products/l.jpg'
    },

    {
      title : 'New blue shirts men',
      price : 2000,
      discount : 15,
      thumbnail : '/products/l.jpg'
    },


    {
      title : 'New blue shirts men',
      price : 2000,
      discount : 15,
      thumbnail : '/products/k.jpg'
    },

  
  ])
  return(
    <Layout>
       <div>
          <header>
              <Swiper
                    pagination={true}
                     navigation={true} modules={[Navigation , Pagination]}
                     
                    // spaceBetween={50}
                    // slidesPerView={3}
                    slidesPerView={1}
                    
                
               >
                  <SwiperSlide><img src="/images/1.jpg"  /></SwiperSlide>
                  <SwiperSlide><img src="/images/2.jpg"  /></SwiperSlide>
                  <SwiperSlide><img src="/images/3.jpg"  /></SwiperSlide>
                  <SwiperSlide><img src="/images/4.jpg"  /></SwiperSlide>
                  <SwiperSlide><img src="/images/5.jpg"  /></SwiperSlide>
                  <SwiperSlide><img src="/images/6.png"  /></SwiperSlide>
                  <SwiperSlide><img src="/images/7.png"  /></SwiperSlide>
                  <SwiperSlide><img src="/images/8.jpg"  /></SwiperSlide>
                  <SwiperSlide><img src="/images/9.jpg"  /></SwiperSlide>
                  
              </Swiper>
          </header>

          <div className="md:p-16 p-8" >
            <h1 className="text-3xl font-semibold text-center">Latest Product</h1>
            <p className="text-center w-7/12 mx-auto mb-6 mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, doloremque tempora rerum dolor quasi, natus vel quisquam qui quia consequuntur reiciendis iusto obcaecati sit repellendus,  </p>
              <div className="md:w-11/12 mx-auto grid md:grid-cols-5 gap-8 ">
                  {
                    products.map((items , index)=>(
                      <div key={index} className="bg-white shadow-lg border">
                          <img src={items.thumbnail} />

                          <div className="p-4 block ">
                            <h1 className="text-lg font-semibold">{items.title}</h1>

                              <div className="space-x-2">
                                <label className="text-lg font-semibold"> ₹ {items.price-(items.price*items.discount)/100}</label>
                                <del> ₹ {items.price}</del>
                                <label className="text-gray-600">({items.discount}%)</label>
                              </div>
                              <button className=" text-lg font-semibold bg-orange-500 text-white md:w-full w-3/12 py-1 rounded mt-2">Buy Now</button>
                          </div>
                      </div>
                    ))
                  }
              </div>
          </div>
      </div>
    </Layout>
  )
}
export default Home;