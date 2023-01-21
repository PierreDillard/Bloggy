import { Routes, Route,Link } from 'react-router-dom';
import './styles.css';



function App() {
  return (
    <Routes>
      <div>
   
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
