
import BlogPost from "./BlogPost";

const BlogList = () => {
  const blogPosts = [
    {
      imgSrc: "https://flowbite.com/docs/images/blog/image-1.jpg",
      title: "The Future of AI in Healthcare",
      content: "Artificial intelligence (AI) is rapidly transforming the healthcare industry...",
    },
    {
      imgSrc: "https://flowbite.com/docs/images/blog/image-2.jpg",
      title: "The Rise of Remote Work: Challenges and Opportunities",
      content: "Remote work has become increasingly popular, especially in the tech industry...",
    },
    {
      imgSrc: "https://flowbite.com/docs/images/blog/image-3.jpg",
      title: "Blockchain: Beyond Cryptocurrencies",
      content: "Blockchain technology is revolutionizing various industries beyond cryptocurrencies...",
    },
    {
      imgSrc: "https://flowbite.com/docs/images/blog/image-4.jpg",
      title: "The Impact of 5G on IoT",
      content: "The deployment of 5G networks is set to revolutionize the Internet of Things (IoT) landscape...",
    },
    {
      imgSrc: "https://flowbite.com/docs/images/blog/image-2.jpg",
      title: "The Future of Quantum Computing",
      content: "Quantum computing promises to bring about a new era of computing power...",
    },
    {
      imgSrc: "https://flowbite.com/docs/images/blog/image-1.jpg",
      title: "Augmented Reality: Transforming the Way We Interact with Technology",
      content: "Augmented reality (AR) is changing the way we perceive and interact with the world around us...",
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
