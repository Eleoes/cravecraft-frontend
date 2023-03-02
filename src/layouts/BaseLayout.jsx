import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BaseLayout = () => {
    return (
        <>
        <Header />
        <main>
            {/* The main section of our website will be different based on each Page */}
            <Outlet />
        </main>
        <Footer />
        </>
        
    )
}

export default BaseLayout;