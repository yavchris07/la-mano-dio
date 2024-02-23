import { useState } from 'react';
import BannerShort from '../components/BannerShot'
import NavBar from '../components/NavBar'
import ProductCard from '../components/ProductCard';
import IProduct from '../types/product';
import Products from '../types/product-data';
import '../styles/pro.scss'

const Service = () => {
  const [products] = useState<IProduct[]>(Products);

  return (
    <>
        <NavBar />
        <BannerShort title="NOS PRODUITS & NOS SERVICES "/>
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