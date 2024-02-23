import IPost from '../types/Post';
import { useNavigate } from 'react-router-dom';
import { MdDateRange } from "react-icons/md";

type blogCard = {
    post : IPost;
}

const BlogCard = ({post } : blogCard) => {
    const nv = useNavigate();

  return (
    <div className='blog-card' onClick={()=> nv('/blog/'+post.id)} > 
        <div className='image'> </div>
        <div className='note'>
            <h3>{post.title }</h3>
            <span> <MdDateRange /> {post.dt}</span>
        </div>
    </div>
  )
}

export default BlogCard