import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const propTypes = {
  isValid: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

const defaultProps = {
  isValid: true,
  onChange() {},
  onBlur() {},
};

const PizzaName = props => {
  const { isValid, onChange, onBlur } = props;

  return (
    <div className="PizzaName">
      <input name="pizzaName" type="text" placeholder="Pizza name, e.g. Blazin' hot" onChange={onChange} onBlur={onBlur} />
      {isValid ? null : <div className="PizzaName-error">Pizza name is required</div>}
    </div>
  );
};

PizzaName.propTypes = propTypes;
PizzaName.defaultProps = defaultProps;

export default PizzaName;
