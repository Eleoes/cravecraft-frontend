import { Link } from 'react-router-dom';
import "./home.scss";
import CCPhone from "../../assets/images/CC_Phone.png"

const Home = () => {
    return (
        <section className="section"> 
            <article className="container">
                <div className="home__content grid">
                    <div className="home__welcome">
                        <h1 className="home__intro">Cooking is more than just a meal, it's a <span>Craft</span> !</h1>
                        <p className="home__description">Crave Craft is a cooking lifestyle app designed to further enhance the educational relationship between people and the art of cooking.</p>
                        {/* TODO: redirect to user signup page */}
                        <Link to="/recipes">
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