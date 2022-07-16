
import React, { useContext, useEffect, useState } from 'react'
import { Route, useNavigate } from 'react-router-dom';
import { AdminContext } from '../context/AdminContext';
import Error from '../pages/Error'

const AdminProtect = ({children}) => {
    const navigate = useNavigate()
    
    // if there have admin context, then render children else error page
    const { admin } = useContext(AdminContext)
    const [conmponent,setComponent] = useState(children)
    useEffect(() => {
        if(!admin) {
            setComponent(<Error/>)
        }
        else{
           setComponent(children)
        }
    }
    , [admin])
    
    return conmponent
    
      
}

export default AdminProtect

