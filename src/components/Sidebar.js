import React from 'react';

const Sidebar = () => {
  return (
    <aside className="d-none d-md-block col-md-3 bg-light p-3">
      <h2>Sidebar</h2>
      <ul className="list-unstyled">
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
