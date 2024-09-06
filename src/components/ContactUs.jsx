import { useState } from "react";
import Swal from 'sweetalert2'
// import Nav from "./Nav";
// import Footer from "./Footer";


 const ContactUs = ()=>{

  const [fullname , setFullname] = useState('');
  const [mobile , setMobile] = useState('');
  const [email , setEmail] = useState('');
  const [message , setMessage] = useState('');

  const contact = (e)=>{
    e.preventDefault()
    Swal.fire({
      icon : "success",
      title : "Success",
      text : 'Thank you ! We will try to react you soon'

    
      
    })
  }

  return(
    

  <div>
    {
        <div style={{
          display :"flex",
          padding : 72
        }}>
          <img src="./images/Singup.svg" alt="" width="50%"/>

          <div style={{
            width : "50%",
          }}>
            
            <form onSubmit={contact}
             style={{
              display : "flex",
              flexDirection :"column",
              gap : 9,
              padding : "20px 60px",
              border : "1px solid gray"
             }}>

              
              <label>FullName</label>
              <input onChange={(e)=> setFullname((e.target.value))}
                type="text" 
                name="fullname"
                placeholder="Enter your name : "
                required

                style={{
                  border : "none",
                  border : "1px solid #ccc",
                  padding : 6,
                  borderRadius : 5
                }}
              />


              <label>Mobile No :</label>
              <input onChange={(e)=>setMobile(e.target.value)}
                type="number" 
                name="mobile"
                placeholder="Enter your name : "
                required

                style={{
                  border : "none",
                  border : "1px solid #ccc",
                  padding : 6,
                  borderRadius : 5
                }}
              />

              <label>Email</label>
              <input onChange={(e)=>setEmail(e.target.value)}
                type="email" 
                name="email"
                placeholder="Enter your email : "
                required

                style={{
                  border : "none",
                  border : "1px solid #ccc",
                  padding : 6,
                  borderRadius : 5
                }}
              />


              <label>Message : </label>
              <textarea onChange={(e)=>setMessage(e.target.value)}
                type="text" 
                name="message"
                placeholder="white your query or message here : "
                required

                style={{
                  border : "none",
                  border : "1px solid #ccc",
                  padding : 6,
                  borderRadius : 5
                }}
              />

                <button
                  style={{
                    padding : 10,
                    width : 100,
                    marginLeft : 6,
                    cursor : 'pointer',
                    background : "orange",
                    fontWeight : 'bold',
                    border : 'none',
                    borderRadius : 5,
                    margin : "20px auto"
                  }}
                >Submit</button>
              
            </form>
          </div>
        </div>


    }

   
  </div>
  )
 }
 export default ContactUs;