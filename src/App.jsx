import 'remixicon/fonts/remixicon.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Admin from './components/Admin/Layout';
import NotFound from './components/NotFound';
import Products from './components/Admin/Product';
import Orders from './components/Admin/Orders'


const App = ()=>{
  return(
   <BrowserRouter>
   <Routes>
    {/* <Route path='/admin'  element = {<Admin/>}/> */}

    <Route path='/admin'>
      <Route path='products' element={<Products/>}/>
      <Route path='orders' element = {<Orders/>}/>
    </Route>
    
   <Route path = '*' element = {<NotFound/>}/>
    

   </Routes>
   </BrowserRouter>
  )
}
export default App;