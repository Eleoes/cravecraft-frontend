import { useState } from "react";

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
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newForm.title}
            onChange={handleChange}
            name="title"
            placeholder="title"
          />
          <input
            type="text"
            value={newForm.image}
            onChange={handleChange}
            name="image"
            placeholder="image"
          />
          <input
            type="text"
            value={newForm.prepTime}
            onChange={handleChange}
            name="prepTime"
            placeholder="prepTime"
          />
          <input
            type="text"
            value={newForm.cookingTime}
            onChange={handleChange}
            name="cookingTime"
            placeholder="cookingTime"
          />
          <input
            type="text"
            value={newForm.skillLevel}
            onChange={handleChange}
            name="skillLevel"
            placeholder="skillLevel"
          />
          <input
            type="text"
            value={newForm.makes}
            onChange={handleChange}
            name="makes"
            placeholder="makes"
          />
          <input
            type="text"
            value={newForm.ingredients}
            onChange={handleChange}
            name="ingredients"
            placeholder="ingredients"
          />
          <input
            type="text"
            value={newForm.tips}
            onChange={handleChange}
            name="tips"
            placeholder="tips"
          />
          <input type="submit" value="Add Recipe" />
        </form>
      </section>
    </>
  );
}

export default Create;
