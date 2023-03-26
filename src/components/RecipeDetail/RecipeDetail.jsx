import './RecipeDetail.scss';
import { useState } from 'react';

const RecipeDetail = ({ recipe, updateRecipe }) => {

    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        title: recipe.title,
        image: recipe.image,
        prepTime: recipe.prepTime,
        cookingTime: recipe.cookingTime,
        skillLevel: recipe.skillLevel,
        makes: recipe.makes,
        ingredients: recipe.ingredients,
        tips: recipe.tips,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        updateRecipe(formData, recipe._id);
        setEditMode(false);
    };
    
    const handleCancel = () => {
        setFormData({
            title: recipe.title,
            image: recipe.image,
            prepTime: recipe.prepTime,
            cookingTime: recipe.cookingTime,
            skillLevel: recipe.skillLevel,
            makes: recipe.makes,
            ingredients: recipe.ingredients,
            tips: recipe.tips,
        });
        setEditMode(false);
    };

    return (
        <section className="section">
            <article className="container">
                <h1 className="section__title">{formData.title}</h1>
                {/* TODO: Move buttons to dropdown menu and place on corner of recipe.  */}
                <div className="recipe__buttons-wrapper">
                    {editMode ? (
                        <>
                        <button className="primary" onClick={handleSubmit}>Submit Changes</button>
                        <button className="secondary" onClick={handleCancel}>Cancel</button>
                        </>
                    ) : (
                        <>
                        <button className="primary" onClick={() => setEditMode(true)}><i className='bx bxs-edit'></i> Edit</button>
                        <button className="secondary"><i className='bx bxs-trash' ></i> Delete</button>
                        </>
                    )}
                </div>

                <div className="recipe__wrapper">
                    <div className="recipe__image">
                        <img src={formData.image} alt={formData.title} />
                    </div>
                    <div className="recipe__details">
                        <div className="recipe__info">
                            <span className="recipe__subtitle">General Info</span>
                            <ul>
                                {/* prepTime */}
                                <li>
                                    <i className='bx bx-restaurant'></i> <span className="recipe__label">Prep time: </span>{editMode ? (
                                        <input 
                                            type="text"
                                            name="prepTime"
                                            value={formData.prepTime}
                                            onChange={handleChange}
                                        />
                                    ) : ( formData.prepTime )}
                                </li>
                                {/* cookingTime */}
                                <li>
                                    <i className='bx bx-time'></i> <span className="recipe__label">Cooking time: </span>{editMode ? (
                                        <input
                                            type="text"
                                            name="cookingTime"
                                            value={formData.cookingTime}
                                            onChange={handleChange}
                                        />
                                    ) : (formData.cookingTime)}
                                </li>
                                {/* skillLevel */}
                                <li>
                                    <i className='bx bx-signal-5'></i> <span className="recipe__label">Skill level: </span>{editMode ? (
                                        <input
                                            type="text"
                                            name="skillLevel"
                                            value={formData.skillLevel}
                                            onChange={handleChange}
                                        />
                                    ): (formData.skillLevel)}
                                </li>
                                {/* makes */}
                                <li>
                                    <i className='bx bxs-dish'></i> <span className="recipe__label">Makes: </span>{editMode ? (
                                        <input
                                            type="text"
                                            name="makes"
                                            value={formData.makes}
                                            onChange={handleChange}
                                        />
                                    ): (formData.makes)}
                                </li>
                            </ul>

                            {/* TODO: Change Schema to make Ingredients mappable */}
                            <span className="recipe__subtitle">Ingredients</span>
                            <ul>
                                <li>{editMode ? (
                                    <input
                                        type="text"
                                        name="ingredients"
                                        value={formData.ingredients}
                                        onChange={handleChange}
                                    />
                                ) : (formData.ingredients)}
                                </li>
                            </ul>

                            {/* TODO: Change Schema to make Tips mappable */}
                            <span className="recipe__subtitle">Tips for this recipe</span>
                            <ul>
                                <li>{editMode ? (
                                    <input
                                        type="text"
                                        name="tips"
                                        value={formData.tips}
                                        onChange={handleChange}
                                    />
                                ) : (formData.tips)}
                                </li>
                            </ul>
                        </div>

                        <div className="recipe__instructions">
                            {/* TODO: Change Schema to make Instructions mappable */}
                            <span className="recipe__subtitle">Instructions</span>
                            <ol>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia error nulla fugit veritatis inventore ex nesciunt, aut modi nihil maiores animi impedit quidem laudantium. Libero earum aliquam consequuntur optio repellat.</li>
                                <li>Pending</li>
                                <li>Pending</li>
                                <li>Pending</li>
                                <li>Pending</li>
                                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatem provident praesentium sequi commodi laboriosam est! Quis enim esse iure molestiae cum, culpa dolores quo? Ab adipisci dolores assumenda doloremque!</li>
                                <li>Pending</li>
                                <li>Pending</li>
                                <li>Pending</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default RecipeDetail;