import React from "react";

function Blog() {
  return (
    <>
      {/* <div className="2xl:mx-auto 2xl:container xl:px-20 lg:px-10 px-6 py-20 mt-24">
        <div className="lg:flex justify-center">
          <div className="2xl:w-7/12 lg:w-8/12 md:w-10/12">
            <img
              src="https://i.ibb.co/ZY43FRd/blog-1-desktop.png"
              alt="fingerprint recognition"
              className="lg:w-full w-auto"
            />
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <p className="text-base leading-4 text-gray-500">5 feb</p>
                  <p className="text-base leading-none text-gray-500 ml-12">
                    5 min read
                  </p>
                </div>
                <div className="flex items-center">
                  <svg
                    width={64}
                    height={2}
                    viewBox="0 0 64 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M64 1H0" stroke="#6B7280" />
                  </svg>
                  <p className="text-base leading-none text-gray-500 ml-2">
                    Jeff Bill
                  </p>
                </div>
              </div>
              <h1 className="lg:text-3xl text-2xl font-semibold mt-4 text-gray-800">
                Chip fingerprint technology for secure transaction
              </h1>
              <p className="text-base leading-6 text-gray-600 mt-2">
                The emerge of internet of Things has brought in, rather
                urgently, a need for low-cost security technology. While
                passwords and other such forms of encription are software base,
                there is also a need for security level
              </p>
            </div>
          </div>
          <div className="lg:ml-6 lg:mt-0 mt-7 2xl:w-3/12 lg:w-4/12 w-full flex lg:flex-col sm:flex-row flex-col items-center justify-between">
            <div className="lg:w-auto sm:w-1/2">
              <img
                src="https://i.ibb.co/d6jQJyY/blog-2-desktop.png"
                alt="flying letters"
                className="w-full"
              />
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="text-base leading-4 text-gray-500">5 feb</p>
                    <p className="text-base leading-none text-gray-500 ml-12">
                      5 min read
                    </p>
                  </div>
                  <div className="flex items-center">
                    <svg
                      width={64}
                      height={2}
                      viewBox="0 0 64 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M64 1H0" stroke="#6B7280" />
                    </svg>
                    <p className="text-base leading-none text-gray-500 ml-2">
                      Jeff Bill
                    </p>
                  </div>
                </div>
                <h1 className="text-2xl font-semibold leading-6 mt-4 text-gray-800">
                  Internet of things
                </h1>
                <p className="text-base leading-6 text-gray-600 mt-2">
                  The emerge of internet of Things has brought in a need for
                  low-cost security technology.
                </p>
              </div>
            </div>
            <div className="lg:mt-6 sm:mt-0 mt-6 lg:ml-0 sm:ml-6 lg:w-auto sm:w-1/2">
              <img
                src="https://i.ibb.co/9cN11LT/blog-3-desktop.png"
                alt="robotic arm"
                className="w-full"
              />
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="text-base leading-4 text-gray-500">5 feb</p>
                    <p className="text-base leading-none text-gray-500 ml-12">
                      5 min read
                    </p>
                  </div>
                  <div className="flex items-center">
                    <svg
                      width={64}
                      height={2}
                      viewBox="0 0 64 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M64 1H0" stroke="#6B7280" />
                    </svg>
                    <p className="text-base leading-none text-gray-500 ml-2">
                      Jeff Bill
                    </p>
                  </div>
                </div>
                <h1 className="text-2xl font-semibold leading-6 mt-4 text-gray-800">
                  Internet of things
                </h1>
                <p className="text-base leading-6 text-gray-600 mt-2">
                  The emerge of internet of Things has brought in a need for
                  low-cost security technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="py-12">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="mb-12 space-y-2 text-center">
            <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
              Sharing is Caring
            </h2>
            <p className="text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-6/12">
              Quam hic dolore cumque voluptate rerum beatae et quae, tempore
              sunt, debitis dolorum officia aliquid explicabo? Excepturi,
              voluptate?
            </p>
          </div>
          <div className="lg:w-3/4 xl:w-2/4 lg:mx-auto">
            <div className="group relative -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-transparent border border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-2xl shadow-transparent hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300 hover:z-10">
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
              <div className="sm:p-2 sm:pl-0 sm:w-4/6">
                <span className="mt-4 mb-2 inline-block font-medium text-gray-400 dark:text-gray-500 sm:mt-0">
                  Jul 27 2022
                </span>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Provident de illo eveniet commodi fuga fugiat laboriosam
                  expedita.
                </h3>
                <p className="my-6 text-gray-600 dark:text-gray-300">
                  Laudantium in, voluptates ex placeat quo harum aliquam totam,
                  doloribus eum impedit atque...
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300"
                  >
                    Tailwindcss
                  </a>
                  <a
                    href="#"
                    className="px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300"
                  >
                    VueJS
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative hover:z-10 -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-transparent border border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-2xl shadow-transparent hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300">
              <div className="sm:w-2/6 rounded-3xl overflow-hidden transition-all duration-500 group-hover:rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                  alt="art cover"
                  loading="lazy"
                  width={1000}
                  height={667}
                  className="h-56 sm:h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="sm:p-2 sm:pl-0 sm:w-4/6">
                <span className="mt-4 mb-2 inline-block font-medium text-gray-400 dark:text-gray-500 sm:mt-0">
                  Jul 27 2022
                </span>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Provident de illo eveniet commodi fuga fugiat laboriosam
                  expedita.
                </h3>
                <p className="my-6 text-gray-600 dark:text-gray-300">
                  Laudantium in, voluptates ex placeat quo harum aliquam totam,
                  doloribus eum impedit atque...
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300"
                  >
                    Tailwindcss
                  </a>
                  <a
                    href="#"
                    className="px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300"
                  >
                    VueJS
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative hover:z-10 -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-transparent border border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-2xl shadow-transparent hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300">
              <div className="sm:w-2/6 rounded-3xl overflow-hidden transition-all duration-500 group-hover:rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                  alt="art cover"
                  loading="lazy"
                  width={1000}
                  height={667}
                  className="h-56 sm:h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="sm:p-2 sm:pl-0 sm:w-4/6">
                <span className="mt-4 mb-2 inline-block font-medium text-gray-400 dark:text-gray-500 sm:mt-0">
                  Jul 27 2022
                </span>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Provident de illo eveniet commodi fuga fugiat laboriosam
                  expedita.
                </h3>
                <p className="my-6 text-gray-600 dark:text-gray-300">
                  Laudantium in, voluptates ex placeat quo harum aliquam totam,
                  doloribus eum impedit atque...
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300"
                  >
                    Tailwindcss
                  </a>
                  <a
                    href="#"
                    className="px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300"
                  >
                    VueJS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
