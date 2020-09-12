import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
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
        // style={{
        //   display: 'flex',
        //   justifyContent: 'center',
        //   alignSelf: 'flex-end',
        // }}
      >
        <i className="material-icons">camera_alt</i>
      </Link>
    </div>
  );
}
