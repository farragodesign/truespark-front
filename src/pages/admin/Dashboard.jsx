import React, { useEffect, useState } from "react";
import Axios from "../../Axios";
import AddCategory from "../../components/admin/AddCategory";
import ArticlesList from "../../components/admin/ArticlesList";
import Cards from "../../components/admin/Cards";
import CategoryList from "../../components/admin/CategoryList";
import DashbordList from "../../components/admin/DashbordList";
import EditCategory from "../../components/admin/EditCategory";
import ListSideBar from "../../components/admin/ListSideBar";
import UsersList from "../../components/admin/UsersList";

const Dashboard = () => {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  // dashboard all list setup
  const [dashboardList, setDashboardList] = useState(true);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isUserDetails, setIsUserDetails] = useState(false);
  const [isArticleDetails, setIsArticleDetails] = useState(false);
  const [isCategoryDetails, setIsCategoryDetails] = useState(false);
  const [isCategoryEdit, setIsCategoryEdit] = useState(false);
  const [isCategoryAdd, setIsCategoryAdd] = useState(false);

  const getArticles = () => {
    Axios.get("/articles")
      .then((data) => {
        setArticles(data.data.blogs);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });
  };

  const getCategories = () => {
    Axios.get("/categories")
      .then((data) => {
        setCategories(data.data.categories);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });
  };

  console.log(categories);
  const getUsers = () => {
    const jwt = localStorage.getItem("jwt");
    Axios.post("/users", { jwt })
      .then((data) => {
        setUsers(data.data.users);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });
  };

  const filterUsersOnThisMonth = (users) => {
    const thisMonth = new Date().getMonth();
    const thisYear = new Date().getFullYear();
    console.log(thisMonth);

    const thisMonthUsers = users.filter((user) => {
      const userMonth = new Date(user.createdAt).getMonth();
      console.log(userMonth);
      const userYear = new Date(user.createdAt).getFullYear();
      return userMonth === thisMonth && userYear === thisYear;
    });
    return thisMonthUsers;
  };

  useEffect(() => {
    getArticles();
    getCategories();
    getUsers();
  }, []);

  return (
    <div className="mt-20 flex flex-wrap w-full overflow-x-hidden">
      <div className="w-full md:w-1/3 m-0 md:m-4">
        <DashbordList
          articles={articles.length}
          categories={categories.length}
          users={users.length}
          usersInThisMonth={filterUsersOnThisMonth(users).length}
        />
      </div>
      {/* <div className="m-0 md:mx-8 md:my-4 left-2 md:left-1/3 absolute">
        <ListSideBar />
      </div> */}
      <div className="relative w-full md:w-7/12 flex justify-center my-4 md:my-0">
        <div
          className={`-translate-x-20 duration-500 opacity-0 transition-all w-2/12 md:w-auto m-0 md:m-4 ${
            isSideBarOpen ? "-translate-x-0 opacity-100" : ""
          }`}
        >
          <ListSideBar
            isCategory={() => {
              setIsCategoryAdd(false);
              setIsCategoryEdit(false);
              setDashboardList(false);
              setIsUserDetails(false);
              setIsSideBarOpen(true);
              setIsArticleDetails(false);
              setIsCategoryDetails(true);
            }}
            isDashboard={() => {
              setIsCategoryAdd(false);
              setIsCategoryEdit(false);
              setDashboardList(true);
              setIsUserDetails(false);
              setIsSideBarOpen(false);
              setIsArticleDetails(false);
              setIsCategoryDetails(false);
            }}
            isUser={() => {
              setIsCategoryAdd(false);
              setIsCategoryEdit(false);
              setDashboardList(false);
              setIsUserDetails(true);
              setIsSideBarOpen(true);
              setIsArticleDetails(false);
              setIsCategoryDetails(false);
            }}
            isArticle={() => {
              setIsCategoryAdd(false);
              setIsCategoryEdit(false);
              setDashboardList(false);
              setIsUserDetails(false);
              setIsSideBarOpen(true);
              setIsArticleDetails(true);
              setIsCategoryDetails(false);
            }}
          />
        </div>
        <div
          className={` duration-1000  transition-all w-9/12 m-0 md:my-4 right-0  ${
            isUserDetails ? 
            "-translate-x-0 opacity-100 relative" : "translate-x-full opacity-0 absolute"
          } `}
        >
          <UsersList users={users && users} />
        </div>

        <div
          className={` duration-1000  transition-all w-9/12 m-0 md:my-4 right-0  ${
            isArticleDetails ? 
            "-translate-x-0 opacity-100 relative" : "translate-x-full opacity-0 absolute"
          } `}
        >
          <ArticlesList categories={categories && categories}/>
        </div>


        <div
          className={` duration-1000  transition-all w-9/12 m-0 md:my-4 right-0 ${
            isCategoryDetails ? 
            "-translate-x-0 opacity-100 relative" : "translate-x-full opacity-0 absolute"
          } `}
        >
          <CategoryList
            setIsCategoryEdit={(e) => {
              setIsCategoryAdd(false);
              setIsCategoryEdit(e)
              setIsCategoryDetails(false);
              setIsSideBarOpen(true);
              setIsArticleDetails(false);
              setIsUserDetails(false);
            }}
            categories={categories && categories}
            setId={(id) => {
              setId(id);
            }}
            setName={(name) => {
              setName(name);
            }}

            setIsCategoryAdd={() => {
              setIsCategoryAdd(true);
              setIsCategoryEdit(false);
              setIsCategoryDetails(false);
              setIsSideBarOpen(true);
              setIsArticleDetails(false);
              setIsUserDetails(false);
            }
            }
          />
        </div>

        <div
          className={` duration-1000  transition-all w-9/12 m-0 md:my-4 right-0 ${
            isCategoryEdit ? 
            "-translate-x-0 opacity-100 relative" : "translate-x-full opacity-0 absolute"
          } `}
        >
          <EditCategory id={id} name={name} />
        </div>

        <div
          className={` duration-1000  transition-all w-9/12 m-0 md:my-4 right-0 ${
            isCategoryAdd ? 
            "-translate-x-0 opacity-100 relative" : "translate-x-full opacity-0 absolute"
          } `}
        >
          <AddCategory />
        </div>
        {dashboardList && (
          <div class="flex w-full m-4 flex-wrap justify-center items-center">
            <Cards
              isUser={() => {
                setIsUserDetails(true);
                setIsSideBarOpen(true);
                setDashboardList(false);
                setIsArticleDetails(false);
                setIsCategoryDetails(false);
                setIsCategoryAdd(false);
                setIsCategoryEdit(false);
              }}

              IsArticles={() => {
                setIsArticleDetails(true);
                setIsSideBarOpen(true);
                setDashboardList(false);
                setIsUserDetails(false);
                setIsCategoryDetails(false);
                setIsCategoryAdd(false);
                setIsCategoryEdit(false);
              }
              }
              IsCategory={() => {
                setIsCategoryDetails(true);
                setIsSideBarOpen(true);
                setDashboardList(false);
                setIsUserDetails(false);
                setIsArticleDetails(false);
                setIsCategoryAdd(false);
                setIsCategoryEdit(false);
              }
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
