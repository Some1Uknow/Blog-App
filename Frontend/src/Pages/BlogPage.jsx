import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:3000/blogs/${id}`);
        const blogData = await response.json();
        setBlog(blogData);
        
        const authorId = blogData.author; 
        const userResponse = await fetch(`http://localhost:3000/users/${authorId}`);
        const userData = await userResponse.json();
        setUsername(userData.userDetails.username);
      } catch (error) {
        console.error("Error fetching blog or user:", error);
      }
    };

    fetchBlog();
  }, []);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-600 mb-2">Author: {username}</p>
      <p className="text-gray-600 mb-2">Created at: {new Date(blog.createdAt).toLocaleString()}</p>
      <img className="mb-4" src={`http://localhost:3000/${blog.imgSrc}`} alt="blog-image" />
      <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
    </div>
  );
};

export default BlogPage;
