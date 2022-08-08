import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Axios from '../Axios';
import ArticleDetailed from '../components/ArticleDetailed';
import Comments from '../components/Comments';
import RelatedContents from '../components/RelatedContents';

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
    <div className="flex flex-wrap">
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