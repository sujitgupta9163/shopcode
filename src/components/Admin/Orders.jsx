
import { useState } from "react";
import Layout from "./Layout";
import Product from "./Product";
const Orders = ()=>{
     const [orders , setOrders] = useState([
         {
          orderId : "#try494843",
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          product : "asus",
          amount : 55000,
          date : '06/02/2024 4:49:49',
          status : "Pending"
         },

         {
          orderId : "#try494843",
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          product : "asus",
          amount : 55000,
          date : '06/02/2024 4:49:49',
          status : "Pending"
         },

         {
          orderId : "#try494843",
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          product : "asus",
          amount : 55000,
          date : '06/02/2024 4:49:49',
          status : "Pending"
         },

         {
          orderId : "#try494843",
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          product : "asus",
          amount : 55000,
          date : '06/02/2024 4:49:49',
          status : "Pending"
         },

         {
          orderId : "#try494843",
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          product : "asus",
          amount : 55000,
          date : '06/02/2024 4:49:49',
          status : "Pending"
         },


         {
          orderId : "#try494843",
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          product : "asus",
          amount : 55000,
          date : '06/02/2024 4:49:49',
          status : "Pending"
         },


         {
          orderId : "#try494843",
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          product : "asus",
          amount : 55000,
          date : '06/02/2024 4:49:49',
          status : "Pending"
         },


         {
          orderId : "#try494843",
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          product : "asus",
          amount : 55000,
          date : '06/02/2024 4:49:49',
          status : "Pending"
         },

         {
          orderId : "#try494843",
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          product : "asus",
          amount : 55000,
          date : '06/02/2024 4:49:49',
          status : "Pending"
         },


         {
          orderId : "#try494843",
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          product : "asus",
          amount : 55000,
          date : '06/02/2024 4:49:49',
          status : "Pending"
         },


         {
          orderId : "#try494843",
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          product : "asus",
          amount : 55000,
          date : '06/02/2024 4:49:49',
          status : "Pending"
         },


         {
          orderId : "#try494843",
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          product : "asus",
          amount : 55000,
          date : '06/02/2024 4:49:49',
          status : "Pending"
         },


         {
          orderId : "#try494843",
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          product : "asus",
          amount : 55000,
          date : '06/02/2024 4:49:49',
          status : "Pending"
         },

         {
          orderId : "#try494843",
          customerName : 'Sujit Kumar',
          email  : "sujit@gmail.com",
          mobile : '+91 9163165672',
          product : "asus",
          amount : 55000,
          date : '06/02/2024 4:49:49',
          status : "Pending"
         },

         
     ])
  return(
       <Layout>
            <div>
               <h1 className="text-xl font-semibold">Orders</h1>
                    <div className="mt-5">
                         <table className="w-full">
                              <thead>
                                   <tr className="text-white bg-[#6366F1]">
                                        <th className="py-3">OrderId</th>
                                        <th>Customer's name</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                        <th>Product</th>
                                        <th>Amount</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                   </tr>
                              </thead>
                              <tbody>
                                 {
                                   orders.map((items , index)=>(
                                        <tr className="text-center" key={index} style={{
                                             background : (index+1)%2 ===0 ? "#f1f5f9" : 'white'
                                        }}>
                                             <td className="py-3">{items.orderId}</td>
                                             <td>{items.customerName}</td>
                                             <td>{items.email}</td>
                                             <td>{items.mobile}</td>
                                             <td className="capitalize">{items.product}</td>
                                             <td> ₹ {items.amount.toLocaleString()}</td>
                                             <td>{items.date}</td>
                                             <td className="capitalize">
                                                  <select className="border p1 border-gray-200">
                                                       <option value="pending">Pending</option>
                                                       <option value="processing">Processing</option>
                                                       <option value="dispatched">Dispatched</option>
                                                       <option value="return">Return</option>

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
export default Orders;