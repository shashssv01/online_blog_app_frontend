import React from "react";
import { Blog } from '../../models/Blog';
import './BlogPost.css';


const BlogPost: React.FC<{post: Blog}> = ({post}) =>{
    return (
        <div className="blogpost-container">
        <h1>{post.title}</h1>
        <p>By {post.author} on {post.date}</p>
        <p>{post.content}</p>
    </div>
    );
};

export default BlogPost;