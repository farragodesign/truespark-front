import React, { useContext, useEffect, useState } from 'react'
import Axios from '../Axios'
import { UserContext } from '../context/UserContext'

const CommentedUser = ({userName,i}) => {

    const [name, setName] = useState({})
    const {user} = useContext(UserContext)

    console.log("the all user is", name);
 

  useEffect(() => {
    console.log(i);

    Axios.get(`/users/${userName}`)
    .then(res => {

        if(user && userName === user._id){
            setName({...name,[i]:"you"})
        }else{
            setName({...name, [i]: res.data.user.name})
        }
        
    }
    )
    .catch(err => {
        // console.log(err)
    }
    )
    }
    , [userName])
  return (
    <strong>{name[i]}</strong>
  )
}

export default CommentedUser