import React, { useState } from 'react';
import Breadcrumb from '../Breadcrumb';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Options from '../paymentMethods/Options';

export default function Payment() {
  const paymentMethods = [
    { id: '1', Bank: 'Safra', card: '001' },
    { id: '2', Bank: 'Bradesco', card: '02' },
    { id: '3', Bank: 'Itaú', card: '02' },
    { id: '4', Bank: 'NuBank', card: '02' },
    { id: '5', Bank: 'Banco do Brasil', card: '02' },
    // { id: '6', Bank: 'Banco do Brasil', card: '02' },
    // { id: '7', Bank: 'Banco do Brasil', card: '02' },
    // { id: '8', Bank: 'Banco do Brasil', card: '02' },
    // { id: '9', Bank: 'Banco do Brasil', card: '02' },
    // { id: '10', Bank: 'Banco do Brasil', card: '02' },
    // { id: '11', Bank: 'Banco do Brasil', card: '02' },
    // { id: '12', Bank: 'Banco do Brasil', card: '02' },
  ];

  const [selectedOption, setSelectedOption] = useState();

  const handleSelectedOptionChange = (newOption) => {
    console.log(newOption);
    setSelectedOption(newOption);
  };

  return (
    <div>
      <Navbar />
      <Breadcrumb path="/payment" />

      <Options
        options={paymentMethods}
        selectedOption={selectedOption}
        onOptionChange={handleSelectedOptionChange}
      ></Options>

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
          to="/address"
          className="btn btn-large waves-effect waves-light indigo col s6"
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
