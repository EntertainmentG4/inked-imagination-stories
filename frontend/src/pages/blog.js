import React, { useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    tags: "",
    date: new Date().toISOString().split("T")[0],
  });
  const [showForm, setShowForm] = useState(false);

  const fetchBlogPosts = () => {
    // Simulated blog posts
    const posts = [
      {
        _id: 1,
        title: "Blog Post 1",
        content: "This is the content of Blog Post 1.",
        author: "John Doe",
        tags: "Technology",
        date: "2023-07-01",
      },
      {
        _id: 2,
        title: "Blog Post 2",
        content: "This is the content of Blog Post 2.",
        author: "Jane Smith",
        tags: "Travel",
        date: "2023-07-02",
      },
      // Add more simulated blog posts as needed
    ];

    setBlogPosts(posts);
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleCreatePost = () => {
    const newPost = {
      _id: blogPosts.length + 1,
      ...formData,
    };

    newPost.date = new Date(newPost.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    setBlogPosts([...blogPosts, newPost]);
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  // Call the fetchBlogPosts function when the component mounts
  React.useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <>
      <div
        className="bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url(https://www.scottleroymarketing.com/wp-content/uploads/2016/06/coffee.jpg)`,
          height: "500px",
        }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black mb-4">Blog</h1>

            <nav className="text-white mb-8">
              <ol className="list-none p-0 inline-flex">
                <li className="flex items-center">
                  <Link to="/" className="text-amber-500">
                    Home
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mx-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </li>
                <li className="text-black">Blog</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div className="grid gap-8 sm:gap-16 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 mb-10 mx-6 mt-5 me-5 m-5">
        {blogPosts.map((post) => (
          <div
            key={post._id}
            className="group relative -mx-4  sm:-mx-2 p-6 sm:p-8 rounded-3xl bg-white dark:bg-transparent border border-gray-400  hover:border-gray-100 dark:shadow dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-2xl shadow-black hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300 hover:z-10 mb-4 m-8"
          >
            <div className="sm:w-2/6 rounded-3xl overflow-hidden transition-all duration-500 group-hover:rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                alt="art cover"
                loading="lazy"
                width={1000}
                height={667}
                className="h-56 sm:h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="sm:p-2 sm:pl-0 sm:w-4/6 text-left">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                {post.title}
              </h3>
              <p className="my-6 text-gray-600 dark:text-gray-300">
                {post.content}
              </p>
              <span className="mt-4 mb-2 inline-block font-medium text-gray-400 dark:text-gray-500 sm:mt-0">
                {post.date}
              </span>

              <div className="flex items-center justify-between">
                <div>
                  <img
                    src="user-picture.jpg"
                    alt="User"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <span className="text-gray-500 text-sm">{post.author}</span>
                </div>
                <div>
                  <button className=" buttonInAddArticle bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    More Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-8">
        <button
          onClick={() => setShowForm(true)}
          style={{ backgroundColor: "rgb(17, 24, 39)" }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-6"
        >
          Create New Post
        </button>
      </div>

      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full mt-5 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded shadow-md z-50 max-w-md w-full animate-fadeIn">
            <h2 className="text-2xl font-bold mb-4 text-left">
              Create New Blog Post
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-gray-700 font-bold mb-2 text-left"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="content"
                  className="block text-gray-700 font-bold mb-2 text-left"
                >
                  Content
                </label>
                <textarea
                  id="content"
                  name="content"
                  maxLength={50}
                  value={formData.content}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="author"
                  className="block text-gray-700 font-bold mb-2 text-left"
                >
                  Author
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="tags"
                  className="block text-gray-700 font-bold mb-2 text-left"
                >
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleCreatePost}
                  style={{ backgroundColor: "rgb(17, 24, 39)" }}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Create Post
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  style={{ backgroundColor: "rgb(17, 24, 39)" }}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
