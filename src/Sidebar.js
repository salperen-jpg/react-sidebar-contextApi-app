import React from 'react';
import { links } from './data';
import { useGlobalContext } from './context';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  //show-sidebar
  return (
    <div className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}  `}>
      <div className='sidebar-header'>
        <div className='my-logo'>
          <span className='logo'>Salih</span>
        </div>

        <button className='close-btn' onClick={closeSidebar}>
          <i className='fas fa-times'></i>
        </button>
      </div>
      <div className='menu-links'>
        <ul className='links'>
          {links.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                  <span>{text}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
