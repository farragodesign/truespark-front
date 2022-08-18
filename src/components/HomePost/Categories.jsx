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
                return( 
                    <div key={index}>
                        <h1 className={`uppercase text-blue-800 font-bold text-3xl my-4 font-anak text-center`}>{category.name}</h1>
                        <div className="flex flex-wrap justify-center">
                        <div className=' w-full flex flex-wrap items-center justify-center md:justify-between md:m-3'>
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
                            <div className=" w-full flex flex-wrap items-center justify-center md:m-3">

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
                 
        <div className=" w-full flex flex-wrap items-center justify-center md:m-3">
        { [1, 2, 3, 4 ,5 ,6, 7,8].map((item, i) => {
            return (
                <CardLoading/>
                )
                }
                )
            }
            </div>
        }
    </div>
  )
}

export default Categories