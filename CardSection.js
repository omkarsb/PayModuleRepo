// CardSection.js
import React from 'react';
import {CardElement} from 'react-stripe-elements';
import './CardSection.css'

class CardSection extends React.Component {
  render() {
    return (
      <div className="CardLayout">
        <CardElement style={{base: {fontSize: '18px'}}} />
      </div>
    );
  }
};

export default CardSection;