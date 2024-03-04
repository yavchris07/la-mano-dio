import Banner from "./Banner";
import { NavLink } from 'react-router-dom';
import '../styles/banner.scss';
import { CgMenuRightAlt } from "react-icons/cg";
import log from "../assets/logo.png"

const NavBar = () => {
  return (
    <>
      {/* <Banner /> */}
      <nav>

        <div className="log">
          <img src={log} alt="" />
        </div>
        <div className='items'>
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

             
             
          </ul>
        </div>

        {/* <Header /> */}

        <div className='option'>
          <NavLink 
            to={'/menu'}
          >
            <CgMenuRightAlt style={{color:'white', fontSize:37}} />
          </NavLink>
        </div>
      </nav>
    </>
  )
}

export default NavBar