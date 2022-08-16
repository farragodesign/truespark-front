import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from '../Axios'
import SuccessTost from './SuccessTost'

const RelatedContents = ({categoryId,articleId}) => {
    const [relatedContents, setRelatedContents] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const [isCopy, setIsCopy] = useState(false)

    

    console.log(relatedContents);

    useEffect(() => {
        console.log("the category id is", articleId && articleId);
        console.log("the category id is", categoryId && categoryId);

        
        Axios.get(`/articles/find-exeption/${categoryId && categoryId._id}/${articleId  && articleId}`).then(res => {
            setRelatedContents(res.data.blogs)
            setLoading(false)
        }
        ).catch(err => {
            setError(err.message)
            setLoading(false)
        }
        )
    }
        , [articleId,categoryId])

  return (
    <div className='flex flex-col'>
        
    <div>
        <h2 className='text-xl mt-4 font-bold text-center uppercase'>Related Contents</h2>
    </div>


{
  relatedContents ? relatedContents.map((data,i)=>{
    return(
    <div class="flex mt-4 h-36 w-full overflow-hidden items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <Link to={`/article/${data._id}`} className='w-1/2 h-full overflow-hidden rounded-t-lg md:rounded-none md:rounded-l-lg'>
    <div className="image-view-post relative w-full h-full flex items-center justify-center">
            <img
              className="object-cover w-full h-full rounded-t-lg md:rounded-none md:rounded-l-lg"
              src={data.image}
              alt=""
            />
            <span className="view-post opacity-0 absolute text-slate-100 font-bold">
              {"view post"} <span className="animation-side">{`->`}</span>{" "}
            </span>
          </div>
       
        </Link>
<div class="flex flex-col justify-between p-4 leading-normal w-1/2 h-full">
    <div className='w-full h-3/4'>

    <h5 class="mb-2 text-md md:text-xl   font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
    </div>

    <div className='flex justify-around'>

    <div className="bg-indigo-200 px-2 rounded-xl w-fit mt-2">

<span className=" uppercase text-indigo-800 text-sm font-medium  dark:bg-blue-200 dark:text-indigo-800">
{categoryId && categoryId.name}
</span>
</div>


<div onClick={() => {
                  navigator.clipboard.writeText(
                    `https://truespark.ml/article/${data._id}`
                  );
                  setIsCopy(true);
                  setTimeout(() => setIsCopy(false), 3000);
                }} className="bg-indigo-200 visible md:invisible lg:visible cursor-pointer px-2 flex items-center justify-center rounded-xl w-fit mt-2">

<span className=" uppercase text-indigo-800 text-sm font-medium  dark:bg-blue-200 dark:text-indigo-800">
<svg
    className="w-5 h-5 "
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
</span>
</div>
      </div>

</div>
</div>
    )
  }) :
  <div class="flex mt-4 h-36 w-full overflow-hidden items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
  {/* <Link to={`/article/${data._id}`} className='w-1/2 h-full overflow-hidden rounded-t-lg md:rounded-none md:rounded-l-lg'> */}
  <div className="image-view-post relative w-full h-full flex items-center justify-center">
          <img
            className="object-cover w-full h-full rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={'/logo'}
            alt=""
          />
          <span className="view-post opacity-0 absolute text-slate-100 font-bold">
            {"view post"} <span className="animation-side">{`->`}</span>{" "}
          </span>
        </div>
     
      {/* </Link> */}
<div class="flex flex-col justify-between p-4 leading-normal w-1/2 h-full">
  <div className='w-full h-3/4'>

  <h5 class="mb-2 text-md md:text-xl   font-bold tracking-tight text-gray-900 dark:text-white">{'fjllllljkjkl'}</h5>
  </div>

  <div className='flex justify-around'>

  <div className="bg-indigo-200 px-2 rounded-xl w-fit mt-2">

<span className=" uppercase text-indigo-800 text-sm font-medium  dark:bg-blue-200 dark:text-indigo-800">
{'fkfjak'}
</span>
</div>


<div className="bg-indigo-200 visible md:invisible lg:visible cursor-pointer px-2 flex items-center justify-center rounded-xl w-fit mt-2">

<span className=" uppercase text-indigo-800 text-sm font-medium  dark:bg-blue-200 dark:text-indigo-800">
<svg
  className="w-5 h-5 "
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
</span>
</div>
    </div>

</div>
</div>
}


{
        <SuccessTost
          data={"Link copied to clipbord"}
          isSuccess={isCopy}
          setSuccess={() => setIsCopy(false)}
        />
      }

    </div>
  )
}

export default RelatedContents