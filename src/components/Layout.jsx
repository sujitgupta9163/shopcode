import { useState } from "react";
import { Link , useNavigate} from "react-router-dom";


const Layout = ({children})=>{

  const navigate = useNavigate();

  const [open , setOpne] = useState(false)
  const menus = [
    {
      label : "Home",
      href : "/",
      image : <i className="ri-home-4-line"></i>
    },

    {
      label : "Products",
      href : "/product"
    },

    {
      label : "Category",
      href : "/category"
    },

    {
      label : "Contact us",
      href : "/contact-us"
    },


  ]

  const mobileLink = (href)=>{
    setOpne(false)
    navigate(href)
   

  }

  return(
    <div>
        <nav className="sticky top-0 left-0 shadow-lg ">
            <div className="md:w-full  mx-auto flex items-center justify-between bg-[#02001A]">
              <img 
                src="/images/logo.jpg" 
                  className="w-20 rounded-full"
                />

                <button className="md:hidden" onClick={()=>setOpne(!open)}>
                <i className="ri-menu-line text-4xl text-white hover:bg-orange-500 mr-5"></i>
                </button>

                <ul className="md:flex  pr-4 hidden">

                    {
                      menus.map((items , index)=>(
                        <li key={index} >
                          <Link 
                            to={items.href}
                            className="block py-2  text-white text-md font-semibold 
                                text-center 
                                hover:bg-orange-500
                                 hover:rounded-lg
                                w-[100px]"
                            >
                            {items.label}
                          </Link>
                          {/* <a>{items.label}</a> */}
                        </li>
                      ))
                    }
                    <Link  
                        to="/login"
                     className="block py-2  text-white text-md font-semibold text-center hover:bg-orange-500 hover:rounded-lg w-[100px]"
                     
                      >
                        Login
                    </Link>

                    <Link  
                        to="/login"
                     className="block py-2  text-white text-md font-semibold text-center hover:bg-orange-500 hover:rounded-lg w-[100px]"
                      >Signup
                    </Link>
                </ul>
            </div>
        </nav>
        {children}
        <footer className="bg-[#02001A] shadow  py-16">
          <div className="w-10/12 mx-auto grid md:grid-cols-4 gap-6 shadow-3xl">
                <div className="w-100 h-100 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-center pl-2">
                  <h1 className="text-white text-2xl font-semibold">Brand Details</h1>
                  <p className="text-white text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate harum non qui explicabo nesciunt iste voluptatibus maiores, suscipit, ad, at architecto  <br/>inventore sed. Libero possimus voluptate saepe <br/> repellendus perspiciatis temporibus?</p>
                  <img 
                     src="/images/logo.jpg" 
                     className="w-20 rounded-full"
                 />
                </div>

                <div className="w-100 h-100 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg  pl-5 ">
                  <h1 className="text-white text-2xl font-semibold">Website Links</h1>
                  <ul className="space-y-4 py-4 text-white font-semibold text-gray-300">
                    {
                      menus.map((items , index)=>(
                          <li key={index}>
                            <Link to={items.href}>{items.label}</Link>
                          </li>
                      ))
                    }
                    <li >
                       <Link to='/login'>Login</Link>
                    </li>
                    <li>
                        <Link to='/singup'>Singup</Link>
                    </li>
                    
                  </ul>
                </div>


                <div className="w-100 h-100 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg  pl-5 ">
                  <h1 className="text-white text-2xl font-semibold">Social Media</h1>
                  <ul className="space-y-4 py-4 text-white font-semibold text-gray-300 ">
                   
                    <li className="flex gap-[3px]">
                      <i className="ri-facebook-circle-line"></i>
                      <Link to='/'>Facebook</Link>
                    </li>

                    <li className="flex gap-[3px]">
                      <i className="ri-youtube-line"></i>
                      <Link to='/'>Youtube</Link>
                    </li>

                    <li className="flex gap-[3px]">
                      <i className="ri-twitter-line"></i>
                      <Link to='/'>Twitter</Link>
                    </li>

                    <li className="flex gap-[3px]">
                      <i class="ri-instagram-line"></i>
                      <Link to='/'>Instagram</Link>
                    </li>

                    <li className="flex gap-[3px]">
                      <i class="ri-linkedin-box-fill"></i>
                      <Link to='/'>Linkedin</Link>
                    </li>

                    <li className="flex gap-[3px]">
                      <i class="ri-github-fill"></i>
                      <Link to='/'>Github</Link>
                    </li>
                    
                  </ul>
                </div>


                <div className="w-100 h-100 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg  pl-5">
                  <h1 className="text-white text-2xl font-semibold">Contact us</h1>
                   <div className="flex flex-col gap-3 mt-3">
                      <input 
                          type="text"
                          name="fullname"
                          placeholder="Enter Your Name"
                          required

                          className="bg-white w-11/12 rounded p-[7px] text-gray-800"
                        />

                        <input 
                          type="email"
                          name="email"
                          placeholder="Enter Your email"
                          required

                          className="bg-white w-11/12 rounded p-[7px] text-gray-800"
                        />

                        <input 
                          type="password"
                          name="password"
                          placeholder="Enter Your password"
                          required

                          className="bg-white w-11/12 rounded p-[7px] text-gray-800"
                        />

                        <textarea 
                          required
                          name="message"
                          placeholder="Enter Your Message"
                          className="bg-white w-11/12 rounded p-[7px]"
                          
                        >

                        </textarea>

                   </div>
                   <button className="bg-white py-[6px] px-[10px] mt-2 mb-5 rounded font-semibold  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Submit</button>
                </div>

          </div>
        </footer>



           
          
        <aside className=" md:hidden bg-[#02001A] fixed top-0 lef-0 w-[250px] h-full z-10 shadow-lg overflow-hidden"
        style={{
          
          width : (open ? 180 : 0),
          transition : '0.3s'
        }}
        >
          <div className="flex flex-col gap-8 p-12 mt-10 ">
            {
              menus.map((items , index)=>(
                <button onClick={()=>mobileLink(items.href)} className="text-white text-md font-semibold" key={index}>
                  {
                    items.label
                  }
                </button>
              ))
            }
          </div>
        </aside>
                    
        
    </div>
  )
}
export default Layout;