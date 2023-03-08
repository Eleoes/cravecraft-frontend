const Navigation = () => {
    return (
        <nav className='container'>
            <a href="/" className="nav__logo">Crave Craft</a>
            <div className="nav__menu">
                <ul className="nav__list grid">
                    <li className="nav__item" id="nav-home">
                        <a href="/" className="nav__link">
                            Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="/about" className="nav__link">
                            About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="/recipes" className="nav__link">
                            Recipes
                        </a>
                    </li>
                </ul>
                <i className="nav__close">X</i>
            </div>
            <div className="nav__toggle">
                <i>=</i>
            </div>
        </nav>
    )
}

export default Navigation;