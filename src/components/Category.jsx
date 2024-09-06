
import Layout from './Layout'
import { useState } from 'react';


const Category = ()=>{

  const [Category , setCategory] = useState([
    {
      title : 'Electronics'
    },


    {
      title : 'Fashion'
    },

    {
      title : 'Mobile'
    },

    {
      title : 'Men`s'
    },

    {
      title : 'Women`s'
    },

    {
      title : 'Electronics'
    },

    {
      title : 'Fashion'
    },

    {
      title : 'Men`s'
    },

  ])
  return(
      <Layout>
         <div className='md:p-16 p-8'>
              <div className='md:w-10/12 mx-auto grid md:grid-cols-4 md:gap-16 gap-8 '>
                  {
                    Category.map((items , index)=>(
                      <div key={index} className='bg-white shadow-lg  border flex flex-col items-center justify-center gap-2 p-3 rounded-md  hover:bg-orange-500 hover:text-white'>
                          <i className="ri-menu-search-line text-5xl "></i>
                          <h1 className='text-xl font-bold'>{items.title}</h1>
                        
                      </div>
                    ))
                  }
              </div>
        </div>
      </Layout>
  )
}
export default Category;