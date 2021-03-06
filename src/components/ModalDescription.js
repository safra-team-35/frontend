import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

import { formatNumber } from '../helpers/formatHelpers';

Modal.setAppElement('#root');

export default function ModalGrade({ selectedTransaction, onClose }) {
  const purchase = {
    vendor: 'Lojas Americanas',
    vendorDescription: 'Vendedor:',
    category: 'Entretenimento',
    categoryDescription: 'Categoria:',
    value: 199.99,
    valueDescription: 'Valor:',
  };
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = (event) => {
    console.log(event);
    if (event.key === 'Escape') {
      onClose(null);
    }
  };

  const handleClick = () => {
    onClose(null);
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
            width: '80%',
            height: '55%',
            margin: 'auto',
          },
        }}
      >
        <div style={styles.flexRow}>
          <span style={styles.title}>Deseja continuar a compra?</span>
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
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            marginTop: '2rem',
          }}
        >
          <div
            style={{
              height: '17rem',
            }}
          >
            <div className="input-field">
              <input
                type="text"
                readOnly
                id={purchase.vendorDescription}
                value={purchase.vendor}
              />
              <label htmlFor={purchase.vendorDescription} className="active">
                {purchase.vendorDescription}
              </label>
            </div>

            <div className="input-field">
              <input
                type="text"
                readOnly
                id={purchase.valueDescription}
                value={formatNumber(purchase.value)}
              />
              <label htmlFor={purchase.valueDescription} className="active">
                {purchase.valueDescription}
              </label>
            </div>

            {/* <div className="input-field">
              <input
                type="text"
                readOnly
                id={purchase.categoryDescription}
                value={purchase.category}
              />
              <label htmlFor={purchase.categoryDescription} className="active">
                {purchase.categoryDescription}
              </label>
            </div> */}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'flex-end',
          }}
        >
          <div style={Object.assign({}, styles.flexRow, styles.flexStart)}>
            <button
              className="waves-effect waves-lights btn"
              onClick={handleClick}
              style={styles.cancelar}
            >
              Cancelar
            </button>
          </div>
          <Link
            to="/address"
            className="waves-effect waves-lights btn"
            style={Object.assign(
              {},
              styles.flexRow,
              styles.flexStart,
              styles.proximo
            )}
          >
            Próximo
          </Link>
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
    justifyContent: 'space-between',
    marginBottom: '40px',
  },

  flexStart: {
    justifyContent: 'flex-start',
  },

  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },

  errorMessage: {
    marginLeft: '20px',
    color: 'red',
    fontWeight: 'bold',
  },

  cancelar: {
    color: 'black',
    backgroundColor: 'lightgray',
  },

  proximo: {
    color: 'rgb(195,172,108)',
    backgroundColor: '#2F3A72',
  },
};
