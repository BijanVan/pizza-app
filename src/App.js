import React, { PureComponent } from 'react';

import PizzaButton from './components/PizzaButton';
import PizzaName from './components/PizzaName';
import ToppingsSelector from './components/ToppingsSelector';

import './App.css';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      pizzas: [
        { name: 'New Yorker', toppings: ['Bacon', 'Pepperoni', 'Ham', 'Mushrooms'] },
        { name: 'Hot & Spicy', toppings: ['Jalapenos', 'Herbs', 'Pepperoni', 'Chicken'] },
        { name: 'Hawaiian', toppings: ['Ham', 'Pineapple', 'Sweetcorn'] },
      ],
      toppings: ['Bacon', 'Pepperoni', 'Mushrooms', 'Herbs', 'Chicken', 'Pineapple', 'Ham', 'Jalapenos'],
      pizzaName: {
        value: '',
        touched: false,
        valid: true,
      },
      toppingsSelector: {
        value: [],
        touched: false,
        valid: true,
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputTouched = this.handleInputTouched.bind(this);
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
      [name]: {
        ...prevState[name],
        value: value,
        valid: this.isFormElementValid(name, value),
      },
    }));
  }

  render() {
    return (
      <div className="App">
        <form>
          <ToppingsSelector
            isValid={this.state.toppingsSelector.valid}
            toppings={this.state.toppings}
            selected={this.state.toppingsSelector.value}
            onSelect={this.handleInputChange}
          />
          <PizzaName isValid={this.state.pizzaName.valid} onChange={this.handleInputChange} onBlur={this.handleInputTouched} />
          <PizzaButton isEnable={false} onClick={e => console.log(e.target)}>Add pizza</PizzaButton>
        </form>
      </div>
    );
  }
}

export default App;
