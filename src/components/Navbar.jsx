import {NavLink,Link} from 'react-router-dom'
//components
import CartWidget from './CartWidget'
import Brand from './Brand'
import UserWidget from './UserWidget'
//styles
import '../styles/Navbar.css'
const NavBar = _ => {
  return (
    <>
      <div className='navbar-custom'>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><Brand/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/games">Games</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/hardware">Hardware</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/figures">Figures</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                </ul>
                <form className="icons" role="search">
                    <CartWidget/>
                    <UserWidget/>
                </form>
                </div>
            </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;