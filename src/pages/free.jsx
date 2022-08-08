import { Badge } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Free() {
  const notLiked = (like) => {
    return (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        ></path>
      </svg>
    )
  }

  const liked = (like) => {
    return (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  };

  const share = (share) => {
    return (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
        ></path>
      </svg>
    );
  };

  const edit = (edit) => {
    return (
      <svg 
      className="w-6 h-6" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg">
        <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    );
  }

  const deleteItem = () => {
    return (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    );
  }
  return (
   
    <div className=" h-100 mt-4  overflow-hidden transition-all rounded-lg  shadow-lg shadow-slate-300 m-2 hover:scale-105">
    <Link to={`/article/`}>
      <img className="h-52 overflow-hidden w-full hover:brightness-75" src='' alt="" />
    </Link>
      <h5 className="text-center w-full h-20 flex capitalize items-center justify-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {'fdajfhlfhkla'}
      </h5>
      <div className="flex flex-auto flex-wrap justify-around">
        <Link
          className="cursor-pointer bg-indigo-100 px-2.5 py-0.5 flex rounded-2xl justify-center items-center "
          to={`/category/$`}
        >
          <span className=" uppercase text-indigo-800 text-sm font-medium  dark:bg-blue-200 dark:text-indigo-800">
            {"NO category"}
          </span>
        </Link>
        <div className="flex">
          <div className="flex items-center cursor-pointer">
            {(
              <Badge
                color="indigo"
                icon={ notLiked}
                size="md"
              >
                {'9'}
              </Badge>
            )}
          </div>
        </div>
        </div>
        </div>

  );
}

export default Free;



