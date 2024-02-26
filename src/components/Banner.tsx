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
            {/* <div className='icon'>
                {/* <h2></h2>
            </div> */}
            <p>Bienvenue chez LA MANO DI DIO, votre partenaire de confiance pour tous vos projets de construction, d'immobilier et d'import-export en République Démocratique du Congo et à l'étranger </p>
        </div>

    </div>
  )
}

export default Banner