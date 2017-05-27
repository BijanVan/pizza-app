import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const propTypes = {
  isValid: PropTypes.bool,
  toppings: PropTypes.arrayOf(PropTypes.string),
  selected: PropTypes.arrayOf(PropTypes.string),
  onSelect: PropTypes.func,
  onBlur: PropTypes.func,
};

const defaultProps = {
  isValid: true,
  toppings: [],
  selected: [],
  onSelect() {},
  onBlur() {},
};

const ToppingsSelector = ({ isValid, toppings, selected, onSelect, onBlur }) => {
  function handleClick(event) {
    const index = selected.indexOf(event.target.id);
    if (index >= 0) event.target.value = [...selected.slice(0, index), ...selected.slice(index + 1)];
    else event.target.value = [...selected, event.target.id];
    event.target.name = 'toppingsSelector';
    onSelect(event);
    onBlur(event);
  }

  return (
    <div className="ToppingsSelector">
      {toppings.map(topping => (
        <div
          key={topping}
          id={topping}
          className={'ToppingsSelector-item' + (selected.includes(topping) ? ' active' : '')}
          onClick={handleClick}
        >
          {topping}
        </div>
      ))}

      {isValid ? null : <div className="ToppingsSelector-error">Select at least 1 topping</div>}
    </div>
  );
};

ToppingsSelector.propTypes = propTypes;
ToppingsSelector.defaultProps = defaultProps;

export default ToppingsSelector;
