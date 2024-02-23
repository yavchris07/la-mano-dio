import { useState } from 'react';
import BannerShort from '../components/BannerShot'
import NavBar from '../components/NavBar'
import IProduct from '../types/product';
import Products from '../types/product-data';
import ProductCard from '../components/ProductCard';
import '../styles/home.scss'
import MiddleBanner from '../components/MiddleBanner';

const Home = () => {
  const [products] = useState<IProduct[]>(Products);

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
      
      <div className="product-card-home-list">
        {
          products.map(product => {return <ProductCard  product={product} key={product.id} />})
        }
      </div>


    </>
  )
}

export default Home