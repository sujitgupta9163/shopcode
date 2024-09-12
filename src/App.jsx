import 'remixicon/fonts/remixicon.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Admin from './components/Admin/Layout';
import NotFound from './components/Admin/NotFound';
import Product from './components/Admin/Product';
import Orders from './components/Admin/Orders'
import Dashbord from './components/Admin/Dashbord';
import Customer from './components/Admin/Customer';
import Payments from './components/Admin/Payments';
import Settings from './components/Admin/Settings';
import Admine from './components/Admin';
import Home from './components/Home';
import AllProducts from './components/AllProducts';
import Category from './components/Category';
// import ContactUs from './components/ContactUs';




const App = ()=>{
  return(
   <BrowserRouter>
   <Routes>
    {/* <Route path='/admin'  element = {<Admin/>}/> */}

    <Route path='/' element = {<Home/>}/>
    <Route path='/product' element = {<AllProducts/>}/>
    <Route path='category' element ={<Category/>}/>
    {/* <Route path='/contact-us' element ={<ContactUs/>}/> */}
    

    <Route path='/admin'>
      <Route path='products' element={<Product/>}/>
      <Route path='orders' element = {<Orders/>}/>
      <Route path='dashbord' element = {<Dashbord/>}/>
      <Route path='customer' element = {<Customer/>}/>
      <Route path='payments' element = {<Payments/>}/>
      <Route path='settings' element = {<Settings/>}/>
      <Route path='auth' element = {<Admine/>}/>
   
    </Route>
    
   <Route path = '*' element = {<NotFound/>}/>
    

   </Routes>
   </BrowserRouter>
  )
}
export default App;