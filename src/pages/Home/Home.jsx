import "./home.scss";

const Home = ({ user }) => {
    return (
        <section className="section"> 
            <article className="container">
                <h1>Hello, {user.displayName} !</h1>
            </article>
        </section>
    )
}

export default Home;

