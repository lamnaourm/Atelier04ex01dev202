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
      pasInc : 1,
      pasDe : 1,
    };

    this.incrementer = this.incrementer.bind(this);
    this.decrementer = this.decrementer.bind(this);
    this.initialiser = this.initialiser.bind(this);
  }

  incrementer() {
    this.setState({ counter: this.state.counter + this.state.pasInc });
  }

  decrementer() {
    this.setState({ counter: this.state.counter - this.state.pasDe });
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

        <div className="pasIn">
            <h2>Pas d'incrementation : {this.state.pasInc}</h2>
            <input type="button" value="+1" onClick={() => this.setState({pasInc:1})} />
            <input type="button" value="+2" onClick={() => this.setState({pasInc:2})} />
            <input type="button" value="+3" onClick={() => this.setState({pasInc:3})} />
            <input type="button" value="+4" onClick={() => this.setState({pasInc:4})} />
        </div>

        <div className="pasDe">
            <h2>Pas de decrementation : {this.state.pasDe}</h2>
            <input type="button" value="-1" onClick={() => this.setState({pasDe:1})} />
            <input type="button" value="-2" onClick={() => this.setState({pasDe:2})} />
            <input type="button" value="-3" onClick={() => this.setState({pasDe:3})} />
            <input type="button" value="-4" onClick={() => this.setState({pasDe:4})} />
        </div>
      </div>
    );
  }
}

export default Counter;
