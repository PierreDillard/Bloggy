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
import Dico from '../Dico/Dico';
import CreateCard from '../CreateCard/CreateCard';

// branchement Back
// PGUSER=bloggy
// PGPASSWORD=bloggy
// PGDATABASE=bloggy
// HOST=http://localhost/
// url pour inscription d'un membre : http://localhost:5000/api/member/addMember
// PORT=5000
// ACCESS_TOKEN_SECRET=4242XX
// REFRESH_TOKEN_SECRET=424200000X1


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
          <Route path='/dico' element={(<Dico />)} />
          <Route path='/createCard' element={(<CreateCard/>)} />
        </Routes>
      </div>
  )
}


export default App;