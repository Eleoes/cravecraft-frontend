import { Link } from "react-router-dom";
import "./recipes.css";

function Recipes(props) {
  // loaded function
  const loaded = () => {
    return props.recipes.map((recipe) => (
      <>
        <div className="portfolio__filters">
          <div className="portfolio__container container grid">
            <div className="project__card" key={recipe._id}>
              <img
                src={recipe.image}
                alt="project image"
                className="project__img"
              />
              <h3 className="project__title">{recipe.title}</h3>
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
          </div>
        </div>
      </>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return props.recipes ? loaded() : loading();
}

export default Recipes;
