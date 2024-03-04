import { useState } from 'react';
import BannerShort from '../components/BannerShot'
import NavBar from '../components/NavBar'
import ProductCard from '../components/ProductCard';
import IProduct from '../types/product';
import Products from '../types/product-data';
import '../styles/pro.scss'
import ShotCover from '../components/shot-cover';

const Service = () => {
  const [products] = useState<IProduct[]>(Products);

  return (
    <>
        <NavBar />
        <ShotCover />

        <div className='all-title'>
          <h4>NOS PRODUITS &  <span style={{color:'rgb(242, 144, 0)'}}>NOS SERVICES</span></h4>
          <p>LA MANO DI DIO, votre partenaire de confiance pour tous vos projets de construction, d'immobilier et d'import-export en République Démocratique du Congo et à l'étranger. Avec notre expertise diversifiée et notre engagement envers l'excellence, nous nous engageons à réaliser vos ambitions avec précision et qualité.</p>
        </div>

        <div className="product-card-list">
        {
          products.map(product => {
            return <ProductCard  product={product} key={product.id} />
          })
        }
      </div>
    </>
  )
}

export default Service