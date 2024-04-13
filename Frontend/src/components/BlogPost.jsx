const BlogPost = ({ imgSrc, title, content }) => {
  return (
    <div className="pr-10 mb-8 flex">
      <div className="bg-white w-full flex flex-row justify-start border-gray-200 rounded-lg mb-5">
        <div className="w-1/2">
          {" "}
          <img
            className="rounded-t-lg w-full object-cover h-80"
            src={imgSrc}
            alt="blog-image"
          />
        </div>
        <div className="p-5 flex flex-col justify-start flex-grow">
          <h5 className="text-gray-900 font-semibold text-2xl mb-2">{title}</h5>

          <p className="font-normal text-gray-700 mb-3 text-sm flex-grow">{content}</p>
          <button className="text-xs text-center inline-flex items-center">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
