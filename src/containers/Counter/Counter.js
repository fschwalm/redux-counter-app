import React from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

const Counter = props => (
  <div>
    <CounterOutput value={props.counter} />
    <CounterControl label="Increment" clicked={props.onIncrementCounter} />
    <CounterControl label="Decrement" clicked={props.onDecrementCounter} />
    <CounterControl label="Add 5" clicked={props.onAddCounter} />
    <CounterControl label="Subtract 5" clicked={props.onSubtractCounter} />
  </div>
);

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    onAddCounter: () => dispatch({ type: "ADD", value: 5 }),
    onSubtractCounter: () => dispatch({ type: "SUBTRACT", value: 5 })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
