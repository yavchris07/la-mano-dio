import BannerShort from "../components/BannerShot"
import NavBar from "../components/NavBar";
import { useState } from "react";
import IPost from "../types/Post";
import Posts from "../types/post-data";
import { useParams } from 'react-router-dom';
import '../styles/blo.scss';
import { MdDateRange } from "react-icons/md";




const Blog = () => {

  const {id} = useParams<string>();
  const vl = parseInt(id!)
  const [blogs] = useState<IPost[]>(Posts);
  let blog = blogs[vl];
  console.log('blog : ',blog);

  return (
    < > 
      <NavBar />
      <BannerShort title={blog.title}/>

      <div className="blog-container">
        <div className="img"></div>
        <span> <MdDateRange /> {blog.dt}</span>
        <div className="resume">{blog.resume}</div>
         
      </div>
    </>
  )
}

export default Blog

