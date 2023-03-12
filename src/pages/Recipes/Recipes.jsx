import { Link } from "react-router-dom";

function Recipes(props) {
  // loaded function
  const loaded = () => {
    return props.recipes.map((recipe) => (
      <div key={recipe._id} className="recipe">
        <Link to={`/recipes/${recipe._id}`}>
          <h1>{recipe.title}</h1>
        </Link>
        <img src={recipe.image} alt={recipe.title} />
        <h3>{recipe.title}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return props.recipes ? loaded() : loading();
}

export default Recipes;
