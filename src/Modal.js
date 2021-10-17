import React from 'react';
import { useGlobalContext } from './context';
const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    // show-modal  modal show-modal
    <div className={`${isModalOpen ? 'modal show-modal' : 'modal '}`}>
      <div className='modal-contaianer'>
        <h1>This is my modal</h1>
        <button className='modal-close' onClick={closeModal}>
          <i className='fas fa-times'></i>
        </button>
      </div>
    </div>
  );
};

export default Modal;
