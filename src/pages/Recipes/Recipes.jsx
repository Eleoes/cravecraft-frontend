import "./recipes.scss";
import { Link } from "react-router-dom";

function Recipes({ recipes }) {
  // loaded function
  const loaded = () => {
    return (
      <>
        <Link to="/create">
          <button className="recipe__button primary">Create </button>
        </Link>
        <div className="recipes__filters">
          <div className="recipes__container container grid">
            {recipes.map((recipe) => {
              return (
                <div className="recipes__card" key={recipe._id}>
                  <Link to={`/recipes/${recipe._id}`}>
                    <img
                      src={recipe.image}
                      alt="recipes image"
                      className="recipes__img"
                    />
                  </Link>
                  <Link to={`/recipes/${recipe._id}`}>
                    <h3 className="recipes__title">{recipe.title}</h3>
                  </Link>
                  {/* <div className="recipes__links">
                    <a
                      href={recipe._id}
                      target="_blank"
                      className="recipes__button"
                    >
                      Ingredients{" "}
                      <i className="bx bx-right-arrow-alt recipes__button-icon"></i>
                    </a>
                    <a
                      href={recipe._id}
                      target="_blank"
                      className="recipes__button"
                    >
                      Directions{" "}
                      <i className="bx bx-right-arrow-alt recipes__button-icon"></i>
                    </a>
                  </div> */}
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return recipes ? loaded() : loading();
}

export default Recipes;
