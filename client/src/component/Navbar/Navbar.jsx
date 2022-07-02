import "./Navbar.css";
import { Link,  useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();


  const handleLogout = () => {
    navigate("/");
    localStorage.removeItem("user");
  };

  return (
    <div className="navbar">
      <div className="navContiner">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">BraaBooking</span>
        </Link>
        {user ? (
          <div>
            {user.username}
            <button className="logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <Link to="/login">
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
