import React, { useState } from 'react';
import ModalDescription from './ModalDescription';

export default function Home() {
  window.localStorage.setItem('userId', 1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      style={{
        height: '90%',
        width: '100%',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
      }}
    >
      <div>
        <button
          className="btn-floating btn-large waves-effect waves-light indigo"
          onClick={handleClick}
        >
          <i className="material-icons">camera_alt</i>
        </button>
      </div>

      {isModalOpen && <ModalDescription onClose={handleClose} />}
    </div>
  );
}
