import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import add from '../../assets/add.svg';

const propTypes = {
  children: PropTypes.node,
  isEnable: PropTypes.bool,
  onClick: PropTypes.func,
};

const defaultProps = {
  isEnable: true,
  onClick() {},
};

const PizzaButton = ({ children, isEnable, onClick }) => {
  return (
    <div className="PizzaButton">
      <button disabled={!isEnable} onClick={onClick}><img src={add} alt="Add" />{children}</button>
    </div>
  );
};

PizzaButton.propTypes = propTypes;
PizzaButton.defaultProps = defaultProps;

export default PizzaButton;
