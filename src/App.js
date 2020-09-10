import React, { useEffect } from 'react';
import Navbar from './components/Navbar';

import M from 'materialize-css';

export default function App() {
  React.useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div>
      <Navbar />
    </div>
  );
}
