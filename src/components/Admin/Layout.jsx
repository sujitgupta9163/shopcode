import { useState } from "react";
import { Link ,  useLocation } from "react-router-dom";



const Layout = ({children})=>{

  const [size , setSize] = useState(280);
  const [mobilesize , setMobileSize] = useState(0);
  const [accountMenu , setAccountMenu]= useState(false)
  const location = useLocation() ;
 

  const menus = [
    {
      lable : 'Dashbord',
      icon :<i className="ri-settings-2-line mr-2"></i>,
      link :  '/admin/dashbord'
    },

    {
      lable : 'Customers',
      icon : <i className="ri-user-line mr-2"></i>,
      link :  '/admin/customer'
    },

    {
      lable : 'Products',
      icon : <i className="ri-shopping-cart-line mr-2"></i>,
      link :  '/admin/products'
    },

    {
      lable : 'Orders',
      icon :  <i className="ri-shape-line mr-2"></i>,
      link :  '/admin/orders'
    },

    {
      lable : 'Payments',
      icon : <i className="ri-money-rupee-circle-line mr-2"></i>,
      link :  '/admin/payments'
    },

    {
      lable : 'Settings',
      icon :<i className="ri-settings-2-line mr-2"></i>,
      link :  '/admin/settings'
    },

   

    // {
    //   lable : 'Logout',
    //   icon : <i className="ri-logout-circle-r-line mr-2"></i>,
    //   link :  '/admin/logout'
    // },
  ]
  return(
    <>
    {/* Desktop */}
    <div className="md:block hidde">
      <aside 
            className="w-[280px] bg-indigo-500 fixed top-0 left-0 h-full overflow-hidden "
            style={{
              width : mobilesize,
              transition : '0.3s'
            }}
      >
        <div className="flex flex-col mt-5 gap-3">
            {
              menus.map((items , index)=>(
                <Link 
                key={index} 
                to={items.link}
                className=" text-white font-semibold text-[15.5px] p-2 bg-[#6366F1] 
                border p1 border-gray-200 rounded-2xl pl-5 mx-3 hover:bg-white hover:text-black " style={{
                  background : (location.pathname === items.link)? 'white' : '',
                  color : (location.pathname === items.link)? 'black' : ''
                }}>
               {
                items.icon
               }
                {items.lable}</Link>
              ))
            }

          
            <button    className=" text-white font-semibold text-[15.5px] p-2 bg-[#6366F1] 
                border p1 border-gray-200 rounded-2xl pl-5 mx-3 hover:bg-white hover:text-black text-left">
               <i className="ri-logout-circle-r-line mr-2"></i>
                Logout
            </button>
            
        </div>

      </aside>
      <section className="bg-gray-100 h-screen ml-[280px]"

            style={{
              marginLeft : mobilesize,
              transition : '0.3s'
            }}
      >
        {/* <h1>Hello</h1> */}

          <nav className="bg-white p-6 shadow flex items-center justify-between sticky top-0 left-0">
             <div className="flex gap-4 items-center">

                  <button onClick={()=>setMobileSize(mobilesize === 280 ? 0 : 280)} className="bg-gray-50 hover:bg-indigo-500 hover:text-white w-8 h-8">
                 <i className="ri-menu-2-line text-xl "></i>
                  </button>

                 <h1 className="text-md font-semibold">Shopcode</h1>
             </div>

             <div>
                <button className="relative">
                   <img 
                   src="/images/user.png" 
                   className="w-10 h-10" 
                   onClick={()=>setAccountMenu(!accountMenu)}/>
                 
                 {
                   accountMenu && <div className="absolute top-18 right-0 bg-white p-6 w-[250px] shadow-lg">
                   <div>
                     <h1 className="text-lg font-semibold">Mr.Sujit</h1>
                     <p className="text-gray-500">Sujit@gmail.com</p>
                     <div className="h-px bg-gray-300 my-4"></div>

                    
                   </div>
                </div>
                 } 
                   
                </button>
             </div>
          </nav>
         <div className="p-6">
          {
            children
          }
         </div>
      </section>

    </div>

    {/* mobile */}
   
    </>

  )
}
export default Layout;