import React from 'react'
import { useParams } from 'react-router-dom';
import ArticleDetailed from '../components/ArticleDetailed';
import Comments from '../components/Comments';

const ArticleView = () => {
  // take the id from the url
  const { id } = useParams()
  return (
    <div className="flex flex-wrap">
     <ArticleDetailed id={id}/>
      {/* <!-- end component --> */}
      <div className="w-full md:w-4/12">
        <Comments id={id}/>
      </div>
    </div>
  );
}

export default ArticleView