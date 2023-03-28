import './footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="desktop container">
                <span className="footer__copy">
                    &#169; 2023 Crave Craft. All rights reserved. 
                </span>
            </div>

            <nav className="container">
                <ul>
                    <li>
                        <Link to="/" aria-label="Link to Home page"><i class='bx bxs-home'></i></Link>
                    </li>
                    <li>
                        <Link to="#" aria-label="Link to Favorites page"><i class='bx bx-heart'></i></Link>
                    </li>
                    <li>
                        <Link to="/recipes" aria-label="Link to Recipes page"><i class='bx bx-search'></i></Link>
                    </li>
                    <li>
                        <Link to="#" aria-label="Link to User page"><i class='bx bx-user-circle'></i></Link>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;