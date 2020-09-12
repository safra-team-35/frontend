import React from 'react';
import Breadcrumb from '../Breadcrumb';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Cards from '../paymentMethods/Cards';

export default function Payment() {
  return (
    <div>
      <Navbar />
      <Breadcrumb path="/payment" />

      <Cards />

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
          to="/description"
          className="btn btn-large waves-effect waves-light red col s6"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <i className="material-icons">chevron_left</i>
          <span>Voltar</span>
        </Link>

        <Link
          to="/address"
          className="btn btn-large waves-effect waves-light red col s6"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <span>Próximo</span>
          <i className="material-icons">chevron_right</i>
        </Link>
      </div>
    </div>
  );
}
