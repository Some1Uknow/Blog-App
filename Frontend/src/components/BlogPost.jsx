import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogPost = ({ imgSrc, title, content, id, author, createdAt }) => {

  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:3000/users/${author}`);
        const user = await response.json();
        setUsername(user.userDetails.username);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  const imgPath = `http://localhost:3000/${imgSrc}`;


  return (
    <div className="pr-10 mb-8 flex h-1/2">
      <div className="bg-white w-2/3 flex flex-row justify-start border-gray-200 rounded-lg mb-5">
        <div className="w-1/2 h-full">
          <img
            className="rounded-t-lg object-cover h-full"
            src={imgPath}
            alt="blog-image"
          />
        </div>
        <div className="p-5 flex flex-col justify-start flex-grow w-2/3">
          <h5 className="text-gray-900 font-semibold text-2xl mb-2">{title}</h5>
          <div className="flex flex-row gap-4 mb-3">
            <p className="text-gray-600 text-sm font-semibold"> {username}</p>
            <p className="text-gray-600 text-sm">{new Date(createdAt).toLocaleString()}</p>
          </div>
          <div className="font-normal text-gray-700 mb-3 text-xs flex-grow overflow-hidden overflow-ellipsis">
            <div
              className="overflow-ellipsis"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>

          <Link to={`/blogpost/${id}`}>
            <button className="text-xs text-center inline-flex items-center">
              Read more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
