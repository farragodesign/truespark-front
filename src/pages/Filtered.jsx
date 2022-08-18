// import { Card } from "flowbite-react";
import Card from "../components/Card";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "../Axios";
import CardLoading from "../components/CardLoading";
import { Helmet } from "react-helmet";

function Filtered() {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [posts, setPosts] = useState(null);

  const getCategory = async () => {
    let { data } = await Axios.get("/categories/" + id);
    setCategory(data.category);
  };
  const getPosts = async () => {
    let { data } = await Axios.get("/articles/category/" + id);
    console.log(data);
    setPosts(data.blogs);
  };

  useEffect(() => {
    getCategory();
    getPosts();
  }, [id]);
  return (
    <div className="mt-20 container_here">
      <Helmet>
        <title>{`True Spark | ${category && category.name}`}</title>
        <meta name="description" 
          content="True Spark, True Spark platform, True Spark platform for students, True Spark platform for students to share their knowledge and ideas"
          />
        <meta name="keywords" content={category && category.name} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://www.truespark.live/category/${category && category._id}`} />
      </Helmet>
      {
        category ?
        <h1 className="text-center text-blue-600 text-4xl font-bold font-anak mt-4 uppercase">
        {category.name}
      </h1>
      :
      <div className='items-center animate-pulse box-content w-full h-full flex flex-col justify-center '>
                    
      <div class="animate-pulse h-10 md:h-10 w-28 mb-4 bg-slate-500 rounded my-4 font-anak text-2xl md:text-3xl text-white font-bold text-center"></div>
</div>
      }
            <div className="flex w-full flex-wrap justify-center">
      <div className=" w-full flex flex-wrap items-center justify-center md:justify-between md:m-3">
        {
            posts ?
            posts.map((post, index) => {
                return (
                    <Card
                        key={index}
                        title={post.title.length > 30
                          ? post.title.substring(0, 30) + " ..."
                          : post.title}
                        like={post.likes}
                        likedBy={post.likedBy}
                        image={post.image}
                        id={post._id}
                        category={post.category ? post.category._id : "No Category"}
                        setAllData={(id) => setPosts(posts.filter((post) => post._id !== id))}
                    />
                )
            })
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
      </div>
    </div>
  );
}

export default Filtered;