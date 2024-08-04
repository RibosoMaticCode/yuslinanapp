// components/PostItem.js
// import styles from '../styles/PostItem.module.css';
import { Post } from '../types';
import React from 'react';

  interface PostItemProps {
    post: Post;
  }
  

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <li>
      <h2>{post.title.rendered}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
      <a href={post.link} target="_blank" rel="noopener noreferrer">
        Leer más
      </a>
    </li>
  );
};

export default PostItem;
