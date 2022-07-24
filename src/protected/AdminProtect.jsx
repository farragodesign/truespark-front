import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import Error from "../pages/Error";

function AdminProtect({ children }) {
  const { admin } = useContext(AdminContext);
  if (admin) {
    return children;
  } else {
    return <Error/>;
  }
}

export default AdminProtect;
