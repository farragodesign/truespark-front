import React from 'react'
import { Link } from 'react-router-dom'

function free() {
  return (
    <section className="bg-gray-900 mt-20">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-white capitalize lg:text-4xl">
            VAHDA <br /> Admin{" "}
            <span className="underline decoration-blue-500">Dashboard</span>
          </h1>
          {/* <p className="mt-4 text-gray-500 xl:mt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            quam voluptatibus
          </p> */}
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 space-y-3 border-2 border-blue-400">
              <Link
                to={"/create-post"}
                className="text-2xl bg-blue-500 hover:bg-blue-300 px-4 py-2 rounded-lg font-semibold text-white capitalize"
              >
                Create New Post
              </Link>
              <p className="text-gray-500 py-10">
                
              </p>
              <Link
                to={"/all-posts"}
                className="inline-flex p-2 px-4 capitalize transition-colors duration-200 transform  text-white bg-gray-800  hover:text-gray-800 hover:bg-white"
              >
                view all
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>
            </div>
            <div className="p-8 space-y-3 border-2 border-blue-400 rounded-xl">
              <Link
                to={"/create-author"}
                className="text-2xl bg-blue-500 hover:bg-blue-300 px-4 py-2 rounded-lg font-semibold text-white capitalize"
              >
                Create New Author Section 
              </Link>
              <p className="text-gray-500 py-10"></p>

              <Link
                to={"/create-author"}
                className="inline-flex p-2 px-4 capitalize transition-colors duration-200 transform  text-white bg-gray-800  hover:text-gray-800 hover:bg-white"
              >
                view all
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>
            </div>
            <div className="p-8 space-y-3 border-2 border-blue-400 rounded-xl">
              <Link
                to={"/create-category"}
                className="text-2xl bg-blue-500 hover:bg-blue-300 px-4 py-2 rounded-lg font-semibold text-white capitalize"
              >
                Create New Category
              </Link>
              <p className="text-gray-500 py-10"></p>

              <Link
                to={"/create-category"}
                className="inline-flex p-2 text-white capitalize transition-colors duration-200 transform bg-gray-800  hover:text-gray-800 hover:bg-white"
              >
                view all
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>
            </div>
            <div className="p-8 space-y-3 border-2 border-blue-400 rounded-xl">
              <Link
                to={"/create-video"}
                className="text-2xl bg-blue-500 hover:bg-blue-300 px-4 py-2 rounded-lg font-semibold text-white capitalize"
              >
                Add New Video
              </Link>
              <p className="text-gray-500 py-10"></p>

              <Link
                to={"/create-video"}
                className="inline-flex p-2 px-4 capitalize transition-colors duration-200 transform  text-white bg-gray-800  hover:text-gray-800 hover:bg-white"
              >
                view all
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
  )
  
}

export default free