import React, { useEffect, useState } from 'react'
import Axios from '../../Axios'
import CardModel from '../Card'
import CardLoading from '../CardLoading'

const Categories = () => {
    const [categories,setCategories] = useState(null)
    const [articles,setArticles] =useState(null)
    useEffect(()=>{
        Axios.get('/categories').then((data)=>{
            setCategories(data.data.categories)
            console.log('catggory mounted');
        })
        Axios.get('/articles').then((data)=>{
            setArticles(data.data.blogs)
        })
    },[])
    console.log(categories);
    console.log(articles);
  return (
    <div>  
        {
        categories ?
            categories.map((category,index)=>{
                console.log('hashim');
                return( 
                    <div key={index}>
                        <h1 className={`uppercase text-blue-800 font-bold text-3xl my-4 font-anak text-center`}>{category.name}</h1>
                        <div className="flex flex-wrap justify-center">
                        <div className=' w-full flex flex-wrap items-center justify-center md:m-3'>
                            {
                                articles ?
                             articles.filter((article)=>{
                                    return article.category && article.category === category._id
                                 })
                                .slice(0,4)
                                    .map((article,index)=>{
                                        return(
                                            <CardModel 
                                            key={index}
                                            title={article.title.length > 30
                                                ? article.title.substring(0, 30) + " ..."
                                                : article.title}
                                            like={article.likes}
                                            likedBy={article.likedBy}
                                            image={article.image}
                                            id={article._id}
                                            category={article.category ? article.category : 'No Category'} />
                                        )
                                    })
                                 :
                                 <div className='flex flex-wrap w-full'>

                                 { [1, 2, 3, 4].map((item, i) => {
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
            )   
        : 
                 
                 <div className='items-center animate-pulse box-content w-full h-full flex flex-col justify-center bg-slate-100'>
                    
                      <div class="animate-pulse h-4 md:h-10 w-28 mb-4 bg-slate-500 rounded my-4 font-anak text-2xl md:text-3xl text-white font-bold text-center"></div>
                     
                     <div className='flex flex-wrap w-full'>
                     { [1, 2, 3, 4].map((item, i) => {
                            return (
                                <CardLoading/>
                            )
                        }
                        )
                    }
                    </div>
                  </div>
        }
    </div>
  )
}

export default Categories