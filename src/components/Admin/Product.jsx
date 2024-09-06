import { useState } from 'react';
import Layout from './Layout'
const Product = ()=>{
  const [products , setProducts] = useState([
    {
      title : 'Men`s shirt blue denim',
      description : 'I am related to men`s products',
      price : 2000,
      discount : 15,
      image : '/products/a.jpg'
    },

    {
      title : 'Men`s shirt blue denim',
      description : 'I am related to men`s products',
      price : 2000,
      discount : 15,
      image : '/products/b.jpg'
    },

    {
      title : 'Men`s shirt blue denim',
      description : 'I am related to men`s products',
      price : 2000,
      discount : 15,
      image : '/products/c.jpg'
    },

    {
      title : 'Men`s shirt blue denim',
      description : 'I am related to men`s products',
      price : 2000,
      discount : 15,
      image : '/products/d.jpg'
    },

    {
      title : 'Men`s shirt blue denim',
      description : 'I am related to men`s products',
      price : 2000,
      discount : 15,
      image : '/products/e.jpg'
    },

    {
      title : 'Men`s shirt blue denim',
      description : 'I am related to men`s products',
      price : 2000,
      discount : 15,
      image : '/products/f.jpg'
    },


    {
      title : 'Men`s shirt blue denim',
      description : 'I am related to men`s products',
      price : 2000,
      discount : 15,
      image : '/products/g.jpg'
    },


    {
      title : 'Men`s shirt blue denim',
      description : 'I am related to men`s products',
      price : 2000,
      discount : 15,
      image : '/products/h.jpg'
    },

    {
      title : 'Men`s shirt blue denim',
      description : 'I am related to men`s products',
      price : 2000,
      discount : 15,
      image : '/products/i.jpg'
    },


    {
      title : 'Men`s shirt blue denim',
      description : 'I am related to men`s products',
      price : 2000,
      discount : 15,
      image : '/products/j.jpg'
    },




    {
      title : 'Men`s shirt blue denim',
      description : 'I am related to men`s products',
      price : 2000,
      discount : 15,
      image : '/products/k.jpg'
    },

    {
      title : 'Men`s shirt blue denim',
      description : 'I am related to men`s products',
      price : 2000,
      discount : 15,
      image : '/products/l.jpg'
    },


  ])
  return(
   <Layout>
        <div>
          <h1 className='text-xl font-semibold'>Products</h1>
            <div className='grid md:grid-cols-4 gap-6'>
                {
                  products.map((items , index)=>(
                    <div key={index} className='bg-white rounded-md shadow-lg flex flex-col'>
                      <img 
                        src={items.image}
                        className='rounded-t-lg w-full  object-cover'
                        />

                        <div className='px-2 mt-2'>
                          <h1 className='text-md font-semibold'>{items.title}</h1>
                          <p className='text-gray-500'>{items.description.slice(0,30)}...</p>
                        </div>

                        <div className='text-gray-500 px-2 pb-2'>
                          <label> ₹ {items.price-(items.price*items.discount)/100}</label>
                          <del className='px-2 font-semibold text-black'> ₹ {items.price}</del>
                          <label>({items.discount}%Off)</label>
                        </div>
                    </div>
                    
                  ))
                }
            </div>
        </div>
   </Layout>
  )
}
export default Product;