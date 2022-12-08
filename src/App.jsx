
import {BrowserRouter,Routes,Route} from 'react-router-dom'

//components
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Contact from './pages/Contact'
import Category from './pages/Category'
import Details from './pages/Details'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/contact' element={<Contact/>}/>

        <Route path='/:type' element={<Category/>}/>
        <Route path='/:type/:id' element={<Details/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
