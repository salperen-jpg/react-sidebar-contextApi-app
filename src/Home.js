import React from 'react';

import { useGlobalContext } from './context';

const Home = () => {
  const { openModal, openSidebar } = useGlobalContext();

  return (
    <main>
      <button className='sidebar-toggle' onClick={openSidebar}>
        <i className='fas fa-bars'></i>
      </button>
      <button className='primary-btn' onClick={openModal}>
        Show modal
      </button>
    </main>
  );
};

export default Home;
