import {NavLink} from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper m1">
        <NavLink to="/" className="brand-logo">
          React + TypeScript
        </NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">ToDo</NavLink>
          </li>
          <li>
            <NavLink to="/about">Information</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
