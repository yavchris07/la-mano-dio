import { useNavigate } from "react-router-dom";
import IProduct from "../types/product";
import { FaChevronRight } from "react-icons/fa6";
import '../styles/prod.scss';
import { CgCalendarDates } from "react-icons/cg";

type productCardProps = {
  product : IProduct;
}

const ProductCard = ({product}:productCardProps ) => {
  const nv = useNavigate();

  return (
    <div className='product-card' > 
        <div className='image'>
          <img src={product.img} alt="" />
        </div>
        <div className='note'>
            <h3>{product.title.substring(0,100)} ...</h3>
            <span> <CgCalendarDates /> {product.dt}</span>
        </div>
        <button onClick={()=> nv('/product/'+product.id)} className="btn">
          Se renseigner <FaChevronRight style={{fontSize: 12}} />
        </button>
    </div>
  )
}

export default ProductCard
