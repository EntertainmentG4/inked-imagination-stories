const Footer = () => {
  return (
      <>
          <footer className="bg-gray-400 text-blac px-4 py-5 md:px-8">
              <div className="max-w-lg sm:mx-auto sm:text-center">
                  <img src="" alt="Logo" className="w-32 sm:mx-auto" />

                  <p className="leading-relaxed mt-2 text-[15px]">
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
              </div>

              <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
                  <li className="text-gray-700 hover:text-gray-900">
                      Home
                  </li>

                  <li className="text-gray-700 hover:text-gray-900">
                      Blog
                  </li>

                  <li className="text-gray-700 hover:text-gray-900">
                      Who are we
                  </li>

                  <li className="text-gray-700 hover:text-gray-900">
                      get in touch
                  </li>
              </ul>

              <div className="mt-8 items-center justify-center sm:flex">
                  <div className="mt-4 sm:mt-0">
                      &copy; 2022 Float UI All rights reserved.
                  </div>
              </div>

          </footer>
      </>
  );
}

export default Footer;