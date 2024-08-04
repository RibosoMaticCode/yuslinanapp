// utils/api.js
import axios from 'axios';
import { Post } from '../types';

export const fetchPosts = async (): Promise<Post[]> => {
    const response = await axios.get('http://yuslinan.dev/blog/wp-json/wp/v2/posts', {
        params: {
            per_page: 5,
            orderby: 'date',
            order: 'desc',
        },
    });
    return response.data;
}