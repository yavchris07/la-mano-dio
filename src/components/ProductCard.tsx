import { useNavigate } from "react-router-dom";
import IProduct from "../types/product";
import '../styles/prod.scss';
import { FaPlus } from "react-icons/fa6";
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
        </div>
        <button onClick={()=> nv('/product/'+product.id)} className="btn">
          Voir plus <FaPlus style={{fontSize: 12}} />
        </button>
    </div>
  )
}

export default ProductCard
