import React from 'react'

const CardLoading = () => {
    return (
        <div className=" md:m-0 w-11/12 md:w-1/2 lg:w-1/4 ">
            <div className="animation-pulse">

                <div className="h-100 mt-4 bg-b overflow-hidden transition-all rounded-lg  shadow-lg  m-2 border-2 border-slate-300 bg-slate-50">
                    <div className="h-52 w-full flex justify-center items-center">
                        <svg class="w-28 h-20 text-slate-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    </div>
                    <div class="block p-2 animate-pulse">
                        <div class="h-4 mb-4 bg-slate-500 rounded "></div>
                        <div class="h-4 bg-slate-500 rounded "></div>
                    </div>

                    <div className="animate-pulse flex flex-wrap justify-around mt-6">

                        <div class="h-6 w-16  bg-slate-500 rounded "></div>
                        <div class="h-6 w-10 bg-slate-500 rounded "></div>
                        <div class="h-6 w-6 bg-slate-500 rounded "></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CardLoading