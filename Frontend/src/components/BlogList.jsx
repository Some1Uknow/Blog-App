import { useEffect, useState } from "react";
import axios from "axios";
import BlogPost from "./BlogPost";

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/blogs");
        setBlogPosts(response.data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchData();
  }, []);

 // console.log(blogPosts);

  return (
    <div className="px-20">
      <h1 className="text-xl font-semibold pb-5">Recent Blog Posts</h1>
      <div className="flex flex-row flex-wrap">
        {blogPosts.map((post) => (
          <div key={post._id} className="w-full">
            <BlogPost
              id={post._id}
              imgSrc={post.imagePath}
              title={post.title}
              content={post.content}
              createdAt={post.createdAt}
              author={post.author}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
