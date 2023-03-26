import { Link } from 'react-router-dom';
import "./about.scss";

const About = () => {
    return (
        <section className="section">
        <article className="container">
            <div className="about__content grid">
            <div className="about__description">
                <h1 className="about__title">About CraveCraft</h1>
                <p className="about__text">
                CraveCraft is a cooking lifestyle app designed to help users learn more about the art of cooking. Our app offers a wide range of recipes and cooking tips, as well as a community of food enthusiasts to share your culinary creations with. Whether you're a seasoned chef or just starting out, CraveCraft has something for everyone!
                </p>
            </div>
            <div className="about__developers">
                <h2 className="about__subtitle">Developers</h2>
                <ul className="about__list">
                <li><Link to="https://www.cassidycheang.com/">Cassidy Cheang</Link></li>
                <li><Link to="https://github.com/hummingbirdcreative">Christine Graybosch</Link></li>
                <li><Link to="https://github.com/eleoes">Leonardo Escaroz</Link></li>
                </ul>
            </div>
            </div>
        </article>
        </section>
    )
}

export default About;