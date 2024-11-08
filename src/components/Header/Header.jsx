import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <img src="" alt="" />
        </Link>
      </div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
      </nav>
    </header>
  );
};

export default Header;
