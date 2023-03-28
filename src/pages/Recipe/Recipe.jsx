import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import RecipeDetail from '../../components/RecipeDetail/RecipeDetail';

const Recipe = (props) => {
    const { id } = useParams();
    const recipes = props.recipes;
    const recipe = recipes ? recipes.find((p) => p._id === id) : null;

    // TODO: Figure out why we need to implement this scroll to set the default starting point to the top of the recipe
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const loaded = () => {
        return (
            <RecipeDetail 
                recipe={recipe} 
                updateRecipe={props.updateRecipe}
                deleteRecipe={props.deleteRecipe}
            />
        )
    }

    const loading = () => {
        // TODO: create a Loading component
        return <h1>Loading...</h1>
    }

    return (
        <div>
            { recipe ? loaded() : loading() }
        </div>
    )
}

export default Recipe;