import './RecipeDetail.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = ({ recipe, updateRecipe }) => {

    const { id } = useParams();
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

    // Use useEffect to update the recipe prop whenever formData changes
    useEffect(() => {
        updateRecipe(formData, id);
    }, [formData]);

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
    
    return (
        <section className="section">
            <article className="container">
                <h1 className="section__title">{formData.title}</h1>
                {/* TODO: Move buttons to dropdown menu and place on corner of recipe.  */}
                <div className="recipe__buttons-wrapper">
                    {editMode ? (
                        <button className="recipe__button" onClick={handleSubmit}>Submit</button>
                    ) : (
                        <button className="recipe__button" onClick={() => setEditMode(true)}><i className='bx bxs-edit'></i></button>
                    )}
                    <button className="recipe__button"><i className='bx bxs-trash' ></i></button>
                </div>

                <div className="recipe__wrapper">
                    <div className="recipe__image">
                        <img src={formData.image} alt={formData.title} />
                    </div>
                    <div className="recipe__details">
                        <div className="recipe__info">
                            <span className="recipe__subtitle">General Info</span>
                            <ul>
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
                                <li>
                                    <i className='bx bx-time'></i> <span className="recipe__label">Cooking time: </span>{recipe.cookingTime}
                                </li>
                                <li>
                                    <i className='bx bx-signal-5'></i> <span className="recipe__label">Skill level: </span>{recipe.skillLevel}
                                </li>
                                <li>
                                    <i className='bx bxs-dish'></i> <span className="recipe__label">Makes: </span>{recipe.makes}
                                </li>
                            </ul>

                            {/* TODO: Change Schema to make Ingredients mappable */}
                            <span className="recipe__subtitle">Ingredients</span>
                            <ul>
                                <li>{recipe.ingredients}</li>
                            </ul>

                            {/* TODO: Change Schema to make Tips mappable */}
                            <span className="recipe__subtitle">Tips for this recipe</span>
                            <ul>
                                <li>{recipe.tips}</li>
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