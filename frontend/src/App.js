import Header from './components/Header/Header';
import Grid from './components/Grid/Grid';
import { useState, useEffect } from 'react';

import axios from 'axios';

import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("https://api-dot-jdtrisle-cocktailbar.uc.r.appspot.com/");
        setRecipes(response.data);
      }
      catch(e) {
        console.error(e);
      }
    }

    getData();
  }, []);

  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <Grid recipes={recipes} />
      </div>
    </div>
  );
}



export default App;
