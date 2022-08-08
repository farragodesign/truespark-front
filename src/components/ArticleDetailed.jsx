import React, { useContext, useEffect, useState } from 'react'
import Axios from '../Axios'
import { AdminContext } from '../context/AdminContext'
import { UserContext } from '../context/UserContext'
import ErrorToast from './ErrorToast'
import SuccessTost from './SuccessTost'

const ArticleDetailed = ({article}) => {

  const {user} = useContext(UserContext)
  const {admin} = useContext(AdminContext)

  const [isCopy, setIsCopy] = useState(false)

  const [isLiked,setIsLiked] = useState(false)
  const [pleaseLogin, setPleaseLogin] = useState('')

  
  useEffect(() => {
    if (user) {
      if (article.likedBy) {
        article.likedBy.map((data) => {
          if (data === user._id) {
            setIsLiked(true)
          }
        })
      }
    }
  }
  , [article.likedBy])

  const likeHandler = () => { // liking the article
    const data = localStorage.getItem('jwt')
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
    isLiked ?
      // liking the article and updating the likes

      Axios.patch(`/articles/${article._id}/dislike`, { userId: user._id, jwt: data })
        
      :
      // disliking the article and updating the likes
      Axios.patch(`/articles/${article._id}/like`, { userId: user._id, jwt: data })
        

    // updating the likes
    // setLikes(isLiked ? likes - 1 : likes + 1)
  }
  

// get the article by id


  return (
   
       <div className="container w-full md:w-8/12 mt-20 px-4">
        {/* a image card with full width have a on border options to like and share */}
        <div class="relative flex  shadow-gray-400 border-8 border-white shadow-xl flex-col items-center justify-center w-full rounded-lg  overflow-hidden">
          <div class="flex flex-col items-center justify-center w-full max-h-96 rounded-lg   overflow-hidden">
            <img
              className="w-full object-cover"
              src={
                article.image
                  && article.image
              }
              alt="hai"
            />
          </div>

   
          <div className="w-full flex flex-col h-fit bg--600 rounded-3xl p-4 pb-8">
            <div className="p-2">
              <h1 className="font-true font-bold text-xl text-center">
               {
                article && article.title
               }
              </h1>
            </div>

          <div className="w-full flex justify-center  pb-2 ">
            {/* a small badge */}
            <div className="bg-indigo-200 px-2 rounded-xl">

            <span className=" uppercase text-indigo-800 text-sm font-medium  dark:bg-blue-200 dark:text-indigo-800">
              { article.category && article.category.name}
            </span>
            </div>

    </div>

            <div className="pb-4">
              <p className="font-anak text-justify ">
                {
                  article && article.content
                }
              </p>
            </div>
          </div>


          <div className="w-full h-10 bg-white absolute bottom-0 ">
              <hr  className="bg-gray-700 h-0.5 mx-5 md:mx-10"/>
              <div className="flex justify-between items-center w-full h-full">
                <div>
                  <p className="font-anak pl-4 text-xs md:text-sm">
                    created at <span className="font-bold">05:08 PM</span>
                  </p>
                </div>
                {/* like svg*/}
                <div className="flex pr-4 justify-between">
                  <div onClick={likeHandler}>
                {
                  isLiked ?
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
                :
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
                } 
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
  )
}

export default ArticleDetailed