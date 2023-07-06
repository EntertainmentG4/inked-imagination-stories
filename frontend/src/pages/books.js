import React from "react";
import { useContext, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import BooksCard from "../components/booksCard";

function Books() {
  // useEffect(() => {
  //   document.title = "Products | The Book Shelf";
  //   const loader = setTimeout(() => {
  //     setShowLoader(false);
  //   }, 2000);
  //   return () => clearTimeout(loader);
  // }, []);

  return (
    <>
      <Transition
        appear={true}
        enter="transition-all ease-in-out duration-500 delay-[100ms]"
        enterFrom="opacity-0 translate-y-6"
        show={true}
        enterTo="opacity-100 translate-y-0"
        leave="transition-all ease-in-out duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {/* {booksData && booksData.length > 0 && (
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
            {allSortsAndFilters().map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )} */}
      </Transition>
      {/* {booksData && allSortsAndFilters().length === 0 && (
        <div className="flex justify-center my-20 sm:my-32">
          <p className="text-2xl text-center text-gray-100 sm:text-4xl">
            Oops! Looks like our Book Shelf is empty. 😟
          </p>
        </div>
      )} */}
      <section aria-labelledby="products-heading" className="pt-6 mt-16 pb-24">
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 bg-transparent">
          {" "}
          <BooksCard />
        </div>
      </section>
    </>
  );
}

export default Books;
