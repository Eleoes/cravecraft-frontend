import { Routes, Route } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import Home from "./pages/Home/Home";
import { useEffect, useState } from "react";
import Recipes from "./pages/Recipes/Recipes";

function App() {
  const [recipes, setRecipes] = useState(null);

  const API_URL = "http://localhost:4000/api/recipes";
  // const API_URL = "https://cravecraft-api.onrender.com/api/recipes";

  const getRecipes = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      //TODO: add logic or task if something goes wrong
    }
  };

  // const createRecipes = async (recipe) => {
  //   // make post request to create recipe
  //   await fetch(URL, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "Application/json",
  //     },
  //     body: JSON.stringify(recipe),
  //   });
  //   // update list of recipes
  //   getRecipes();
  // };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path="Recipes" element={<Recipes recipes={recipes} />} />
      </Route>
    </Routes>
  );
}

export default App;
