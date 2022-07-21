import React, { useEffect, useState } from 'react'
import Axios from '../../Axios'
import Cards from '../../components/admin/Cards'
import DashbordList from '../../components/admin/DashbordList'

const Dashboard = () => {
  const [articles, setArticles] = useState([])
  const [categories, setCategories] = useState([])
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)


  const getArticles = () => {
    Axios.get('/articles')
      .then((data) => {
        setArticles(data.data.blogs)
        setIsLoading(false)
      }
      )
      .catch((err) => {
        setIsError(true)
        setIsLoading(false)
      }
      )
  }

  const getCategories = () => {
    Axios.get('/categories')
      .then((data) => {
        setCategories(data.data.categories)
        setIsLoading(false)
      }
      )
      .catch((err) => {
        setIsError(true)
        setIsLoading(false)
      }
      )
  }

  const getUsers = () => {
    const jwt = localStorage.getItem('jwt')
    Axios.post('/users', { jwt })
      .then((data) => {
        setUsers(data.data.users)
        setIsLoading(false)
      }
      )
      .catch((err) => {
        setIsError(true)
        setIsLoading(false)
      }
      )
  }

  const filterUsersOnThisMonth = (users) => {
    const thisMonth = new Date().getMonth()
    const thisYear = new Date().getFullYear()
    console.log(thisMonth);

    const thisMonthUsers = users.filter((user) => {
      const userMonth = new Date(user.createdAt).getMonth()
      console.log(userMonth);
      const userYear = new Date(user.createdAt).getFullYear()
      return userMonth === thisMonth && userYear === thisYear
    }
    )
    return thisMonthUsers
  }

  useEffect(() => {
    getArticles()
    getCategories()
    getUsers()
  }
    , [])

  return (
    <div className='mt-20 flex flex-wrap'>
      <div className='w-full md:w-1/3 m-0 md:m-4'>

      <DashbordList articles={articles.length} categories={categories.length} users={users.length} usersInThisMonth={filterUsersOnThisMonth(users).length} />
      </div>
      <div class="flex w-full md:w-3/5 flex-wrap">
      <Cards/>
      </div>
    </div>
  )
}

export default Dashboard