import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/menu.scss';
import { IoClose } from "react-icons/io5";

const Menu = () => {
    const nav = useNavigate();
  return (
    <>
        <div className='menu'>
            <div className='close' onClick={()=> nav('/')}>
                <IoClose style={{fontSize:34}}/>
            </div>
          <ul>
            <li>
              <NavLink 
                to={'/'} 
                className='link'
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink 
                to={'/apropos'} 
                className='link'
              >
                Apropos
              </NavLink>
            </li>
            <li>
              <NavLink 
                to={'/services-produits'} 
                className='link'
              >
                Nos produits & nos services
              </NavLink>
            </li>
          
            {/* <li>
              <NavLink 
                to={'/blogs'} 
                className='link'
              >
                Blog
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink 
                to={'/store'} 
                className='link'
              >
                {translate('store')}
              </NavLink>
            </li> */}

            <li>
              <NavLink 
                to={'/way-to-give'} 
                className='link'
              >
                
              </NavLink>
            </li>
            {/* <li>
              <NavLink 
                to={'/donate'} 
                className='link'
              >
                {translate('donate')}
              </NavLink>
            </li> */}
          </ul>
        </div>
    </>
  )
}

export default Menu