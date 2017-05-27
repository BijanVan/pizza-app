import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const propTypes = {
  isValid: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

const defaultProps = {
  isValid: true,
  value: '',
  onChange() {},
  onBlur() {},
};

const PizzaName = ({ isValid, value, onChange, onBlur }) => {
  return (
    <div className="PizzaName">
      <input name="pizzaName" type="text" value={value} placeholder="Pizza name, e.g. Blazin' hot" onChange={onChange} onBlur={onBlur} />
      {isValid ? null : <div className="PizzaName-error">Pizza name is required</div>}
    </div>
  );
};

PizzaName.propTypes = propTypes;
PizzaName.defaultProps = defaultProps;

export default PizzaName;
