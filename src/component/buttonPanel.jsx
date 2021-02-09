import React, { Component } from "react";

class ButtonPanel extends Component {
  render() {
    const {
      buttons,
      onButton,
      onDecimal,
      onZero,
      onResult,
      onClear,
      onOperator,
    } = this.props;
    return (
      <div className="row grid-button">
        {buttons.map((bttn) => (
          <button
            className={
              bttn.type === "eq"
                ? "btn btn-primary"
                : bttn.type === "clr"
                ? "btn btn-danger"
                : bttn.id === "zero"
                ? "btn btn-secondary big-z"
                : bttn.type === "operator"
                ? "btn btn-light " + bttn.id
                : "btn btn-secondary num"
            }
            key={bttn.value}
            id={bttn.id}
            onClick={() =>
              bttn.id === "zero"
                ? onZero()
                : bttn.id === "decimal"
                ? onDecimal()
                : bttn.id === "equals"
                ? onResult()
                : bttn.id === "clear"
                ? onClear()
                : bttn.type === "operator"
                ? onOperator(bttn.value)
                : onButton(bttn.value)
            }
          >
            {bttn.value}
          </button>
        ))}
      </div>
    );
  }
}

export default ButtonPanel;
