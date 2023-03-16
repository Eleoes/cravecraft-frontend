import { useParams } from 'react-router-dom';

const Recipe = (props) => {
    const { id } = useParams();
    const recipes = props.recipes;
    const recipe = recipes ? recipes.find((p) => p._id === id) : null;

    const loaded = () => {
        return (
            <>
            <h1>{recipe.title}</h1>
            </>
        )
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            { recipe ? loaded() : loading() }
        </div>
    )
}

export default Recipe;