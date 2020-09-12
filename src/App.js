import React from 'react';
import Navbar from './components/Navbar';

import M from 'materialize-css';
import Home from './components/Home';

export default function App() {
  React.useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}
