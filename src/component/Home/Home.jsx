import React from 'react';
import { Link } from 'react-router-dom';

 function Home() {
  return (
    <div>
    <h1>
        BloGGy
    </h1>
    <Link to='/login'>
    <button>
        Connexion
    </button>
    </Link>
      
    </div>
  )
}


export default Home;