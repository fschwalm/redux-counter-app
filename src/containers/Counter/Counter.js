import React from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { increment, decrement, add, subtract, storeResult } from '../../actions';

const Counter = props => (
  <div>
    <CounterOutput value={props.counter} />
    <CounterControl label="Increment" clicked={props.onIncrementCounter} />
    <CounterControl label="Decrement" clicked={props.onDecrementCounter} />
    <CounterControl label="Add 5" clicked={props.onAddCounter} />
    <CounterControl label="Subtract 5" clicked={props.onSubtractCounter} />
    <hr />
    <button onClick={props.onStoreResult}>Store Result</button>
    <div>
      {props.storedResults.length === 0 ? (
        <h3>No results stored</h3>
      ) : ( 
        <ul>
          {props.storedResults.map(result => (
            <li key={result.id}>
            { result.value }
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    counter: state.counter,
    storedResults: state.storedResults
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(increment()),
    onDecrementCounter: () => dispatch(decrement()),
    onAddCounter: () => dispatch(add(5)),
    onSubtractCounter: () => dispatch(subtract(5)),
    onStoreResult: () => dispatch(storeResult())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
