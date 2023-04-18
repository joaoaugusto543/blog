import './NavBar.css'
import Logo from '../../img/logo.svg'
import {NavLink,Link} from 'react-router-dom'

function NavBar(){
  return (
    <header>
      <Link to='/' className='logo'>
        <img src={Logo} alt="Blog Codar"/>
      </Link>
      <nav>
        <ul className="navbar">
          <li><NavLink className='nav-link' to='/'>Home</NavLink></li>
          <li className="nav-link">Categorias</li>
          <li><NavLink className='nav-link' to='/About'>Sobre</NavLink></li>
          <li><NavLink className='nav-link' to='/contacts'>Contato</NavLink></li>
        </ul>
      </nav>
  </header>
  )
}


export default NavBar