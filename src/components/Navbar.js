import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="navbar">
    <nav>
      <h1>Book Store</h1>
      <Link to="/">BOOKS </Link>
      <Link to="/categories">CATEGORIES</Link>
    </nav>
    <i className="bi bi-person-fill profile" />
  </header>
);

export default Navbar;
