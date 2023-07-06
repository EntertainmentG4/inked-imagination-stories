import React from "react";
import { NavLink } from "react-router-dom";
import {
  ShoppingBagIcon,
  HeartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { MdOutlineExplore } from "react-icons/md";
import SearchBar from "./search";

function Nav() {
  return (
    <header>
      <div className="fixed top-0 left-0 right-0 z-30 py-2 overflow-hidden bg-gray-900">
        <div
          aria-label="Top"
          className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
        >
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center justify-between">
              <div className="flex w-1/2 overflow-hidden sm:ml-4 md:w-1/12 lg:ml-0">
                <NavLink to="/">
                  <span className="sr-only">The Book Shelf</span>
                  <img
                    src="https://ik.imagekit.io/pb97gg2as/E-Commerce-Assets/logo-no-background.png?updatedAt=1684597528087"
                    alt="THE BOOK SHELF"
                  />
                </NavLink>
              </div>
              <div className="flex items-center justify-end w-4/5">
                {/* Search bar for above mobile screen */}
                <div className={`hidden relative w-1/4 mx-10 lg:block`}>
                  <SearchBar />
                </div>
                <div className="flex justify-end w-3/4">
                  <div className="hidden lg:block">
                    <NavLink
                      to="products"
                      className="flex items-center p-2 -m-2 text-gray-100 rounded-md hover:bg-gray-700 group"
                    >
                      Explore
                      <MdOutlineExplore className="flex-shrink-0 w-6 h-6 ml-2 text-gray-100 group-hover:text-white" />
                      <span className="sr-only">products explore</span>
                    </NavLink>
                  </div>
                  <span
                    className="w-px h-6 ml-4 bg-gray-700 lg:ml-6"
                    aria-hidden="true"
                  />
                  <div className="flow-root ml-4 lg:ml-6">
                    <NavLink
                      to="wishlist"
                      className="flex items-center p-2 -m-2 group"
                    >
                      <HeartIcon
                        className="flex-shrink-0 w-6 h-6 text-gray-100 group-hover:text-white"
                        aria-hidden="true"
                      />
                      <span className="ml-1 text-xs font-medium text-gray-100 sm:ml-2 sm:text-sm group-hover:text-gray-50">
                        {/* {wishlist.length} */}
                      </span>
                      <span className="sr-only">favorite items view</span>
                    </NavLink>
                  </div>
                  <span
                    className="w-px h-6 ml-4 bg-gray-700 lg:ml-6"
                    aria-hidden="true"
                  />
                  <div className="flow-root ml-4 lg:ml-6">
                    <NavLink
                      to="cart"
                      className="flex items-center p-2 -m-2 group"
                    >
                      <ShoppingBagIcon
                        className="flex-shrink-0 w-6 h-6 text-gray-100 group-hover:text-gray-50"
                        aria-hidden="true"
                      />
                      <span className="ml-1 text-xs font-medium text-gray-100 sm:ml-2 sm:text-sm group-hover:text-gray-50">
                        {/* {cart.length} */}
                      </span>
                      <span className="sr-only">items in cart, view bag</span>
                    </NavLink>
                  </div>
                  <span
                    className="w-px h-6 ml-4 bg-gray-700 lg:ml-6"
                    aria-hidden="true"
                  />
                  <div className="ml-4 md:flow-root lg:ml-6">
                    <NavLink
                      to="user"
                      className="flex items-center p-2 -m-2 group"
                    >
                      <UserCircleIcon
                        className="flex-shrink-0 w-6 h-6 text-gray-100 group-hover:text-white"
                        aria-hidden="true"
                      />
                      <span className="sr-only">user profile view</span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Search bar for below computer */}
          <div className="p-2 bg-gray-800 rounded-lg lg:hidden">
            <span className="flex justify-end p-2">
              <NavLink
                to="books"
                className="flex items-center p-2 -m-2 text-gray-100 rounded-md hover:bg-gray-700 group"
              >
                {" "}
                <span className="hidden md:block">Explore</span>
                <MdOutlineExplore className="flex-shrink-0 w-6 h-6 text-gray-100 sm:ml-2 group-hover:text-white" />
                <span className="sr-only">products explore</span>
              </NavLink>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
