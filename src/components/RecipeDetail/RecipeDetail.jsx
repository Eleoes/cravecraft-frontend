import './RecipeDetail.scss';

const RecipeDetail = ({ recipe }) => {
    return (
        <section className="section">
            <article className="container">
                <h1 className="section__title">{recipe.title}</h1>
                <div className="recipe__wrapper">
                    <div className="recipe__image">
                        <img src={recipe.image} alt={recipe.title} />
                    </div>
                    <div className="recipe__details">
                        <div className="recipe__info">
                            <span className="recipe__subtitle">General Info</span>
                            <ul>
                                <li>
                                    <i class='bx bx-restaurant'></i> <span className="recipe__label">Prep time: </span>{recipe.prepTime}
                                </li>
                                <li>
                                    <i class='bx bx-time'></i> <span className="recipe__label">Cooking time: </span>{recipe.cookingTime}
                                </li>
                                <li>
                                    <i class='bx bx-signal-5'></i> <span className="recipe__label">Skill level: </span>{recipe.skillLevel}
                                </li>
                                <li>
                                    <i class='bx bxs-dish'></i> <span className="recipe__label">Makes: </span>{recipe.makes}
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