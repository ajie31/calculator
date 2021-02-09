import React, { Component } from "react";
import ButtonPanel from "./component/buttonPanel";
import Display from "./component/display";

class Apps extends Component {
  state = {
    result: "0",
    display: "0",
    buttons: [
      { id: "zero", value: "0", type: "num" },
      { id: "one", value: "1", type: "num" },
      { id: "two", value: "2", type: "num" },
      { id: "three", value: "3", type: "num" },
      { id: "four", value: "4", type: "num" },
      { id: "five", value: "5", type: "num" },
      { id: "six", value: "6", type: "num" },
      { id: "seven", value: "7", type: "num" },
      { id: "eight", value: "8", type: "num" },
      { id: "nine", value: "9", type: "num" },
      { id: "equals", value: "=", type: "eq" },
      { id: "add", value: "+", type: "operator" },
      { id: "subtract", value: "-", type: "operator" },
      { id: "multiply", value: "*", type: "operator" },
      { id: "divide", value: "/", type: "operator" },
      { id: "decimal", value: ".", type: "dec" },
      { id: "clear", value: "AC", type: "clr" },
    ],
  };
  isDec = new RegExp("[.]");
  isNull = new RegExp("^$|^[0]");
  isOperator = new RegExp("^[+*-/]|[+*-/]$");
  isDoubeOps = new RegExp("([+-/*]{2})$");
  isStartZero = new RegExp("^[0]");

  handleDecimal = () => {
    let display = this.state.display;
    let result = this.state.result;
    if (!this.isDec.test(result)) {
      if (this.isNull.test(result)) {
        result = "0.";
        display = result;
      } else {
        result += ".";
        display += ".";
      }
    }
    this.setState({
      display,
      result,
    });
  };

  handleResult = () => {
    let result = eval(this.state.display);
    this.setState({
      display: result,
      result,
    });
  };
  handleZero = () => {
    let display = this.state.display;
    let result = this.state.result;
    if (!this.isStartZero.test(display) || this.isDec.test(display)) {
      display += "0";
      result += "0";
    }
    this.setState({
      display,
      result,
    });
  };
  handleButton = (val) => {
    let display = this.state.display;
    let result = this.state.result;
    if (this.isNull.test(display) && !this.isDec.test(display)) {
      display = val;

      result = val;
    } else {
      if (this.isOperator.test(result) && !this.isDec.test(result)) {
        result = val;
      } else {
        result += val;
      }
      display += val;
    }
    this.setState({
      display,
      result,
    });
  };
  handleOperator = (val) => {
    let display = this.state.display;
    let result = this.state.result;

    if (this.isNull.test(display)) {
      display = val;
    } else {
      if (this.isOperator.test(result)) {
        if (this.isDoubeOps.test(display)) {
          display = display.slice(0, -2);
        } else if (val !== "-" || result === "-") {
          display = display.slice(0, -1);
        }
        display += val;
      } else {
        display += val;
      }
    }
    result = val;
    this.setState({
      display,
      result,
    });
  };
  handleClear = () => {
    this.setState({
      display: "0",
      result: 0,
    });
  };
  render() {
    return (
      <div className="container">
        <Display
          onDisplay={this.state.display}
          onResult={this.state.result}
        ></Display>
        <ButtonPanel
          buttons={this.state.buttons}
          onButton={this.handleButton}
          onDecimal={this.handleDecimal}
          onZero={this.handleZero}
          onResult={this.handleResult}
          onClear={this.handleClear}
          onOperator={this.handleOperator}
        ></ButtonPanel>
      </div>
    );
  }
}

export default Apps;
