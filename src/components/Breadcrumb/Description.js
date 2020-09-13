import React from 'react';
import Breadcrumb from '../Breadcrumb';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

export default function Description() {
  return (
    <div>
      <Navbar />
      <Breadcrumb path="/description" />

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
          className="btn btn-large waves-effect waves-light '#2F3A72' col s6"
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
          to="/"
          className="btn btn-large waves-effect waves-light indigo col s6"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <span>Conluir</span>
          <i className="material-icons">done</i>
        </Link>
      </div>
    </div>
  );
}
