import React, { useState, useContext, useEffect } from "react";
import { Badge } from "flowbite-react";
import { UserContext } from "../context/UserContext";
import ErrorToast from "./ErrorToast";
import Axios from "../Axios";
import { AdminContext } from "../context/AdminContext";
import { Link } from "react-router-dom";
import DeleteModal from "./DeleteModal";
import SuccessTost from "./SuccessTost";

function CardModel({ title, like, likedBy, image, category, id, setAllData }) {
  // user context
  const { user } = useContext(UserContext);
  // admin context
  const { admin } = useContext(AdminContext);
  const [isLiked, setIsLiked] = useState(false);
  const [isCopy, setIsCopy] = useState(false);
  const [pleaseLogin, setPleaseLogin] = useState("");
  const [iscategory, setIsCategory] = useState("");
  const [likes, setLikes] = useState(like || 0);
  const [isDeleteToggle, setIsDeleteToggle] = useState("");

  // checking if user is liked the article before rendering
  useEffect(() => {
    if (user) {
      if (likedBy) {
        likedBy.map((data) => {
          if (data === user._id) {
            setIsLiked(true);
          }
        });
      }
    }
    // getting the category of the article by id
    Axios.get(`/categories/${category ? category : ""}`)
      .then((data) => {
        setIsCategory(data.data.category.name);
      })
      .catch((err) => {});
  }, [likedBy]);

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

        Axios.patch(`/articles/${id}/dislike`, { userId: user._id, jwt: data })
      : // disliking the article and updating the likes
        Axios.patch(`/articles/${id}/like`, { userId: user._id, jwt: data });

    // updating the likes
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

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
    );
  };

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
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    );
  };

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
  };
  return (
    <div className=" md:m-0 w-72 ">
      <div className=" h-72 mt-4  overflow-hidden transition-all rounded-md  shadow-lg shadow-slate-300 m-2 hover:scale-105">
        <Link
          to={`/article/${id}`}
          className="w-full h-40  flex items-center justify-center"
        >
          <div className="image-view-post relative w-full h-52  flex items-center justify-center">
            <img
              className="h-40 overflow-hidden w-fulltransition-all"
              src={image}
              alt=""
            />
            <span className="view-post opacity-0 absolute text-slate-100 font-bold">
              {"view post"} <span className="animation-side">{`->`}</span>{" "}
            </span>
          </div>
        </Link>
        <h5 className={`text-center w-full h-20 
        ${
          
             /^[a-zA-Z]+$/.test(title)
              ? "font-anak"
              : /[\u0D02\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D28\u0D2A-\u0D39\u0D3E-\u0D43\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D60\u0D61\u0D66-\u0D6F]/.test(title)
              ? "font-ml-Read"
              : /[\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufc3f]|[\ufe70-\ufefc]/.test(title)
              ? "font-sans-Arabic"
              : "font-anak" } 
        
        flex capitalize items-center justify-center text-xl font-bold tracking-tight text-gray-900 dark:text-white`}>
        {title}
        </h5>
        <div className="flex h-10 flex-auto flex-wrap justify-around">
          <Link
            className="cursor-pointer bg-indigo-100 px-2.5 py-0.5 flex rounded-2xl justify-center items-center "
            to={`/category/${category}`}
          >
            <span className=" uppercase text-indigo-800 text-sm font-medium  dark:bg-blue-200 dark:text-indigo-800">
              {iscategory ? iscategory : "NO category"}
            </span>
          </Link>
          <div className="flex">
            <div className="flex items-center cursor-pointer">
              {admin ? (
                <Link to={`/${id}/edit`}>
                  {" "}
                  <Badge color="indigo" icon={edit} size="md" />{" "}
                </Link>
              ) : (
                <Badge
                  color="indigo"
                  icon={isLiked ? liked : notLiked}
                  size="md"
                  onClick={likeHandler}
                >
                  {likes}
                </Badge>
              )}
            </div>
          </div>
          <div className="cursor-pointer">
            {admin ? (
              <Badge
                onClick={() => setIsDeleteToggle(title)}
                color="indigo"
                icon={deleteItem}
                size="md"
              />
            ) : (
              <Badge
                icon={share}
                size="sm"
                color="indigo"
                onClick={() => {
                  navigator.clipboard.writeText(
                    `https://truespark.ml/article/${id}`
                  );
                  setIsCopy(true);
                  setTimeout(() => setIsCopy(false), 3000);
                }}
              ></Badge>
            )}
          </div>
        </div>
      </div>
      {
        <SuccessTost
          data={"Link copied to clipbord"}
          isSuccess={isCopy}
          setSuccess={() => setIsCopy(false)}
        />
      }
      {isDeleteToggle && (
        <DeleteModal
          name={isDeleteToggle}
          closeModal={() => setIsDeleteToggle("")}
          id={id}
          category={category}
          setAllData={setAllData}
        />
      )}

      <ErrorToast event={pleaseLogin} onClick={() => setPleaseLogin("")} />
    </div>
  );
}

export default CardModel;
