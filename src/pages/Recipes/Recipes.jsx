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
        <div className="portfolio__filters">
          <div className="portfolio__container container grid">
            {recipes.map((recipe) => {
              return (
                <div className="project__card" key={recipe._id}>
                  <Link to={`/recipes/${recipe._id}`}>
                    <img
                      src={recipe.image}
                      alt="project image"
                      className="project__img"
                    />
                  </Link>
                  <Link to={`/recipes/${recipe._id}`}>
                    <h3 className="project__title">{recipe.title}</h3>
                  </Link>
                  <div className="project__links">
                    <a
                      href={recipe._id}
                      target="_blank"
                      className="project__button"
                    >
                      Ingredients{" "}
                      <i className="bx bx-right-arrow-alt project__button-icon"></i>
                    </a>
                    <a
                      href={recipe._id}
                      target="_blank"
                      className="project__button"
                    >
                      Directions{" "}
                      <i className="bx bx-right-arrow-alt project__button-icon"></i>
                    </a>
                  </div>
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
