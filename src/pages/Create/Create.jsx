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
  };

  return (
    <>
      <section className="section">
        <article className="container">
          <h1 className="create__title">Add New Recipe</h1>

          <div className="create__wrapper">
            <div className="create__image">
              <img src={CreateFoodImage} alt="default recipe" />
            </div>
          </div>

          <form className="create__form" onSubmit={handleSubmit}>
            <div className="create__form-div">
              <label className="create__form-tag">Title</label>
              <input
                type="text"
                value={newForm.title}
                onChange={handleChange}
                name="title"
                className="create__form-input"
                placeholder="Title"
              />
            </div>

            <div className="create__form-div">
              <label className="create__form-tag">Image</label>
              <input
                type="text"
                value={newForm.image}
                onChange={handleChange}
                name="image"
                className="create__form-input"
                placeholder="Image"
              />
            </div>

            <div className="create__form-div">
              <label className="create__form-tag">Prep Time</label>
              <input
                type="text"
                value={newForm.prepTime}
                onChange={handleChange}
                name="prepTime"
                className="create__form-input-small"
                placeholder="Prep Time"
              />
            </div>

            <div className="create__form-div">
              <label className="create__form-tag">Cooking Time</label>
              <input
                type="text"
                value={newForm.cookingTime}
                onChange={handleChange}
                name="cookingTime"
                className="create__form-input-small"
                placeholder="Cooking Time"
              />
            </div>

            <div className="create__form-div">
              <label className="create__form-tag">Skill Level</label>
              <input
                type="text"
                value={newForm.skillLevel}
                onChange={handleChange}
                name="skillLevel"
                className="create__form-input"
                placeholder="Skill Level"
              />
            </div>

            <div className="create__form-div">
              <label className="create__form-tag">Makes</label>
              <input
                type="text"
                value={newForm.makes}
                onChange={handleChange}
                name="makes"
                className="create__form-input"
                placeholder="Makes"
              />
            </div>

            <div className="create__form-div">
              <label className="create__form-tag">Ingredients</label>
              <input
                type="text"
                value={newForm.ingredients}
                onChange={handleChange}
                name="ingredients"
                className="create__form-input-long"
                placeholder="Ingredients"
              />
            </div>

            <div className="create__form-div">
              <label className="create__form-tag">Tips</label>
              <input
                type="text"
                value={newForm.tips}
                onChange={handleChange}
                name="tips"
                className="create__form-input"
                placeholder="Tips"
              />
            </div>

            <input
              className="recipe__button primary"
              type="submit"
              value="Add Recipe"
            />
          </form>
        </article>
      </section>
    </>
  );
}

export default Create;
