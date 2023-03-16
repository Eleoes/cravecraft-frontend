import "./recipes.css";
import { Link } from "react-router-dom";

function Recipes({ recipes }) {
  // loaded function
  const loaded = () => {
    return (
      <>
        <Link to="/create">
          <button className="home__button primary">Create </button>
        </Link>
        <div className="portfolio__filters">
          <div className="portfolio__container container grid">
            {recipes.map(({ image, title, _id }) => {
              return (
                <div className="project__card" key={_id}>
                  <Link to={`/recipes/${_id}`}>
                    <img
                      src={image}
                      alt="project image"
                      className="project__img"
                    />
                  </Link>
                  <Link to={`/recipes/${_id}`}>
                    <h3 className="project__title">{title}</h3>
                  </Link>
                  <div className="project__links">
                    <a href={_id} target="_blank" className="project__button">
                      Ingredients{" "}
                      <i className="bx bx-right-arrow-alt project__button-icon"></i>
                    </a>
                    <a href={_id} target="_blank" className="project__button">
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
