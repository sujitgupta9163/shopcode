
import { useState } from "react";
import Layout from "./Layout";

const Payments = ()=>{
     const [payments , setPayments] = useState([
         {
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          productName : "asus",
          amount : 5000,
          productId : '#f5678768',
          paymentMode : 'Pending',
          date : '06/02/2024 4:49:49',
          address : "siwan bihar"
         },

         {
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          productName : "asus",
          amount : 5000,
          productId : '#f5678768',
          paymentMode : 'Pending',
          date : '06/02/2024 4:49:49',
          address : "siwan bihar"
         },
          
         {
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          productName : "asus",
          amount : 5000,
          productId : '#f5678768',
          paymentMode : 'Pending',
          date : '06/02/2024 4:49:49',
          address : "siwan bihar"
         },
         
         {
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          productName : "asus",
          amount : 5000,
          productId : '#f5678768',
          paymentMode : 'Pending',
          date : '06/02/2024 4:49:49',
          address : "siwan bihar"
         },
         
         {
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          productName : "asus",
          amount : 5000,
          productId : '#f5678768',
          paymentMode : 'Pending',
          date : '06/02/2024 4:49:49',
          address : "siwan bihar"
         },


         {
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          productName : "asus",
          amount : 5000,
          productId : '#f5678768',
          paymentMode : 'Pending',
          date : '06/02/2024 4:49:49',
          address : "siwan bihar"
         },

         {
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          productName : "asus",
          amount : 5000,
          productId : '#f5678768',
          paymentMode : 'Pending',
          date : '06/02/2024 4:49:49',
          address : "siwan bihar"
         },

         {
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          productName : "asus",
          amount : 5000,
          productId : '#f5678768',
          paymentMode : 'Pending',
          date : '06/02/2024 4:49:49',
          address : "siwan bihar"
         },

         {
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          productName : "asus",
          amount : 5000,
          productId : '#f5678768',
          paymentMode : 'Pending',
          date : '06/02/2024 4:49:49',
          address : "siwan bihar"
         },

         {
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          productName : "asus",
          amount : 5000,
          productId : '#f5678768',
          paymentMode : 'Pending',
          date : '06/02/2024 4:49:49',
          address : "siwan bihar"
         },

         {
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          productName : "asus",
          amount : 5000,
          productId : '#f5678768',
          paymentMode : 'Pending',
          date : '06/02/2024 4:49:49',
          address : "siwan bihar"
         },

         {
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          productName : "asus",
          amount : 5000,
          productId : '#f5678768',
          paymentMode : 'Pending',
          date : '06/02/2024 4:49:49',
          address : "siwan bihar"
         },


        
       

         
     ])
  return(
       <Layout>
            <div>
               <h1 className="text-xl font-semibold">Payment's</h1>
                    <div className="mt-5">
                         <table className="w-full">
                              <thead>
                                   <tr className="text-white font-semibold bg-[#6366F1] text-left">
                                      
                                        <th className="p-4">Customer's name</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                        <th>ProductName</th>
                                        <th>Amount</th>
                                        <th>ProductId</th>
                                        <th>Date</th>
                                        <th>Address</th>
                                        <th>PaymentMode</th>
                                     
                                   </tr>
                              </thead>
                              <tbody>
                                 {
                                   payments.map((items , index)=>(
                                        <tr  key={index} style={{
                                             background : (index+1)%2 ===0 ? "#f1f5f9" : 'white'
                                        }}>
                                             <div className="flex pl-2">
                                                  <img src="/images/user.png" className="w-10 h-10 rounded-full mt-3"/>
                                              <td className="p-3 capitalize">
                                                  <div className="flex flex-col justify-center">
                                                      <span className="font-semibold">{items.customerName}</span>
                                                      <small className="text-gray-500"> {items.date}</small>
                                                  </div>
                                                 
                                             </td>
                                             </div>
                                             <td>{items.email}</td>
                                             <td>{items.mobile}</td>
                                             <td className="capitalize">{items.productName}</td>
                                             <td>₹/Rs./ {items.amount.toLocaleString()}</td>
                                             <td>{items.productId}</td>
                                             <td>{items.date}</td>
                                             <td>{items.address}</td>

                                             <td className="capitalize">
                                                  <select className="border p1 border-gray-200">
                                                       <option value="pending">Pending</option>
                                                       <option value="processing">Online</option>
                                                       <option value="offlime">Offline</option>
                                                       

                                                  </select>
                                             </td>
                                          
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
export default Payments;