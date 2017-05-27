import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const propTypes = {
  pizzas: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      toppings: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
};
const defaultProps = {
  pizzas: [],
};

const PizzaList = ({ pizzas }) => {
  return (
    <div className="PizzaList">
      <h2>Store inventory</h2>
      <div>
        {pizzas.map(pizza => (
          <div key={pizza.name} className="PizzaList-item">
            <p>{pizza.name}</p>
            <span>{pizza.toppings.join(', ')}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

PizzaList.PropTypes = propTypes;
PizzaList.defaultProps = defaultProps;

export default PizzaList;
