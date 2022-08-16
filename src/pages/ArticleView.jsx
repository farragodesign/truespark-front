import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Axios from '../Axios';
import ArticleDetailed from '../components/ArticleDetailed';
import Comments from '../components/Comments';
import RelatedContents from '../components/RelatedContents';
import {Helmet} from 'react-helmet'

const ArticleView = () => {
  // take the id from the url
  const { id } = useParams()
  const [article, setArticle] = useState({})
  const [error, setError] = useState({})

  // get the articles

  useEffect(() => {
    Axios.get(`/articles/${id}`)
      .then((data) => {
        setArticle(data.data.blog)
        console.log(data.data.blog);
        window.scrollTo(0, 0)
      }
      )
      .catch((err) => {
        setError(err.response.data.error)
      }
      )
  }
    , [id])
  return (
    <div className="flex flex-wrap container_here">
      <Helmet>
        <title>{article.title}</title>
        {/* first 25 letters of article.content */}
        <meta name="description" content={article.content.substring('0','100')} />
        <meta name="keywords" content={article.category && article.category.name} />
        {/* <link rel="fev" href={`https://www.blog.com/article/${id}`} /> */}
      </Helmet>
     <ArticleDetailed article={article}/>
      {/* <!-- end component --> */}
      <div className="w-full md:w-4/12">
        <Comments id={id}/>
        <RelatedContents articleId={article._id} categoryId={article.category}/>
      </div>
    </div>
  );
}

export default ArticleView