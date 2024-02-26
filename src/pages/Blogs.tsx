import BannerShort from "../components/BannerShot"
import NavBar from "../components/NavBar";
import BlogCard from "../components/BlogCard";
import { useState } from "react";
import IPost from "../types/Post";
import Posts from "../types/post-data";
import '../styles/blogs.scss';




const Blogs = () => {
  const [post] = useState<IPost[]>(Posts);

  return (
    < > 
      <NavBar />
      <BannerShort title="ACTUALITES ET LES BLOGS SUR NOS REALISATIONS"/>

      <div className="blog-list">
        {/* {
          post.map(p => {return <BlogCard post={p} key={p.id} />})
        } */}
        <p style={{textAlign:'center',fontSize:20}}>
        En cours de développement
        </p>
        
      </div>
    </>
  )
}

export default Blogs