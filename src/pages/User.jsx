import Login from '../components/Login'
import Register from '../components/Register'
import Loading from '../components/Loading'
import History from '../components/History'
import '../styles/User.css'

import {useContextData} from '../context'
import { useState } from 'react'
const User = () => {
  const [activeNav,setActiveNav] = useState('login')
  const {loading,validUser} = useContextData()
  return (
    <div className='wrapper'>
    {loading ?
      <Loading /> :
      <>
        {
          validUser.id ?
            <History />
          :
            <div className='user-container'>
                <nav>
                  <div className="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                    <button className={`nav-link ${activeNav === 'login' ? 'active' : ''}`} id="nav-login-tab" data-bs-toggle="tab" data-bs-target="#nav-login" type="button" role="tab" aria-controls="nav-login" aria-selected={activeNav === 'login' ? 'true' : 'false'} onClick={()=>setActiveNav("login")}>Login</button>
                    <button className={`nav-link ${activeNav === 'register' ? 'active' : ''}`} id="nav-register-tab" data-bs-toggle="tab" data-bs-target="#nav-register" type="button" role="tab" aria-controls="nav-register" aria-selected={activeNav === 'register' ? 'true' : 'false'} onClick={()=>setActiveNav("register")}>Register</button>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div className={`tab-pane fade ${activeNav === 'login' ? 'show active' : ''}`} id="nav-login" role="tabpanel" aria-labelledby="nav-login-tab" tabIndex="0">
                    <Login />
                  </div>
                  <div className={`tab-pane fade ${activeNav === 'register' ? 'show active' : ''}`} id="nav-register" role="tabpanel" aria-labelledby="nav-register-tab" tabIndex="0">
                    <Register/>
                  </div>
                </div>
            </div> 
        } 
      </> 
    }
    </div>
  )
}

export default User