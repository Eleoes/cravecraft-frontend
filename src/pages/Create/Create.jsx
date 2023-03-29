import { useState } from "react";
import "./create.scss";
import CreateFoodImage from "../../assets/images/createFood.jpg";

function Create({ recipes, createRecipes }) {
  const [newForm, setNewForm] = useState({
    title: "",
    image: "",
    prepTime: "",
    cookingTime: "",
    skillLevel: "",
    makes: "",
    ingredients: "",
    tips: "",
  });

  const handleChange = (event) => {
    setNewForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //if(Object.values(newForm).length === 0) return; //if there are no values inside the newForm state object, terminate function execution
    createRecipes(newForm);
    alert("Your recipe has been created");
  };

  return (
    <section className="section">
      <article className="container">
        <h1 className="section__title">Create New Recipe</h1>
        {/* TODO: Move buttons to dropdown menu and place on corner of create.  */}

        <div className="create__wrapper">
          <div className="create__image">
            <img src={CreateFoodImage} alt="default recipe" />
          </div>

          <div className="create__details">
            <div className="create__info">
              <span className="create__subtitle">General Info</span>
              <form onSubmit={handleSubmit}>
                <ul>
                  {/* title */}
                  <li>
                    <i className="bx bxs-star"></i>{" "}
                    <span className="create__label">Title: </span>
                    <input
                      type="text"
                      name="title"
                      value={newForm.title}
                      onChange={handleChange}
                    />
                  </li>
                  {/* image */}
                  <li>
                    <i className="bx bx-camera"></i>{" "}
                    <span className="create__label">Image: </span>
                    <input
                      type="text"
                      name="image"
                      value={newForm.image}
                      onChange={handleChange}
                    />
                  </li>
                  {/* prepTime */}
                  <li>
                    <i className="bx bx-restaurant"></i>{" "}
                    <span className="create__label">Prep time: </span>
                    <input
                      type="text"
                      name="prepTime"
                      value={newForm.prepTime}
                      onChange={handleChange}
                    />
                  </li>
                  {/* cookingTime */}
                  <li>
                    <i className="bx bx-time"></i>{" "}
                    <span className="create__label">Cooking time: </span>
                    <input
                      type="text"
                      name="cookingTime"
                      value={newForm.cookingTime}
                      onChange={handleChange}
                    />
                  </li>
                  {/* skillLevel */}
                  <li>
                    <i className="bx bx-signal-5"></i>{" "}
                    <span className="create__label">Skill level: </span>
                    <input
                      type="text"
                      name="skillLevel"
                      value={newForm.skillLevel}
                      onChange={handleChange}
                    />
                  </li>
                  {/* makes */}
                  <li>
                    <i className="bx bxs-dish"></i>{" "}
                    <span className="create__label">Makes: </span>
                    <input
                      type="text"
                      name="makes"
                      value={newForm.makes}
                      onChange={handleChange}
                    />
                  </li>
                </ul>
                {/* TODO: Change Schema to make Ingredients mappable */}
                <i className="bx bxs-bowl-rice"></i>{" "}
                <span className="create__subtitle">Ingredients</span>
                <ul>
                  <li>
                    <input
                      type="text"
                      name="ingredients"
                      value={newForm.ingredients}
                      onChange={handleChange}
                    />
                  </li>
                </ul>
                {/* TODO: Change Schema to make Tips mappable */}
                <i className="bx bxs-bulb"></i>{" "}
                <span className="create__subtitle">Tips for this create</span>
                <ul>
                  <li>
                    <input
                      type="text"
                      name="tips"
                      value={newForm.tips}
                      onChange={handleChange}
                    />
                  </li>
                </ul>
                <div className="create__buttons-wrapper">
                  <input
                    className="primary"
                    type="submit"
                    value="Submit New Recipe"
                  />
                </div>
              </form>
            </div>

            <div className="create__instructions">
              {/* TODO: Change Schema to make Instructions mappable */}
              <span className="create__subtitle">Instructions</span>
              <ol>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  error nulla fugit veritatis inventore ex nesciunt, aut modi
                  nihil maiores animi impedit quidem laudantium. Libero earum
                  aliquam consequuntur optio repellat.
                </li>
                <li>Pending</li>
                <li>Pending</li>
                <li>Pending</li>
                <li>Pending</li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente voluptatem provident praesentium sequi commodi
                  laboriosam est! Quis enim esse iure molestiae cum, culpa
                  dolores quo? Ab adipisci dolores assumenda doloremque!
                </li>
                <li>Pending</li>
                <li>Pending</li>
                <li>Pending</li>
              </ol>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Create;
