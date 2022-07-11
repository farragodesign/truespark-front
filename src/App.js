import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Free from './pages/free';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
// import {Route , Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/post" element={<Free />} />
      <Route path='/about' element={<AboutPage/>}/>
    </Routes>
    </div>
  
  )

}

export default App;
