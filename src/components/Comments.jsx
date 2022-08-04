import React, { useContext, useEffect, useState } from "react";
import Axios from "../Axios";
import { AdminContext } from "../context/AdminContext";
import { UserContext } from "../context/UserContext";
import moment from "moment";
import CommentedUser from "./CommentedUser";

const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const [error, setError] = useState({});

  // take the user on the context
  const { user } = useContext(UserContext);
  const { admin } = useContext(AdminContext);

  // get the time to display the time with the module moment
  const getTime = (time) => {
    return moment(time).fromNow();
  };

  


  useEffect(() => {
    // get the comments by id
    Axios.get(`/comment/${id}`)
      .then((data) => {
        console.log("the comment is", data.data.comment);
        setComments(data.data.comment);
      })
      .catch((err) => {
        console.log("the error is", err);
        setError(err);
      });
  }, [id]);

  

  const commentSubmitHandler = (e) => {
    e.preventDefault();
    const jwt = localStorage.getItem("jwt");
    Axios.post(
      `/comment`,
      { jwt, content: text, createdBy: user._id, article: id },
      { headers: { Authorization: `Bearer ${jwt}` } }
    )
      .then((data) => {
        console.log("the comment is", data.data.comment);
        setComments([...comments, data.data.comment]);
        setText("");
      })
      .catch((err) => {
        console.log("the error is", err);
        setError(err);
      });
  };

  return (
    <div className="mt-20 relative rounded-lg overflow-hidden shadow-lg shadow-gray-400">
      <div className="antialiased mb-12 mx-auto h-96 border-4 shadow-lg shadow-gray-400 border-white max-w-screen-sm p-4 rounded-xl  overflow-y-scroll">
        {/* <h3 className="mb-4 text-lg font-semibold text-center text-gray-900">Comments</h3> */}

        <div className="space-y-4 h-full  w-full">
          {comments.length > 0 ? 
            comments.map((comment, index) => {
              return (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <svg
                      className="w-10 h-10 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>{" "}
                  </div>
                  <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                    <CommentedUser userName={comment.createdBy} i={index}/>
                    <span className="text-xs ml-4 text-gray-400">
                      {getTime(comment.createdAt)}
                    </span>
                    <p className="text-sm">{comment.content}</p>
                  </div>
                </div>
              );
            })
           :  
            <div className="flex w-full h-full items-center justify-center ">
              <h1 className="text-stone-800">No comments yet..</h1>
            
            </div>

          }
        </div>
      </div>
      <form
        onSubmit={commentSubmitHandler}
        className="w-full flex pl-4 items-center justify-evenly h-16 bg-white  absolute bottom-0"
      >
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          className="w-10/12 h-10 overflow-auto overscroll-y-contain rounded-md transition-all duration-500"
        />

        <div className="cursor-pointer">
          <button type="submit">
            <svg
              className="w-8 h-8 rotate-90 text-blue-700"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Comments;
