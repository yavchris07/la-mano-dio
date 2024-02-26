import { useState } from 'react';
import BannerShort from '../components/BannerShot'
import NavBar from '../components/NavBar'
import IProduct from '../types/product';
import Products from '../types/product-data';
import ProductCard from '../components/ProductCard';
import '../styles/home.scss'
import MiddleBanner from '../components/MiddleBanner';
import IService from '../types/service';
import ServiceCard from '../components/ServiceCard';
import SERVICES from '../types/service-data';

const Home = () => {
  const [products] = useState<IProduct[]>(Products);
  const [services] = useState<IService[]>(SERVICES);

  return (
    <>
      <NavBar />
      <BannerShort title="NOS PRODUITS "/>

      <div className="product-card-home-list">
        {
          products.map(product => {return <ProductCard  product={product} key={product.id} />})
        }
      </div>

      <MiddleBanner />

      <div className='all-title'>
        <h4>NOS SERVICES</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe qui perferendis accusantium architecto similique ipsum assumenda,</p>
      </div>
      
      <div className="services-card-home-list">
        {
          services.map(service => {
            return <ServiceCard  key={service.id} service={service} />
          })
        }
      </div>


    </>
  )
}

export default Home