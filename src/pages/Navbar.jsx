import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <NavLink to="/" className="navcontent">Logo</NavLink>
            </div>

            <div className="menulinks">
                <NavLink to="/" className="navcontent">Home</NavLink>
                <NavLink to="/about" className="navcontent">About</NavLink>
                <NavLink to="/product" className="navcontent">Product</NavLink>
                <NavLink to="/contact" className="navcontent">Contact</NavLink>
            </div>

            <div>
                <NavLink to="/login" className="navcontent">Login</NavLink>
            </div>
        </div>
    )
}


export default Navbar;