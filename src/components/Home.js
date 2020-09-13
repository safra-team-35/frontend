import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalDescription from './ModalDescription';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <Link
        to="/description"
        className="btn-floating btn-large waves-effect waves-light indigo"
      >
        <i className="material-icons">camera_alt</i>
      </Link>

      {isModalOpen && <ModalDescription onClose={handleClose} />}
    </div>
  );
}
