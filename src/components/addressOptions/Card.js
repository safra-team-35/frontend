import React from 'react';

export default function Card({
  children,
  currentPaymentMethod,
  onPaymentMethodChange,
}) {
  const color =
    children.id === currentPaymentMethod
      ? {
          color: 'rgb(195,172,108)',
          fontWeight: 'bold',
          backgroundColor: '#2F3A72',
        }
      : { backgroundColor: 'lightgray', color: 'black' };

  const style = {
    ...color,
    marginLeft: '30px',
    marginRight: '30px',
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  };

  const handleClick = (event) => {
    onPaymentMethodChange(event.target.name);
  };

  return (
    <a
      className="z-depth-2 waves-effect waves-light btn"
      style={style}
      name={children.id}
      onClick={handleClick}
    >
      {/* {`${children.description} - ${children.type} ${children.name}, ${children.number}`} */}
      {`${children.street}, ${children.number} - ${children.zip_code}`}
    </a>
  );
}
