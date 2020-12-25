import React from 'react';

const Nav = () => {
  return (
    <nav>
      <div className="nav-wrapper m1">
        <a href="/" className="brand-logo">
          Logo
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/">ToDo</a>
          </li>
          <li>
            <a href="/">Information</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
