import React, { useContext, useEffect, useState } from "react";
import Axios from "../Axios";
import { AdminContext } from "../context/AdminContext";
import { UserContext } from "../context/UserContext";
import ErrorToast from "./ErrorToast";
import SuccessTost from "./SuccessTost";

const ArticleDetailed = ({ article }) => {
  const { user } = useContext(UserContext);
  const { admin } = useContext(AdminContext);

  const [isCopy, setIsCopy] = useState(false);
  const [time, setTime] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [pleaseLogin, setPleaseLogin] = useState("");

  // get the created time of the article
  const getTime = () => {
    const date = new Date(article.createdAt);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    // get am or pm
    const ampm = hour >= 12 ? "PM" : "AM";
    setTime(`${year}-${month}-${day} ${hour}:${minute} ${ampm}`);
  };

  useEffect(() => {
    if (user) {
      if (article.likedBy) {
        article.likedBy.map((data) => {
          if (data === user._id) {
            setIsLiked(true);
          }
        });
      }
    }

    getTime();
  }, [article.likedBy]);

  const likeHandler = () => {
    // liking the article
    const data = localStorage.getItem("jwt");
    // checking if user is logged in
    if (user) {
      setIsLiked(!isLiked);
    } else if (admin) {
      setPleaseLogin("Admin can not like");
      setTimeout(() => setPleaseLogin(""), 3000);
    } else {
      setPleaseLogin("please login");
      setTimeout(() => setPleaseLogin(""), 3000);
    }
    isLiked
      ? // liking the article and updating the likes

        Axios.patch(`/articles/${article._id}/dislike`, {
          userId: user._id,
          jwt: data,
        })
      : // disliking the article and updating the likes
        Axios.patch(`/articles/${article._id}/like`, {
          userId: user._id,
          jwt: data,
        });
  };

  return (
    <div className="container w-full md:w-8/12 mt-20 px-4">
      {/* a image card with full width have a on border options to like and share */}
      <div class="relative flex  shadow-gray-400 border-8 border-white shadow-xl flex-col items-center justify-center w-full rounded-lg  overflow-hidden">
        <div class="flex flex-col items-center justify-center w-full max-h-96 rounded-lg   overflow-hidden">
          {article.image ? (
            <img
              className="w-full object-cover"
              src={article.image && article.image}
              alt="hai"
            />
          ) : (
            <div className="h-52 w-full flex justify-center items-center">
              <svg
                class="w-28 h-20 text-slate-500 animate-pulse"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
          )}
        </div>

        <div className="w-full flex flex-col h-fit bg--600 rounded-3xl p-4 pb-8">
          <div className="p-2">
            <h1 className="font-anak font-bold text-xl text-center" lang="">
              {article && article.title}
            </h1>
          </div>

          <div className="w-full flex justify-center  pb-2 ">
            {/* a small badge */}
            <div className="bg-indigo-200 px-2 rounded-xl">
              <span className=" uppercase text-indigo-800 text-sm font-medium  dark:bg-blue-200 dark:text-indigo-800">
                {article.category && article.category.name}
              </span>
            </div>
          </div>

          <div
            className="pb-4"
            lang={
              /^[a-zA-Z]+$/.test(article.title)
                ? "en"
                : /[\u0D02\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D28\u0D2A-\u0D39\u0D3E-\u0D43\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D60\u0D61\u0D66-\u0D6F]/.test(
                    article.title
                  )
                ? "ml"
                : /[\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufc3f]|[\ufe70-\ufefc]/.test(
                    article.title
                  )
                ? "ar"
                : "en"
            }
          >
            <p
              className={`${
                /^[a-zA-Z]+$/.test(article.content)
                  ? "font-anak"
                  : /[\u0D02\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D28\u0D2A-\u0D39\u0D3E-\u0D43\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D60\u0D61\u0D66-\u0D6F]/.test(
                      article.content
                    )
                  ? "font-ml-Read"
                  : /[\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufc3f]|[\ufe70-\ufefc]/.test(
                      article.content
                    )
                  ? "font-sans-Arabic"
                  : "font-anak"
              } text-justify `}
              dangerouslySetInnerHTML={{ __html: article.content }}
            ></p>
          </div>
        </div>

        <div className="w-full h-10 bg-white absolute bottom-0 ">
          <hr className="bg-gray-700 h-0.5 mx-5 md:mx-10" />
          <div className="flex justify-between items-center w-full h-full">
            <div>
              <p className="font-anak pl-4 text-xs md:text-sm">
                created at <span className="font-bold"> {time} </span>
              </p>
            </div>
            {/* like svg*/}
            <div className="flex pr-4 justify-between">
              <div onClick={likeHandler}>
                {isLiked ? (
                  <svg
                    className="w-6 h-6 mr-4  cursor-pointer"
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
                ) : (
                  <svg
                    className="w-6 h-6 mr-4 cursor-pointer"
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
                )}
              </div>

              <svg
                onClick={() => {
                  navigator.clipboard.writeText(
                    `https://truespark.ml/article/${article._id}`
                  );
                  setIsCopy(true);
                  setTimeout(() => setIsCopy(false), 3000);
                }}
                className="w-6 h-6 cursor-pointer"
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
            </div>
          </div>
        </div>
      </div>
      <SuccessTost
        data={"Link copied to clipbord"}
        isSuccess={isCopy}
        setSuccess={() => setIsCopy(false)}
      />

      <ErrorToast event={pleaseLogin} onClick={() => setPleaseLogin("")} />
    </div>
  );
};

export default ArticleDetailed;
