import React, { useEffect, useState } from 'react'
import { Card } from 'flowbite-react'
import CardModel from '../Card'
import Axios from '../../Axios';
import axios from 'axios';
import CardLoading from '../CardLoading';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Recent() {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get("https://truespark.herokuapp.com/api/v1/articles/recent?limit=4").then((res) => {
            console.log(res.data);
            setData(res.data.blogs);
        });

        // initilizing aos
        Aos.init({
            duration: 1000,
        });

    }, []);
    return (
        <div>
            <h1 className='text-blue-800 uppercase font-bold text-2xl  font-anak ml-7 md:ml-5 text-center' data-aos="fade-up"  data-aos-anchor-placement="center-bottom">Recent Posts</h1>
            <div className="flex flex-wrap justify-center">
                <div className=' w-full flex flex-wrap items-center justify-center md:justify-between md:m-3'>
                    {
                        data ? data.map((item, i) => {
                            return (
                                <CardModel
                                    key={i}
                                    title={item.title.length > 30
                                        ? item.title.substring(0, 30) + " ..."
                                        : item.title}
                                    like={item.likes}
                                    likedBy={item.likedBy}
                                    image={item.image}
                                    id={item._id}
                                    category={item.category ? item.category : 'No Category'}
                                />
                            )
                        }
                        )
                            : <div className='w-full flex flex-wrap items-center justify-center md:m-3'>

                                {
                                    [1, 2, 3, 4].map((item, i) => {
                                        return (
                                            <CardLoading/>
                                        )
                                    }
                                    )
                                }

                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Recent