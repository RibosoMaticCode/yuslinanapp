// components/PostList.js
"use client"

import PostItem from '@/components/PostItem';
// import styles from '../styles/PostList.module.css';
import {fetchPosts} from '@/utils/api';
import { useEffect, useState } from 'react';
import { Post } from '../types';

// interface PostListProps {
//   posts1: Post[];
// }

const PostList: React.FC = ({  }) => {

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts1 = async () => {
      try {
        const response = await fetchPosts();
        setPosts(response);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts1();
  }, []);

  return (
    <ul>
      {posts.map(post => (
        <PostItem post={post} />
      ))}
    </ul>
  );
};

export default PostList;
