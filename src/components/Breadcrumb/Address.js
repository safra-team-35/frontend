import React, { useState } from 'react';
import Breadcrumb from '../Breadcrumb';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Options from '../addressOptions/Options';

export default function Address() {
  const adressOptions = [
    {
      id: '1',
      state: 'SP',
      type: 'Avenida',
      name: 'Paulista',
      number: '2064',
      description: 'Casa',
    },
    {
      id: '2',
      state: 'SP',
      type: 'Rua',
      name: 'Bela Cintra',
      number: '2182',
      description: 'Trabalho',
    },
  ];

  const [selectedOption, setSelectedOption] = useState();

  const handleSelectedOptionChange = (newOption) => {
    setSelectedOption(newOption);

    for (let i = 0; i < adressOptions.length; i++) {
      if (newOption === adressOptions[i].id) {
        window.localStorage.setItem(
          'address',
          `${adressOptions[i].description}-${adressOptions[i].type} ${adressOptions[i].name}, ${adressOptions[i].number}`
        );
      }
    }

    window.localStorage.setItem('addressDescription', 'Endereço de entrega:');
  };

  return (
    <div>
      <Navbar />
      <Breadcrumb path="/address" />

      <div>
        <Link
          className="btn-floating btn waves-effect waves-light indigo right"
          style={{
            marginTop: '30%',
            marginRight: '45%',
          }}
        >
          <i className="material-icons">add</i>
        </Link>
      </div>

      <Options
        options={adressOptions}
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
          to="/"
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
          <span>Cancelar</span>
        </Link>

        <Link
          to="/payment"
          className="btn btn-large waves-effect waves-light  col s6"
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
