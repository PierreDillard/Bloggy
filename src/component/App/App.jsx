import { Routes, Route,Link } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Login from '../Login/Login';
import News from '../News/News';
import Videos from '../Videos/Videos';
import ArtGallery from '../ArtGallery/ArtGallery';
import Internship from '../Internship/Internship';



function App() {
  return (
      <div>
    <Routes>
      <Route path='/' element={(<Home />)} />
      <Route path='/login' element={(<Login />)} />


        <Route path='/news' element={(<News />)} />
        <Route path='/art-galery' element={(<ArtGallery />)} />
        <Route path='/internship' element={(<Internship />)} />
        <Route path='/video' element={(<Videos />)} />
    
    </Routes>
      </div>
  )
}


export default App;
