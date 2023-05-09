import { Link } from 'react-router-dom';
import { logout } from '../../firebase';

const Navigation = () => {
    return (
        <nav className="container" role="navigation" aria-label="Main">
            <Link to="/" className="nav__logo">Crave Craft</Link>
            <ul className="nav__list grid">
                <li className="nav__item">
                    <Link to="/about" className="nav__link">About</Link>
                </li>
                <li className="nav__item">
                    <Link to="/recipes" className="nav__link">Recipes</Link>
                </li>
                <li className="nav__item">
                    <Link onClick={logout} className="nav__link">Logout</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;