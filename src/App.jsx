import { Routes, Route } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import Home from "./pages/Home/Home";
import { useEffect, useState } from "react";
import Recipes from "./pages/Recipes/Recipes";
import Create from "./pages/Create/Create";
import Recipe from "./pages/Recipe/Recipe";

function App() {
  const [recipes, setRecipes] = useState(null);

  const API_URL = "https://cravecraft-api.onrender.com/api/recipes";

  const getRecipes = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      //TODO: add logic or task if something goes wrong
    }
  };

  const createRecipes = async (recipe) => {
    // make post request to create recipe
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(recipe),
    });
    // update list of recipes
    getRecipes();
  };

  useEffect(() => {
    getRecipes();
  }, []);

  const updateRecipe = async (recipe, id) => {
    // console.log("id value", id);

    await fetch(API_URL + '/' + id, {
      method: 'PUT',
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(recipe),
    });
    //update list of recipes
    getRecipes();
  }

  const deleteRecipe = async (id) => {
    await fetch(API_URL + '/' + id, {
      method: 'DELETE',
    });
    getRecipes();
  };

  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />

        <Route path="recipes">
          <Route index element={<Recipes recipes={recipes} />} />
          <Route 
            path=":id" 
            element={<Recipe recipes={recipes} 
            updateRecipe={updateRecipe}
            deleteRecipe={deleteRecipe}
          />} />
        </Route>

        <Route
          path="create"
          element={<Create createRecipes={createRecipes} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
