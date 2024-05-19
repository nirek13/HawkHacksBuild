import { NavLink, Link } from 'react-router-dom';
import BrainImage from '../../src/assets/img.png';
import '../Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="logo">
                    <img src={BrainImage} alt="Brain Matter Logo" />
                    <span>Brain Matter</span>
                </Link>
                <div className="menu" id="navbar-default">
                    <ul className="nav-links">
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/team">The Team</Link>
                        </li>
                        <li>
                            <Link to="/brain">Your Brain</Link>
                        </li>
                        <li>
                            <Link to="/learn">Chatbot</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
