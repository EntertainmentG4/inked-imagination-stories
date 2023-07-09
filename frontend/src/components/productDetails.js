import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductOverview = () => {
  const { id } = useParams();
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/books/${id}`);
        setBookData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
  console.log(bookData);

  return (
    <section className="overflow-hidden text-gray-100">
      <div className="container px-5 pt-32 pb-4 mx-auto sm:py-24">
        <div className="flex flex-wrap items-center mx-auto lg:max-w-5xl">
          <img
            alt={bookData.title}
            className="object-cover object-center w-full rounded h-1/2 lg:w-1/4"
            src={bookData.imgUrl}
          />

          <div className="w-full mt-6 lg:w-2/3 lg:pl-10 lg:py-6 lg:mt-0">
            <h2 className="relative text-sm tracking-widest text-gray-500 title-font">
              {bookData.author}
              <div className="absolute right-0 sm:bottom-4 sm:relative bottom-24">
                {/* <WishlistButton product={product} /> */}
              </div>
            </h2>
            <h1 className="mb-1 text-3xl font-medium text-gray-100 title-font">
              {bookData.title}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <span className="text-xs mr-3 font-semibold px-2.5 py-0.5 rounded bg-cyan-900 bg-opacity-80 text-gray-100">
                  {bookData.rating}
                </span>
                |
                <span className="ml-3 text-gray-600">
                  {bookData.pages} Pages
                </span>
              </span>
            </div>
            <p className="leading-relaxed">{bookData.description}</p>

            <div className="flex items-baseline my-4">
              <span className="text-2xl before:mr-1 before:content-['₹'] font-medium text-gray-100 title-font">
                {bookData.price - bookData.discount}
              </span>
              <span className="text-md ml-2 before:mr-1 line-through before:content-['₹'] font-medium text-gray-500 title-font">
                {bookData.price}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mx-auto border-t border-gray-700 lg:max-w-5xl">
          <h2 className="my-2 text-sm tracking-widest text-gray-500 title-font">
            Recent Reviews
          </h2>
          {bookData.reviews &&
            bookData.reviews.length > 0 &&
            bookData.reviews.map(
              ({ username, date, rating, comment }, index) => (
                <div
                  key={index}
                  className="flex content-center py-4 border-b border-gray-700"
                >
                  <div className="grid grid-cols-4 grid-rows-1 gap-4">
                    <div className="flex flex-wrap items-center col-span-2">
                      <p className="w-40 truncate sm:w-60">{username}</p>
                      <div className="flex flex-col items-start justify-between w-full space-y-2 sm:flex-row">
                        <p className="text-xs text-gray-500">{date} </p>
                        <span className="text-xs mr-3 font-semibold px-2.5 py-0.5 rounded bg-cyan-900 bg-opacity-80 text-gray-100">
                          {rating}
                        </span>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <p className="text-md">{comment}</p>
                    </div>
                  </div>
                </div>
              )
            )}
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
