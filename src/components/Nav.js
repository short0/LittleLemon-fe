import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <nav>
                <ul>
                    <Link to="/" className="nav-item">Home</Link>
                    <Link to="/about" className="nav-item">About</Link>
                    <Link to="/menu" className="nav-item">Menu</Link>
                    <Link to="/reservations" className="nav-item">Reservations</Link>
                    <Link to="/order-online" className="nav-item">Order Online</Link>
                    <Link to="/login" className="nav-item">Login</Link>
                </ul>
            </nav>
            
        </div>
    )
};

export default Nav;