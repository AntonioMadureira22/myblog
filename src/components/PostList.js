import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('/api/posts');
        setPosts(res.data);
      } catch (err) {
        console.error('Error fetching posts', err);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-2xl font-bold mb-6">All Posts</h2>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post._id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-700 mb-4">{post.content}</p>
            <small className="text-gray-500">By {post.author.username}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
