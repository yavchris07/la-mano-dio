import Banner from "./Banner";
import { NavLink } from 'react-router-dom';
import '../styles/banner.scss';

const NavBar = () => {
  return (
    <>
      <Banner />
      <nav>
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
          
            <li>
              <NavLink 
                to={'/blogs'} 
                className='link'
              >
                Blog
              </NavLink>
            </li>
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

        {/* <div className='langs'>
          <span>
            <IoLanguage />
          </span>
        </div> */}
        {/* <Header /> */}

        {/* <div className='option'>
          <NavLink 
            to={'/app-bar'}
          >
            <CgMenuRightAlt style={{color:'white'}} />
          </NavLink>
        </div> */}
      </nav>
    </>
  )
}

export default NavBar