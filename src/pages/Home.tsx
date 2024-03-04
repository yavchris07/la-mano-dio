import { useState } from 'react';
import BannerShort from '../components/BannerShot'
import NavBar from '../components/NavBar'

import '../styles/home.scss'
import MiddleBanner from '../components/MiddleBanner';
import IService from '../types/service';
import ServiceCard from '../components/ServiceCard';
import SERVICES from '../types/service-data';
import Im from '../types/im';
import IM from '../types/im-data';
import ImportCard from '../components/ImportCard';
import Cover from '../components/cover';
import Kard from '../components/kard';
import kards from '../types/kard-data';
import IKard from '../types/kard';


const Home = () => {
  const [kard] = useState<IKard[]>(kards);
  const [services] = useState<IService[]>(SERVICES);
  const [mport] = useState<Im[]>(IM)

  return (
    <>
      <NavBar />
      {/* <BannerShort title="NOS PRODUITS "/> */}
      <Cover />

      <div className='all-title'>
        <h4>NOS PRODUITS</h4>
        <p>LA MANO DI DIO, votre partenaire de confiance pour tous vos projets de construction, d'immobilier et d'import-export en République Démocratique du Congo et à l'étranger. Avec notre expertise diversifiée et notre engagement envers l'excellence, nous nous engageons à réaliser vos ambitions avec précision et qualité.</p>
      </div>


      <div className="product-card-home-list">
        {
          kard.map(kar => {
            return <Kard  key={kar.id} kard={kar} />
          })
        }
      </div>

      <MiddleBanner />

      <div className='all-title'>
        <h4>NOS SERVICES</h4>
        <p>LA MANO DI DIO, votre partenaire de confiance pour tous vos projets de construction, d'immobilier et d'import-export en République Démocratique du Congo et à l'étranger. Avec notre expertise diversifiée et notre engagement envers l'excellence, nous nous engageons à réaliser vos ambitions avec précision et qualité.</p>
      </div>
      
      <div className="services-card-home-list">
        {
          services.map(service => {
            return <ServiceCard  key={service.id} service={service} />
          })
        }
      </div>

      <div className='all-title'>
        <h4>IMPORT & EXPORT</h4>
        <p>Besoin de plus d'informations ou prêt à éffectuer l'import ou l'export ? Veillez contacter notre service client </p>
      </div>

      <div className="import-export-list">
        {
          mport.map(mp => {
            return <ImportCard key={mp.id} mport={mp} />
          })
        }
      </div>     

      <div className='all-title'>
        <h4>NOUS CONTACTER</h4>
        <p>Besoin de plus d'informations ou prêt à démarrer un projet avec nous ? Contactez-nous dès aujourd'hui pour discuter de vos besoins spécifiques. Nous sommes là pour vous aider.</p>
      </div>

      <div className="services-card-home-list">
        {
          // services.map(service => {
          //   return <ServiceCard  key={service.id} service={service} />
          // })
        }
      </div>

    </>
  )
}

export default Home