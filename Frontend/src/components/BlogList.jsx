
import BlogPost from "./BlogPost";

const BlogList = () => {
  const blogPosts = [
    {
      imgSrc: "https://flowbite.com/docs/images/blog/image-1.jpg",
      title: "Title 1",
      content: "Content 1",
    },
    {
      imgSrc: "https://flowbite.com/docs/images/blog/image-2.jpg",
      title: "Title 2",
      content: "Content 2",
    },
    {
      imgSrc: "https://flowbite.com/docs/images/blog/image-3.jpg",
      title: "Title 3",
      content: "Content 3",
    },
    {
      imgSrc: "https://flowbite.com/docs/images/blog/image-4.jpg",
      title: "Title 4",
      content: "Content 4",
    },
    {
      imgSrc: "https://flowbite.com/docs/images/blog/image-2.jpg",
      title: "Title 5",
      content: "Content 5",
    },
    {
      imgSrc: "https://flowbite.com/docs/images/blog/image-1.jpg",
      title: "Title 6",
      content: "Content 6",
    },
  ];

  return (
    <div className="px-20">
      <h1 className="text-xl font-semibold pb-5">Recent Blog Posts</h1>
      <div className="flex flex-row flex-wrap">
        {blogPosts.map((post, index) => (
          <BlogPost
            key={index}
            imgSrc={post.imgSrc}
            title={post.title}
            content={post.content}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
