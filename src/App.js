import { Route, Routes } from "react-router-dom";
import { useGoogleOneTapLogin } from "react-google-one-tap-login";
import "./App.css";
import HomePage from "./pages/HomePage";
import CreateHtml from "./pages/Html";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import { UserProvider } from "./context/UserContext";
import Filtered from "./pages/Filtered";
import Footer from "./components/Footer";
import Error from "./pages/Error";
import AdminLogin from "./pages/admin/AdminLogin";
import { AdminProvider } from "./context/AdminContext";
import AdminProtect from "./protected/AdminProtect";
import Dashboard from "./pages/admin/Dashboard";
import EditItems from "./pages/admin/EditItems";
import AddItems from "./pages/admin/AddItems";
import ArticleView from "./pages/ArticleView";

function App() {
  return (
    <div>
      {/* passing user context to all */}
      <UserProvider>
        {/* passing admin context to all */}
        <AdminProvider>
          <Navbar />
          {/* <div className="container_here"> */}
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/category/:id" element={<Filtered />} />
            <Route exact path="/admin" element={<AdminLogin />} />
            <Route path="/article/:id" element={<ArticleView />} />
            <Route
              exact
              path="/dashboard"
              element={
                <AdminProtect>
                  <Dashboard />
                </AdminProtect>
              }
            />
            <Route
              exact
              path="/:id/edit"
              element={
                <AdminProtect>
                  <EditItems />
                </AdminProtect>
              }
            />
            <Route
              exact
              path="/add-item"
              element={
                <AdminProtect>
                  <AddItems />
                </AdminProtect>
              }
            />

            <Route
              exact
              path="/html"
              element={
                <AdminProtect>
                  <CreateHtml />
                </AdminProtect>
              }
            />
            <Route path="*" element={<Error />} />
          </Routes>
          {/* </div> */}
          <Footer />
        </AdminProvider>
      </UserProvider>
    </div>
  );
}

export default App;
