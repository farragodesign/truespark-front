import React, { useEffect, useState } from "react";
import DeleteModal from "../DeleteModal";

const CategoryList = ({ categories ,setName ,setId , setIsCategoryEdit , setIsCategoryAdd}) => {
  const [isDeleteToggle, setIsDeleteToggle] = useState(false);
  const [nameHere, setNameHere] = useState("");
  const [id_here, setIdHere] = useState("");
  const [categoriesHere, setCategoriesHere] = useState("");

  useEffect(() => {
    setCategoriesHere(categories);
    }
    , [categories])

  console.log(isDeleteToggle);
  // give a color to each user
  const color = ["green", "blue", "red", "yellow"];
  console.log(categories);

  return (
    <div>
      <section class="antialiased bg-gray-200 py-4 pt-16  font-anak flex flex-col rounded-2xl w-full">
        {categoriesHere &&
          categoriesHere.map((category, i) => {
            return (
              <div key={i} class="mx-auto my-2 space-y-6 w-11/12">
                <div
                  class={`pl-1 w-full h-16 bg-${
                    color[i % 4]
                  }-400 rounded-lg shadow-md cursor-pointer`}
                >
                  <div class="flex w-full h-full py-2 px-4 bg-white rounded-lg justify-between">
                    <div class="my-auto">
                      <p class="font-bold font-anak">{category.name}</p>
                      <p class="text-sm font-anak">{category.description}</p>
                    </div >
                    <div class="my-auto flex">
                        <div 
                        onClick={() => {
                        
                            setIsCategoryEdit(true);
                           setName(category.name);
                            setId(category._id);
                        }
                        }>
                        <svg
                        className="w-6 h-6 mx-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        

                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                        </div>
                      
                      {/* delete svg */}
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => {
                          setIsDeleteToggle(true);
                          setIdHere(category._id);
                          setNameHere(category.name);
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div onClick={setIsCategoryAdd} className="fixed right-4 top-4 cursor-text w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg shadow-slate-400">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
          </div>
      </section>
      {isDeleteToggle && (
        <DeleteModal
          closeModal={() => setIsDeleteToggle(false)}
          id={id_here}
          isCategory={true}
          name={nameHere}
          setAllData={(id) => {
            setCategoriesHere(categoriesHere.filter((category) => category._id !== id));
          }}
        />
      )}
    </div>
  );
};

export default CategoryList;
