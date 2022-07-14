import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Free from './pages/free';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import {UserProvider} from './Context';
import Filtered from './pages/Filtered';
// import {Route , Routes} from 'react-router-dom';

function App() {
  return (
    <div>
    <UserProvider>
      <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/category/:id' element={<Filtered />}/>
    </Routes>
    </UserProvider>
    </div>
  
  )

}

export default App;
