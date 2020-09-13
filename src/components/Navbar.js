import React from 'react';

export default function Navbar() {
  return (
    <div>
      <nav>
        <div
          className="nav-wrapper"
          style={{ backgroundColor: 'rgb(14,19,44)' }}
        >
          <a href="#!" className="brand-logo">
            <img
              src={'/PagarCSafra.png'}
              alt="Logo Safra"
              width="150px"
              className="responsive-img"
            />
            {/* Safra */}
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li className="active">
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">Javascript</a>
            </li>
            <li>
              <a href="mobile.html">Mobile</a>
            </li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
        <li className="active">
          <a href="sass.html">Sass</a>
        </li>
        <li>
          <a href="badges.html">Components</a>
        </li>
        <li>
          <a href="collapsible.html">Javascript</a>
        </li>
        <li>
          <a href="mobile.html">Mobile</a>
        </li>
      </ul>{' '}
    </div>
  );
}
