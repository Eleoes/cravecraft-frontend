import { Link } from 'react-router-dom';
import "./home.scss";
import CCPhone from "../../assets/images/CC_Phone.png"

const Home = () => {
    return (
        <section className="section"> 
            <article className="container">
                <div className="home__content grid">
                    <div className="home__welcome">
                        <span>Welcome to</span>
                        <h1 className="home__logo logo">Crave Craft</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas illum est atque. Nulla facilis perferendis ut, omnis eligendi consectetur totam. Minus, quo culpa! Ut numquam libero provident mollitia iure? Aspernatur!</p>
                        <Link to="/#">
                            <button className="home__button primary" >Get Started</button>
                        </Link>
                    </div>
                    <img className="home__img" src={CCPhone} alt="Crave Craft app on smartphone" />
                </div>
            </article>
        </section>
    )
}

export default Home;