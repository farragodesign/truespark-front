import React from 'react'
import { useNavigate ,Link } from 'react-router-dom';

const ArticlesList = ({categories}) => {

  const navigate = useNavigate()
    // give a color to each user
    const color = ["green", "blue", "red", "yellow"];
  return (
    <div>
        <section class="antialiased bg-gray-200 font-anak py-4 pt-16 flex flex-col rounded-2xl w-full">


<div id="toast-simple" class="flex items-center p-4 space-x-2 my-2 mx-auto w-11/12  text-gray-500 bg-white rounded-lg divide-x divide-gray-200 shadow dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800" >
<svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"></path></svg>
            <div class="pl-4 text-sm font-normal">Click the category name below to see , edit and delete all categories.</div>
</div>


{categories.map((category,i) => {
          return (
            <div key={i} class="mx-auto my-2 space-y-6 w-11/12">
                <Link to={`/category/${category && category._id}`}>
              <div class={`pl-1 w-full h-16 bg-${color[i%4]}-400 rounded-lg shadow-md cursor-pointer`}>
                <div class="flex w-full h-full py-2 px-4 bg-white rounded-lg justify-between">
                  <div class="my-auto">
                    <p class="font-bold font-anak">{category.name}</p>
                  </div>
                </div>
              </div>
                </Link>
            </div>
          );
        })}
{/* <Link to={'/add-item'}> */}
<div onClick={()=> navigate('/add-item')}  className="fixed right-4 top-4 cursor-pointer w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg shadow-slate-400">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
          </div>
{/* </Link> */}
         
      </section>
    </div>
  )
}

export default ArticlesList