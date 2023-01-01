
import {BrowserRouter,Routes,Route} from 'react-router-dom'
//components
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Contact from './pages/Contact'
import Category from './pages/Category'
import Details from './pages/Details'
import User from './pages/User'
import Checkout from './pages/Checkout'
//context
import Context from './context'

function App() {
  
  return (
    <Context>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/contact' element={<Contact/>}/>

          <Route path='/:type' element={<Category/>}/>
          <Route path='/:type/:id' element={<Details/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='/cart' element={<Checkout/>}/>
        </Routes>
      </BrowserRouter>
    </Context>
  )
}

export default App
