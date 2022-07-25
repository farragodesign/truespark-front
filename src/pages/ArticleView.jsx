import React from 'react'
import ArticleDetailed from '../components/ArticleDetailed';
import Comments from '../components/Comments';

const ArticleView = () => {
  return (
    <div className="flex flex-wrap">
     <ArticleDetailed/>
      {/* <!-- end component --> */}
      <div className="w-full md:w-4/12">
        <Comments />
      </div>
    </div>
  );
}

export default ArticleView