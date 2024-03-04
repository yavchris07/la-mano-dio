import '../styles/shotbanner.scss';
import { FaArrowDown } from "react-icons/fa";

type titleProps = {
  title:string;
}

function BannerShort({title}:titleProps) {
  return (
    <div className='banner1'>
        {/* <p>{path}</p> */}
        <h1>{title}</h1>
        <span> <FaArrowDown style={{color:'rgb(242, 144, 0)', fontSize:15, padding:6}}/> </span>
        
    </div>
  );
}

export default BannerShort;
