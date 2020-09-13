import React from 'react';

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper" style={{ backgroundColor: '#E60014' }}>
          <a href="#!" className="brand-logo">
            Ecommerce
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>
    </div>
  );
}
