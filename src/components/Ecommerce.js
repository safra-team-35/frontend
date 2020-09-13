import React, { useState } from 'react';
import NavbarEcommerce from './NavbarEcommerce';
import ModalEcommerce from './ModalEcommerce';

export default function Ecommerce() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <NavbarEcommerce />

      <div
        className="container"
        style={{
          marginTop: '50px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <a
          className="waves-effect waves-light btn "
          style={{
            backgroundColor: '#E60014',
            width: '40%',
            marginBottom: '20px',
          }}
        >
          <i class="material-icons">shopping_basket</i> Comprar
        </a>

        <a className="waves-effect waves-light" onClick={handleClick}>
          <img
            src={'/PagarCSafra.png'}
            alt="Logo Safra"
            width="150px"
            className="responsive-img"
          />
        </a>
      </div>

      {isModalOpen && <ModalEcommerce onClose={handleClose} />}
    </div>
  );
}
