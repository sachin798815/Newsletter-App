import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <nav>
      <h2>Newsletter App</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
