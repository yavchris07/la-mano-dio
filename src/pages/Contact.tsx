import NavBar from '../components/NavBar'
import '../styles/pro.scss'
import ShotCover from '../components/shot-cover';


const Contact = () => {
    // const [services] = useState<IService[]>(SERVICES);

  return (
    <>
        <NavBar />
        <ShotCover />

        <div className='all-title'>
          <h4>NOS <span style={{color:'rgb(242, 144, 0)'}}>CONTACTS</span></h4>
          <p>Besoin de plus d'informations ou prêt à démarrer un projet avec nous ? Contactez-nous dès aujourd'hui pour discuter de vos besoins spécifiques. Nous sommes là pour vous aider.</p>
          <p>En cours de developpement ...</p>
        </div>

         
    </>
  )
}

export default Contact