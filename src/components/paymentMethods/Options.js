import React, { useState } from 'react';
import Card from './Card';

export default function Options(children) {
  const [paymentMethod, setPaymentMethod] = useState('1');
  const handlePaymentMethodChange = (newPaymentMethod) => {
    setPaymentMethod(newPaymentMethod);
    children.onOptionChange(newPaymentMethod);
  };

  return (
    <div style={styles.options}>
      {children.options.map((option) => {
        return (
          <div
            className="radio-btn-container"
            style={styles.card}
            key={option.id}
          >
            <Card
              currentPaymentMethod={paymentMethod}
              onPaymentMethodChange={handlePaymentMethodChange}
            >
              {option}
            </Card>
          </div>
        );
      })}
    </div>
  );
}

const styles = {
  options: {
    height: '70%',
    width: '100%',
    position: 'absolute',
    // backgroundColor: 'yellow',
  },
  card: { display: 'flex', flexDirection: 'row', justifyContent: 'center' },
};
