import { useState } from "react";

function Create(props) {
  //state to hold form data
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
  // handleChange function for form
  const handleChange = (event) => {
    setNewForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createRecipes(newForm);
    setNewForm({
      title: "",
      image: "",
      prepTime: "",
      cookingTime: "",
      skillLevel: "",
      makes: "",
      ingredients: "",
      tips: "",
    });
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.prepTime}
          name="prep time"
          placeholder="prep time"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.cookingTime}
          name="cooking time"
          placeholder="cooking time"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.skillLevel}
          name="skillLevel"
          placeholder="skill level"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.makes}
          name="makes"
          placeholder="makes"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.ingredients}
          name="ingredients"
          placeholder="ingredients"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.tips}
          name="tips"
          placeholder="tips"
          onChange={handleChange}
        />
        <input type="submit" value="Create Recipe" />
      </form>
    </section>
  );
}

export default Create;
