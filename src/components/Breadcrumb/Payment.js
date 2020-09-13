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
  ];

  const [selectedOption, setSelectedOption] = useState();

  const handleSelectedOptionChange = (newOption) => {
    setSelectedOption(newOption);

    for (let i = 0; i < paymentMethods.length; i++) {
      if (newOption === paymentMethods[i].id) {
        window.localStorage.setItem(
          'paymentMethod',
          `Cartão de Crédito ${paymentMethods[i].Bank}`
        );
      }
    }

    window.localStorage.setItem(
      'paymentMethodDescription',
      'Método de pagamento:'
    );
  };

  return (
    <div>
      <Navbar />
      <Breadcrumb path="/payment" />

      <div>
        <Link
          className="btn-floating btn waves-effect waves-light indigo right"
          style={{
            marginTop: '60%',
            marginRight: '45%',
          }}
        >
          <i className="material-icons">add</i>
        </Link>
      </div>

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
          to="/address"
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
          to="/description"
          className="btn btn-large waves-effect waves-light col s6"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            color: 'rgb(195,172,108)',
            backgroundColor: '#2F3A72',
          }}
        >
          <span>Próximo</span>
          <i className="material-icons">chevron_right</i>
        </Link>
      </div>
    </div>
  );
}
