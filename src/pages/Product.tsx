import { useState } from "react";
import { useParams } from "react-router-dom";
import IProduct from "../types/product";
import Products from "../types/product-data";
import NavBar from "../components/NavBar";
import BannerShort from "../components/BannerShot";



const Product = () => {
  const {id} = useParams<string>();
  const vl = parseInt(id!)
  const [products] = useState<IProduct[]>(Products);
  let product = products[vl];
  console.log('product : ',product);
  
  return (
    <>
      <NavBar />
      <BannerShort title={product.title} />

      <div className="container">
        <div className="head">
          <div className="img"></div>
          <div className="view">
            {/* code here */}
          </div>
        </div>
        
        <div className="res"> {product.resume}</div>
      </div>

    </>
    
  )
}

export default Product