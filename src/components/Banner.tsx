import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6';


const Banner = () => {
  return (
    <div className='Banner'>
        <div className='bnn'>
            <div className='child'>
                <span>+243 900 000 000 </span>
                {' '}
                <span>+243  800 000 000</span>
            </div>
            <div className='so'>
                <a href=""><FaFacebook /></a>
                <a href=""> <FaLinkedin /></a>
                <a href=""><FaXTwitter /></a>
                {/* <a href=""><FaInstagram /></a> */}
            </div>
        </div>

        <div className='logo'>
            <div className='icon'>
                LA MANO DI DIO  LOGO
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>

    </div>
  )
}

export default Banner