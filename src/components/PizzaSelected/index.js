import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import cross from '../../assets/cross.svg';
import check from '../../assets/check.svg';

const propTypes = {
  toppings: PropTypes.arrayOf(PropTypes.string),
  onRemove: PropTypes.func,
};

const defaultProps = {
  toppings: [],
  onRemove() {},
};

const PizzaSelected = ({ toppings, onRemove }) => {
  function handleClick(event) {
    const index = toppings.indexOf(event.target.id);
    if (index >= 0) event.target.value = [...toppings.slice(0, index), ...toppings.slice(index + 1)];
    else event.target.value = [...toppings, event.target.id];
    event.target.name = 'toppingsSelector';
    onRemove(event);
  }

  return (
    <div className="PizzaSelected">
      {toppings.length > 0 ? null : <div className="PizzaSelected-empty">Select toppings to create pizza</div>}
      <div className="PizzaSelected-list">
        {toppings.map(topping => (
          <div key={topping} className="PizzaSelected-item">
            <img src={check} alt="check" />
            {topping}
            <button type="button" onClick={handleClick}>
              <img id={topping} src={cross} alt="cross" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

PizzaSelected.propTypes = propTypes;
PizzaSelected.defaultProps = defaultProps;

export default PizzaSelected;
