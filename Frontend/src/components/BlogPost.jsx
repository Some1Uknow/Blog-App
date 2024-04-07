const BlogPost = ({ imgSrc, title, content }) => {
  return (
    <div className="pr-10 mb-8 w-1/3">
      <div className="bg-white w-full flex flex-col justify-start shadow-md border border-gray-200 rounded-lg mb-5">
        <div className="w-full">
          {" "}
          <img
            className="rounded-t-lg w-full object-cover h-48"
            src={imgSrc}
            alt=""
          />
        </div>
        <div className="p-5 flex flex-col justify-start">
          <h5 className="text-gray-900 font-bold text-2xl mb-2">{title}</h5>

          <p className="font-normal text-gray-700 mb-3">{content}</p>
          <button className="text-white w-max bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
