import React, { PureComponent } from 'react';

import PizzaButton from './components/PizzaButton';
import PizzaName from './components/PizzaName';
import ToppingsSelector from './components/ToppingsSelector';
import PizzaSelected from './components/PizzaSelected';
import PizzaList from './components/PizzaList';

import './App.css';
import logo from './assets/logo.svg';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isFormPristine: true,
      pizzas: [
        { name: 'New Yorker', toppings: ['Bacon', 'Pepperoni', 'Ham', 'Mushrooms'] },
        { name: 'Hot & Spicy', toppings: ['Jalapenos', 'Herbs', 'Pepperoni', 'Chicken'] },
        { name: 'Hawaiian', toppings: ['Ham', 'Pineapple', 'Sweetcorn'] },
      ],
      toppings: ['Bacon', 'Pepperoni', 'Mushrooms', 'Herbs', 'Chicken', 'Pineapple', 'Ham', 'Jalapenos'],
      pizzaName: {
        value: '',
        touched: false,
        valid: false,
      },
      toppingsSelector: {
        value: [],
        touched: false,
        valid: false,
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputTouched = this.handleInputTouched.bind(this);
    this.handleAddingPizza = this.handleAddingPizza.bind(this);
  }

  isFormElementValid(name, value) {
    switch (name) {
      case 'pizzaName':
        return value === '' ? false : true;
      case 'toppingsSelector':
        return value.length === 0 ? false : true;
      default:
        return true;
    }
  }

  handleInputTouched(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (this.state[name].touched) return;

    this.setState(prevState => ({
      isFormPristine: false,
      [name]: {
        ...prevState[name],
        touched: true,
        valid: this.isFormElementValid(name, value),
      },
    }));
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState(prevState => ({
      isFormPristine: false,
      [name]: {
        ...prevState[name],
        value: value,
        valid: this.isFormElementValid(name, value),
      },
    }));
  }

  resetForm() {
    this.setState({
      isFormPristine: true,
      pizzaName: {
        value: '',
        touched: false,
        valid: false,
      },
      toppingsSelector: {
        value: [],
        touched: false,
        valid: false,
      },
    });
  }

  handleAddingPizza(event) {
    event.preventDefault();
    const pizza = { name: this.state.pizzaName.value, toppings: this.state.toppingsSelector.value };
    this.setState(prevState => ({
      pizzas: [...prevState.pizzas, pizza],
    }));
    this.resetForm();
  }

  render() {
    const isFormValid = this.state.pizzaName.valid && this.state.toppingsSelector.valid && !this.state.isFormPristine;
    return (
      <div className="App">
        <div className="App-title">
          <h1>
            <img src={logo} alt="logo" />
            Pizza Creator
          </h1>
        </div>
        <div className="App-panes">
          <form className="App-form">
            <ToppingsSelector
              isValid={this.state.toppingsSelector.valid || !this.state.toppingsSelector.touched || this.state.isFormPristine}
              toppings={this.state.toppings}
              selected={this.state.toppingsSelector.value}
              onSelect={this.handleInputChange}
              onBlur={this.handleInputTouched}
            />
            <PizzaName
              isValid={this.state.pizzaName.valid || !this.state.pizzaName.touched || this.state.isFormPristine}
              value={this.state.pizzaName.value}
              onChange={this.handleInputChange}
              onBlur={this.handleInputTouched}
            />
            <PizzaSelected toppings={this.state.toppingsSelector.value} onRemove={this.handleInputChange} />
            <PizzaButton isEnable={isFormValid} onClick={this.handleAddingPizza}>Add pizza</PizzaButton>
          </form>
          <PizzaList pizzas={this.state.pizzas} />
        </div>
      </div>
    );
  }
}

export default App;
