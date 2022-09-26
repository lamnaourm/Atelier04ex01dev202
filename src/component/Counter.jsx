import { Component } from "react";
import "./counter.css";

function Valeur({value}) {
  return (
    <div className="valeur">
      <h1 className={value >= 0 ? "green" : "red"}>
        {value}
      </h1>
    </div>
  );
}

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.incrementer = this.incrementer.bind(this);
    this.decrementer = this.decrementer.bind(this);
    this.initialiser = this.initialiser.bind(this);
  }

  incrementer() {
    this.setState({ counter: this.state.counter + 1 });
  }

  decrementer() {
    this.setState({ counter: this.state.counter - 1 });
  }

  initialiser() {
    this.setState({ counter: 0 });
  }
  render() {
    return (
      <div className="counter">
        <Valeur value={this.state.counter} />
        <div className="buttons">
          <input type="button" value="Incrementer" onClick={this.incrementer} />
          <input type="button" value="Decrementer" onClick={this.decrementer} />
          <input type="button" value="Initialiser" onClick={this.initialiser} />
        </div>
      </div>
    );
  }
}

export default Counter;
