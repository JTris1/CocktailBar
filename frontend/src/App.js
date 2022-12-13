import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Grid from './components/Grid/Grid';
import { useState, useEffect } from 'react';

import axios from 'axios';

import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchResults, setSearchResults] = useState({drinks: [], categories: [], ingredients: []})

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

  async function getSearchResults(query) {
    try {
      const drinkRes = await axios.get(`https://api-dot-jdtrisle-cocktailbar.uc.r.appspot.com/?name=${query}`);
      const categoryRes = await axios.get(`https://api-dot-jdtrisle-cocktailbar.uc.r.appspot.com/?category=${query}`);
      const ingredientRes = await axios.get(`https://api-dot-jdtrisle-cocktailbar.uc.r.appspot.com/?ingredients=${query}`);

      setSearchResults({drinks: drinkRes.data, categories: categoryRes.data, ingredients: ingredientRes.data});
    }
    catch(e) {
      console.error("Failed to retrieve data", e);
    }
  }

  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <Search getSearchResults={getSearchResults}/>
        <Grid recipes={recipes} />
      </div>
    </div>
  );
}



export default App;
