import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Free from './pages/free';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import {UserProvider} from './context/UserContext';
import Filtered from './pages/Filtered';
import Footer from './components/Footer';
import Error from './pages/Error';
import AdminLogin from './pages/admin/AdminLogin';
import { AdminProvider } from './context/AdminContext';
import AdminProtect from './protected/AdminProtect';
import Dashboard from './pages/admin/Dashboard';
import EditItems from './pages/admin/EditItems';
import AddItems from './pages/admin/AddItems';

function App() {
  return (
    <div>
    <UserProvider>
    <AdminProvider>
      <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/free' element={<Free />} />
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/category/:id' element={<Filtered />}/>
      <Route path='/admin' element={<AdminLogin />}/>
      <Route path='/dashbord' element={<AdminProtect><Dashboard/></AdminProtect>} />
      <Route path='/:id/edit' element={<AdminProtect><EditItems/></AdminProtect>} />
      <Route path='/add-item' element={<AdminProtect><AddItems/></AdminProtect>} />

      <Route path='*' element={<Error/>}/>
    </Routes>
    <Footer/>
    </AdminProvider>
    </UserProvider>
    </div>
  
  )

}

export default App;
