import { useParams } from 'react-router-dom';
import RecipeDetail from '../../components/RecipeDetail/RecipeDetail';

const Recipe = (props) => {
    const { id } = useParams();
    const recipes = props.recipes;
    const recipe = recipes ? recipes.find((p) => p._id === id) : null;

    const loaded = () => {
        return (
            <RecipeDetail recipe={recipe} updateRecipe={props.updateRecipe}/>
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