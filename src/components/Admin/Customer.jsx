
import { useState } from "react";
import Layout from "./Layout";
import Product from "./Product";
const Customer = ()=>{
     const [customers , setCustomers] = useState([
         {
          // orderId : "#try494843",
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          // product : "asus",
          // amount : 55000,
          date : '06/02/2024 4:49:49',
          address : "siwan bihar"
          // status : "Pending"
         },

         {
          // orderId : "#try494843",
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          // product : "asus",
          // amount : 55000,
          date : '06/02/2024 4:49:49',
          address : "siwan bihar"
          // status : "Pending"
         },


         {
          // orderId : "#try494843",
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          // product : "asus",
          // amount : 55000,
          date : '06/02/2024 4:49:49',
          address : "siwan bihar"
          // status : "Pending"
         },


         {
          // orderId : "#try494843",
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          // product : "asus",
          // amount : 55000,
          date : '06/02/2024 4:49:49',
          address : "siwan bihar"
          // status : "Pending"
         },


         {
          // orderId : "#try494843",
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          // product : "asus",
          // amount : 55000,
          date : '06/02/2024 4:49:49',
          address : "siwan bihar"
          // status : "Pending"
         },

         {
          // orderId : "#try494843",
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          // product : "asus",
          // amount : 55000,
          date : '06/02/2024 4:49:49',
          address : "siwan bihar"
          // status : "Pending"
         },

         {
          // orderId : "#try494843",
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          // product : "asus",
          // amount : 55000,
          date : '06/02/2024 4:49:49',
          address : "siwan bihar"
          // status : "Pending"
         },


         {
          // orderId : "#try494843",
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          // product : "asus",
          // amount : 55000,
          date : '06/02/2024 4:49:49',
          address : "siwan bihar"
          // status : "Pending"
         },


         {
          // orderId : "#try494843",
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          // product : "asus",
          // amount : 55000,
          date : '06/02/2024 4:49:49',
          address : "siwan bihar"
          // status : "Pending"
         },


         {
          // orderId : "#try494843",
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          
          // product : "asus",
          // amount : 55000,
          date : '06/02/2024 4:49:49',
          address : "siwan bihar"
          // status : "Pending"
         },

         {
          // orderId : "#try494843",
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          // product : "asus",
          // amount : 55000,
          date : '06/02/2024 4:49:49',
          address : "siwan bihar"
          // status : "Pending"
         },

       

         
     ])
  return(
       <Layout>
            <div>
               <h1 className="text-xl font-semibold">Customer's</h1>
                    <div className="mt-5">
                         <table className="w-full">
                              <thead>
                                   <tr className="text-white font-semibold bg-[#6366F1] text-left">
                                      
                                        <th className="p-4">Customer's name</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                        <th>Date</th>
                                        <th>Address</th>
                                     
                                   </tr>
                              </thead>
                              <tbody>
                                 {
                                   customers.map((items , index)=>(
                                        <tr  key={index} style={{
                                             background : (index+1)%2 ===0 ? "#f1f5f9" : 'white'
                                        }}>
                                             <div className="flex pl-2">
                                                  <img src="/images/user.png" className="w-10 h-10 rounded-full mt-3"/>
                                              <td className="p-3 captitalize">
                                                  <div className="flex flex-col justify-center">
                                                      <span className="font-semibold">{items.customerName}</span>
                                                      <small className="text-gray-500"> {items.date}</small>
                                                  </div>
                                                 
                                             </td>
                                             </div>
                                             <td>{items.email}</td>
                                             <td>{items.mobile}</td>
                                             <td>{items.date}</td>
                                             <td>{items.address}</td>
                                          
                                        </tr>
                                   ))
                                 }
                              </tbody>
                              
                         </table>
                    </div>
            </div>
       </Layout>
  )
}
export default Customer;