import { useEffect } from "react";
import { Link } from "react-router-dom";

const BlogPost = ({ imgSrc, title, content, id, author, createdAt }) => {

  useEffect(() => {
    const res = fetch(`http://localhost:3000/users`)
  }, [])
  

  const imgPath = `http://localhost:3000/${imgSrc}`;

  return (
    <div className="pr-10 mb-8 flex">
      <div className="bg-white w-full flex flex-row justify-start border-gray-200 rounded-lg mb-5">
        <div className="w-1/2">
          <img
            className="rounded-t-lg w-full object-cover h-80"
            src={imgPath}
            alt="blog-image"
          />
        </div>
        <div className="p-5 flex flex-col justify-start flex-grow">
          <h5 className="text-gray-900 font-semibold text-2xl mb-2">{title}</h5>

          <div
            className="font-normal text-gray-700 mb-3 text-sm flex-grow"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <p className="text-gray-600 text-sm">Author: {author}</p>
          <p className="text-gray-600 text-sm">Created at: {createdAt}</p>
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
