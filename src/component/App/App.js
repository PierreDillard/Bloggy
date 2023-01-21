import { Routes, Route,Link } from 'react-router-dom';
import './styles.css';



function App() {
  return (
    <Routes>
      <div>
        <Link to='/news'>News</Link>
        <Link to='/art-galery'>ArtGalery</Link>
        <Link to='/internship'>Internship</Link>
        <Link to='/video'>Video</Link>
        <Link to='/contact'>Contact</Link>
        <Route path='/news' element={(<News />)} />
        <Route path='/art-galery' element={(<ArtGallery />)} />
        <Route path='/internship' element={(<Internship />)} />
        <Route path='/video' element={(<Videos />)} />
        <Route path='/contact' element={(<Contact />)} />
      </div>
    </Routes>
  )
}


export default App;
