import React, { useEffect, useState } from 'react'
import Axios from '../../Axios'
import CardModel from '../Card'

const Categories = () => {
    const [categories,setCategories] = useState([])
    const [articles,setArticles] =useState([])
    useEffect(()=>{
        Axios.get('/categories').then((data)=>{
            setCategories(data.data.categories)
        })
    },[])

    const getArticles =async (id) => {
        const allArticles = await Axios.get(`/articles/category/${id}`)
        setArticles([...articles,[allArticles.data.blogs]])
    }
    console.log(categories.length);
    console.log(articles);
  return (
    <div>
        {
            categories && 
             categories.map((category,i)=>{
                // getArticles(category._id)
                console.log('now it was called api');
                return(
                    <div
                     key={category._id}
                     >

                    <h1>{category.name}</h1>
                    
                    {/* {
                        articles && articles.map((article,i)=>{
                            return(

                                <CardModel
                                        key={i}
                                        title={article.title}
                                        like={article.likes}
                                        likedBy={article.likedBy}
                                        image={article.image}
                                        category={article.category ? article.category.name : 'No Category'}
                                    />
                                )
                            })
                    }
                     */}
                    </div>
                )
            })
        }
    </div>
  )
}

export default Categories