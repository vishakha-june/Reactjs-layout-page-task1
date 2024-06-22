import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary text-white p-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1>React.js and Bootstrap v5 dynamic and Responsive layout page</h1>
        <nav className="d-none d-md-block">
          <ul className="list-inline">
            <li className="list-inline-item">Home</li>
            <li className="list-inline-item">About</li>
            <li className="list-inline-item">Contact</li>
          </ul>
        </nav>
        <button className="d-block d-md-none btn btn-outline-light">Menu</button>
      </div>
    </header>
  );
};

export default Header;
