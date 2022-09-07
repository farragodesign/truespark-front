import { createContext, useEffect, useState } from "react";
import Axios from "../Axios";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState(null);
  const checkUserLoggedIn = async () => {
    try {
      const jwt = localStorage.getItem("jwt");
      const response = await Axios.post("/users/checkLoggedIn", { jwt });
      setUser(response.data.user);
    } catch (error) {
    }
  };
  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  return (
    <UserContext.Provider value={{ user,setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};