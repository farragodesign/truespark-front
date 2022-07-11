import { Badge, Carousel } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import Axios from '../Axios';



function Slider() {

    const [data, setData] = useState(null);
    useEffect(() => {
        Axios.get("/articles?limit=4").then((res) => {
            console.log(res.data);
            setData(res.data.blogs);
            console.log({...res});
        });
    }, []);
    return (
        <div className='mt-20'>

            <div className="m-2 md:m-5 h-52 sm:h-52 xl:h-128 2xl:h-128 lg:h-128">
                {
                    data ? <Carousel>
                        {
                            data.map((item, i) => {
                                return (
                                    <div key={i} className='bg-gradient-to-r from-purple-500 to-pink-500 box-content bg-cover w-full h-full bg-center bg-no-repeat bg-origin-padding  flex justify-center' style={{ backgroundImage: `url(${item.image})` }}>
                                    <div class={`py-1 px-2 ${item.category ? `bg-${item.category.color}-100`:'bg-indigo-100'} ${item.category ? `text-${item.category.color}-700`:'text-indigo-700'} rounded absolute top-5 md:top-10 font-anak text-sm md:text-lg font-bold text-center uppercase`}>{item.category ? item.category.name : 'No category'}</div>
                                    <h1 className='absolute bottom-10 font-anak text-lg md:text-3xl text-white font-bold text-center'>{item.title}jsijfdinh h gu  jiodddddddddd</h1>
                                </div>

                                )
                            })

                        }
                       
                    </Carousel> : 
                    <Carousel>
                         <div  className='animate-pulse box-content bg-cover w-full h-full bg-center bg-no-repeat bg-origin-padding  flex justify-center border border-slate-500 bg-slate-100'>
                                    <div class="animate-pulse h-4 md:h-8 w-20 mb-4 bg-slate-500 rounded absolute top-10 font-anak text-2xl md:text-3xl text-white font-bold text-center"></div>
                                    <svg class="w-6 h-6 top-1/2 absolute right-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                                    <svg class="w-6 h-6 top-1/2 absolute left-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                                    <div class="h-4 md:h-6 w-4/6 mb-4 animate-pulse bg-slate-500 rounded absolute bottom-10 font-anak text-2xl md:text-3xl text-white font-bold text-center"></div>
                                </div>
                    </Carousel>
                }
            </div>
        </div>
    )
}

export default Slider