import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

import { formatNumber } from '../helpers/formatHelpers';

Modal.setAppElement('#root');

export default function ModalEcommerce({ onClose }) {
  const handleKeyDown = (event) => {
    console.log(event);
    if (event.key === 'Escape') {
      onClose(null);
    }
  };

  return (
    <div className="center">
      <Modal
        isOpen={true}
        centered
        style={{
          overlay: {
            backgroundColor: 'rgba(0,0,0,0.6)',
            zIndex: 1000,
          },
          content: {
            width: '400px',
            height: '55%',
            margin: 'auto',
          },
        }}
      >
        <div style={styles.flexRow}>
          <span style={styles.title}>
            Leia o QR Code a seguir com o aplicativo SafraWallet:
          </span>
          <button
            className="z-depth-0 waves-effect waves-lights btn white dark-4"
            onClick={() => onClose(null)}
            style={{ color: 'black', fontSize: '10px' }}
          >
            <i className="material-icons" style={{ fontSize: '20px' }}>
              close
            </i>
          </button>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={'/qrcode.jpg'}
            alt="Qr Code"
            // width="150px"
            className="responsive-img"
          />
        </div>
      </Modal>
    </div>
  );
}

const styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '40px',
  },

  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
};
