import React from 'react';
import Breadcrumb from '../Breadcrumb';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import { formatNumber } from '../../helpers/formatHelpers';
import { useState, useEffect } from 'react';

export default function Description() {
  const purchase = {
    vendor: 'Lojas Americanas',
    vendorDescription: 'Vendedor:',
    category: 'Entretenimento',
    categoryDescription: 'Categoria:',
    value: 199.99,
    valueDescription: 'Valor:',
    freightCharge: 23,
    freightChargeDescription: 'Frete:',
    paymentMethod: window.localStorage.getItem('paymentMethod'),
    paymentMethodDescription: window.localStorage.getItem(
      'paymentMethodDescription'
    ),
    address: window.localStorage.getItem('address'),
    addressDescription: window.localStorage.getItem('addressDescription'),
  };

  const [isChecked, setIsChecked] = useState(false);
  const [style, setStyle] = useState();
  const [buttonStyle, setButtonStyle] = useState({
    backgroundColor: 'gray',
  });
  const [icon, setIcon] = useState('');

  useEffect(() => {
    if (isChecked) {
      setStyle({
        backgroundColor: 'lightgray',
        border: '1px solid gray',
        width: '20px',
        minHeight: '20px',
        maxHeight: '20px',
      });
      setIcon('X');
      setButtonStyle({ backgroundColor: '#2F3A72', color: 'rgb(195,172,108)' });
    } else {
      setStyle({
        backgroundColor: 'white',
        border: '1px solid gray',
        width: '20px',
        minHeight: '20px',
        maxHeight: '20px',
      });
      setIcon('');
      setButtonStyle({ backgroundColor: 'gray', color: 'white' });
    }
  }, [isChecked]);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  const handleLinkClick = (e) => {
    if (!isChecked) e.preventDefault();
  };

  return (
    <div>
      <Navbar />
      <Breadcrumb path="/description" />

      <div
        style={{
          position: 'absolute',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifySelf: 'center',
            width: '80%',
            marginLeft: '10%',
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
              value={`${formatNumber(
                purchase.value + purchase.freightCharge
              )} (${formatNumber(purchase.value)} + ${formatNumber(
                purchase.freightCharge
              )} de entrega)`}
            />
            <label htmlFor={purchase.valueDescription} className="active">
              {purchase.valueDescription}
            </label>
          </div>

          <div className="input-field">
            <input
              type="text"
              readOnly
              id={purchase.paymentMethodDescription}
              value={purchase.paymentMethod}
            />
            <label
              htmlFor={purchase.paymentMethodDescription}
              className="active"
            >
              {purchase.paymentMethodDescription}
            </label>
          </div>
          <div className="input-field">
            <input
              type="text"
              readOnly
              id={purchase.addressDescription}
              value={purchase.address}
            />
            <label htmlFor={purchase.addressDescription} className="active">
              {purchase.addressDescription}
            </label>
          </div>

          <div className="input-field">
            <input
              type="text"
              readOnly
              id={purchase.categoryDescription}
              value={purchase.category}
            />
            <label htmlFor={purchase.categoryDescription} className="active">
              {purchase.categoryDescription}
            </label>
          </div>

          <div>
            <a
              className="waves-effect waves-light"
              onClick={handleClick}
              style={style}
              id="checkbox"
            >
              <span
                style={{
                  marginLeft: '5px',
                  fontWeight: 'bold',
                  color: 'black',
                }}
              >
                {icon}
              </span>
              {/* <i className="material-icons">{icon}</i> */}
            </a>
            <label style={{ marginLeft: '5px' }}>
              Declaro que li os{' '}
              <a style={{ textDecoration: 'underline' }}>termos de uso</a> e
              concordo em compartilhar meus dados com{' '}
              <a style={{ textDecoration: 'underline' }}>{purchase.vendor}</a>
            </label>
            {/* <input
              id="checkbox"
              type="checkbox"
              onChange={handleClick}
              checked={isChecked}
            /> */}
            {/* <label htmlFor="checkbox" className="active">
              Declaro que li os{' '}
              <a style={{ textDecoration: 'underline' }}>termos de uso</a> e
              concordo em compartilhar meus dados com{' '}
              <a style={{ textDecoration: 'underline' }}>{purchase.vendor}</a>
            </label> */}
          </div>
        </div>
      </div>

      <div
        className="row"
        style={{
          height: '80%',
          width: '100%',
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
      >
        <Link
          to="/payment"
          className="btn btn-large waves-effect waves-light col s6"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            color: 'black',
            backgroundColor: 'lightgray',
          }}
        >
          <i className="material-icons">chevron_left</i>
          <span>Voltar</span>
        </Link>

        <Link
          to="/"
          onClick={handleLinkClick}
          className="btn btn-large waves-effect waves-light col s6"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            ...buttonStyle,
          }}
        >
          <span>Pagar</span>
          <i className="material-icons">done</i>
        </Link>
      </div>
    </div>
  );
}
