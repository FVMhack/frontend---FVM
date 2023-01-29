import React from 'react'

const Sidebar = () => {
    return (
      <div className="sidebar">
        <h3>Menu</h3>
        <ul>
          <li>Dashboard</li>
          <li>API Key</li>
          <li>Collection</li>
          <li>Gateway</li>
        </ul>
        
        <button>+ Add New</button>
      </div>
    );
  };
  
  export default Sidebar;