import React, { createContext, useEffect, useState } from 'react'
import Axios from '../Axios'

export const AdminContext = createContext()

export const AdminProvider = (props) => {
    const [admin, setAdmin] = useState(null)
    const checkAdminLoggedIn = async () => {
        try {
            const jwt = localStorage.getItem("jwt")
            const response = await Axios.post("/admin/checkAdminLoggedIn", { jwt })
            console.log(response.data.admin);
            setAdmin(response.data.admin)
        } catch (error) {
            console.log(error)
            setAdmin(null)
        }
    }
    useEffect(() => {
        checkAdminLoggedIn()
    }, [])

  return (
    <AdminContext.Provider value={{ admin, setAdmin }}>
        {props.children}
    </AdminContext.Provider>
  )
}
