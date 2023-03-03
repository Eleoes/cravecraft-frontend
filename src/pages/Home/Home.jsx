import { Link } from 'react-router-dom';
import "./home.scss";

const Home = () => {
    return (
        <section className="section"> 
            <article className="container">
                <span>Welcome to</span>
                <h1 className="logo">Crave Craft</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas illum est atque. Nulla facilis perferendis ut, omnis eligendi consectetur totam. Minus, quo culpa! Ut numquam libero provident mollitia iure? Aspernatur!</p>
                <button className="primary">Get Started</button>
            </article>
        </section>
    )
}

export default Home;