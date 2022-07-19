import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Axios from '../../Axios';
import ErrorToast from '../../components/ErrorToast';
import Spinner from '../../components/Spinner';
import SuccessTost from '../../components/SuccessTost';

const AddItems = () => {
    const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [data, setData] = useState("");
  const [categories, setCategories] = useState([]);
    const [isSuccess, setIsSuccess] = useState(false);

  // getting the id of the article by url
  const { id } = useParams();

  useEffect(() => {
    Axios.get("/categories")
      .then((res) => {
        setCategories(res.data.categories);
      })
      .catch((err) => {
        setIsError(err.message);
        setIsLoading(false);
      });
  }, []);

  const uploadToCloudinary = (image) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "lervpgzw");
    formData.append("cloud_name", "defrflfmj");
    formData.append("api_key", "888346351969487");
    formData.append("api_secret", "K41qKYQxWaAQ_d70GdTvziyYgyg");
    return axios.post(
      "https://api.cloudinary.com/v1_1/defrflfmj/image/upload",
      formData
    );
  }


  // updating the article
  const createHandler = (e) => {
    e.preventDefault();  
    setIsLoading(true);
    const jwt = localStorage.getItem("jwt");
    uploadToCloudinary(image)
      .then((res) => {
        const imageUrl = res.data.secure_url;
        const data = {
          title,
          content,
          image: imageUrl,
          category:"62cfc829a8aeccc47cc09521",
          author,
          jwt,
        };
        console.log(data);
        Axios.post(`/articles/`, data)
          .then((res) => {
            setIsLoading(false);
            console.log(res.data);
            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                }
                , 3000);
          }
          )
          .catch((err) => {
            setIsError(err.message);
            setIsLoading(false);
          }
          );

      })


  
  }


  return (
    <div className="flex w-full h-fit items-center justify-center mt-20">
      <div>
        <h1 className="font-bold font-anak text-xl md:text-2xl text-center uppercase text-blue-700">
          Add Article
        </h1>

        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={(e)=> createHandler(e)}
          >
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      for="company-website"
                      className="block text-sm font-medium text-gray-700"
                    >
                     
                      Title
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        
                        ADMIN
                      </span>
                      <input
                        type="text"
                        value={title && title}
                        onChange={(e) => setTitle(e.target.value)}
                        name="company-website"
                        id="company-website"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        placeholder="your title here"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    for="about"
                    className="block text-sm font-medium text-gray-700"
                  >
                    
                    Body
                  </label>
                  <div className="mt-1">
                    <textarea
                      value={content && content}
                      onChange={(e) => setContent(e.target.value)}
                      id="about"
                      name="about"
                      rows="3"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      placeholder="please write your body here .........."
                    ></textarea>
                  </div>
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="first-name"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Auther
                  </label>
                  <input
                    value={author && author}
                    onChange={(e) => setAuthor(e.target.value)}
                    type="text"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <select
                    id="country"
                    name="country"
                    autocomplete="country-name"
                    class="mt-1 block w-full overflow-hidden py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                   
                    Cover photo
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          for="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            // className="sr-only"
                            onChange={(e) => setImage(e.target.files[0])}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {isLoading ? <Spinner/> : 'Publish'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {isError && <ErrorToast onClick={()=>setIsError(false)} event={isError}/>}
      {isSuccess && <SuccessTost isSuccess={isSuccess} setSuccess={()=> setIsSuccess(false)} data={'item Added successfully'} />}

    </div>
  );
};

export default AddItems