import { Badge, Carousel } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Axios from '../Axios';



function Slider() {

    const [data, setData] = useState(null);
    const [category, setCategory] = useState(null);

    const handleCategory = (category) => {
        Axios.get(`/categories/${category?category:''}`)
   .then((res)=>{
       setCategory(res.data.category.name)
   }
   )
   .catch((err)=>{
    // you error here
   }
   )
}



    useEffect(() => {
        Axios.get("/articles?limit=4").then((res) => {
            setData(res.data.blogs);
            res.data.blogs.map((data,i)=>{
                handleCategory(data.category)
            })
        });

    }, []);

 
   
    return (
        <div className='mt-20'>

            <div className="m-2 md:m-5 h-52 sm:h-52 md:h-96 xl:h-128 2xl:h-200 lg:h-128">
                {
                    data ? <Carousel>
                        {
                            data.map((item, i) => {
                                return (
                                    <div key={i} className='bg-gradient-to-r from-purple-500 to-pink-500 box-content bg-cover w-full h-full bg-center bg-no-repeat bg-origin-padding  flex justify-center' style={{ backgroundImage: `url(${item.image})` }}>
                                    <div class={`py-1 px-2 bg-indigo-100 text-indigo-700 rounded absolute top-5 md:top-10 font-anak text-sm md:text-lg font-bold text-center uppercase`}>{category ? category : 'Loading..'}</div>
                                    <div className="bg-blue-900 w-fit h-fit absolute bottom-10 rounded-md p-2">
                                        <Link to={`/article/${item._id}`}>
                                    <h1 className='font-anak text-lg md:text-3xl text-white font-bold text-center capitalize'>{item.title}</h1>
                                        </Link>
                                    </div>
                                </div>

                                )
                            })

                        }
                       
                    </Carousel> : 
                    <Carousel>
                         <div  className='animate-pulse box-content bg-cover w-full h-full bg-center bg-no-repeat bg-origin-padding  flex justify-center bg-slate-100'>
                                    <div class="animate-pulse h-4 md:h-8 w-20 mb-4 bg-slate-500 rounded absolute top-10 font-anak text-2xl md:text-3xl text-white font-bold text-center"></div>
                                    <div class="h-4 md:h-6 w-4/6 mb-4 animate-pulse bg-slate-500 rounded absolute bottom-10 font-anak text-2xl md:text-3xl text-white font-bold text-center"></div>
                                </div>
                    </Carousel>
                }
            </div>
        </div>
    )
}

export default Slider