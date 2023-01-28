import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import News from '../News/News';
import Videos from '../Videos/Videos';
import ArtGallery from '../ArtGallery/ArtGallery';
import Internship from '../Internship/Internship';
import Contact from '../Contact/Contact';
import Test4 from '../Video/Test4';


function App() {
  return (
      <div>
        <Routes>
          <Route path='/' element={(<Home />)} />
          <Route path='/login' element={(<Login />)} />
          <Route path='/registration' element={(<Registration />)} />
          <Route path='/news' element={(<News />)} />
          <Route path='/video' element={(<Videos />)} />
          <Route path='/art-gallery' element={(<ArtGallery />)} />
          <Route path='/internship' element={(<Internship />)} />
          <Route path='/contact' element={(<Contact />)} />
          <Route path='/test' element={(<Test4 />)} />
        </Routes>
      </div>
  )
}


export default App;