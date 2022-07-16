import React, { useState, useContext, useEffect } from 'react'
import { Badge } from 'flowbite-react'
import { UserContext } from '../context/UserContext'
import ErrorToast from './ErrorToast'
import Axios from '../Axios'
import { AdminContext } from '../context/AdminContext'

function CardModel({ title, like, likedBy, image, category, id }) {
  // user context
  const { user } = useContext(UserContext)
  // admin context
  const { admin } = useContext(AdminContext)
  const [isLiked, setIsLiked] = useState(false)
  const [isCopy, setIsCopy] = useState(false)
  const [pleaseLogin, setPleaseLogin] = useState('')
  const [iscategory, setIsCategory] = useState('')
  const [likes, setLikes] = useState(like || 0)


  // checking if user is liked the article before rendering
  useEffect(() => {
    if (user) {
      if (likedBy) {
        likedBy.map((data) => {
          console.log(`user ${data}`);
          if (data === user._id) {
            setIsLiked(true)
          }
        })
      }
    }
    // getting the category of the article by id
    // console.log(category);
    Axios.get
      (`/categories/${category ? category : ''}`)
      .then((data) => {
        console.log(data);
        setIsCategory(data.data.category.name)
      })
      .catch((err) => {
        console.log(err);
      })
  }
    , [likedBy])

  const likeHandler = () => { // liking the article
    const data = localStorage.getItem('jwt')
    // checking if user is logged in
    user ? setIsLiked(!isLiked) : setPleaseLogin('please login')
    setTimeout(() => setPleaseLogin(''), 3000)
    isLiked ?
      // liking the article and updating the likes

      Axios.patch(`/articles/${id}/dislike`, { userId: user._id, jwt: data })
        .then(() => console.log('disliked'))
        .catch(() => console.log('error'))
      :
      // disliking the article and updating the likes
      Axios.patch(`/articles/${id}/like`, { userId: user._id, jwt: data })
        .then(() => console.log('liked'))
        .catch(() => console.log('error'))

    // updating the likes
    setLikes(isLiked ? likes - 1 : likes + 1)
  }

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
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
    );
  }
  return (
    <div className=" md:m-0 w-11/12 md:w-1/2 lg:w-1/4">
      <div className=" h-100 mt-4  overflow-hidden transition-all rounded-lg  shadow-lg shadow-slate-300 m-2 hover:scale-105">
        <img className='h-52 overflow-hidden w-full' src={image} alt="" />
        <h5 className="text-center w-full h-20 flex capitalize items-center justify-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title && title}
        </h5>
        <div className="flex flex-wrap justify-around">
          <span className="cursor-pointer uppercase bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-2xl justify-center items-center mt-1 pt-1 dark:bg-blue-200 dark:text-blue-800">{iscategory ? iscategory : 'NO category'}</span>
          <div className="flex">
            <div className="flex items-center cursor-pointer">
              <Badge color="indigo" icon={admin ? edit : isLiked ? liked : notLiked} size="md" onClick={likeHandler}>
                { admin ? null : likes}
              </Badge>
            </div>
          </div>
          <div className='cursor-pointer'>

            <Badge icon={admin ? deleteItem : share} size="sm" color="indigo" onClick={() => { navigator.clipboard.writeText(`https://truespark.ml/articles/${id}`); setIsCopy(true); setTimeout(() => setIsCopy(false), 3000) }}>

            </Badge>
          </div>
        </div>
      </div>
      {

        <div className={`-translate-y-full opacity-0 transition-all w-full fixed flex items-center justify-center top-4  left-0 z-100 ${isCopy && 'opacity-100 -translate-y-0'}`}>

          <div id="toast-success" class="flex max-w-xs p-4 mb-4 border border-slate-400 text-gray-500 bg-white z-100 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
            <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            </div>
            <div class="ml-3 text-sm font-normal mt-1 capitalize">Link copied to clipboard.</div>
            <button type="button" onClick={() => setIsCopy(false)} class="ml-2 -mx-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
              <span class="sr-only">Close</span>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
        </div>

      }
      <ErrorToast event={pleaseLogin} onClick={() => setPleaseLogin('')} />
    </div>
  );
}

export default CardModel