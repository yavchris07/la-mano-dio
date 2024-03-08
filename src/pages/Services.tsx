import { useState } from 'react';
import NavBar from '../components/NavBar'
import '../styles/pro.scss'
import ShotCover from '../components/shot-cover';
import IService from '../types/service';
import SERVICES from '../types/service-data';
import ServicesCard from '../components/Services';

const Services = () => {
    const [services] = useState<IService[]>(SERVICES);

  return (
    <>
        <NavBar />
        <ShotCover />

        <div className='all-title'>
          <h4>NOS <span style={{color:'rgb(242, 144, 0)'}}>SERVICES</span></h4>
          <p>LA MANO DI DIO, votre partenaire de confiance pour tous vos projets de construction, d'immobilier et d'import-export en République Démocratique du Congo et à l'étranger. Avec notre expertise diversifiée et notre engagement envers l'excellence, nous nous engageons à réaliser vos ambitions avec précision et qualité.</p>
        </div>

        <div className="product-card-list">
        {
          services.map(service => {
            return <ServicesCard  key={service.id} service={service} />
          })
        }
      </div>
    </>
  )
}

export default Services