import React from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import {
  increment,
  decrement,
  add,
  subtract,
  storeResult,
  deleteResultById
} from "../../actions";

const Counter = props => {
  const {
    counter,
    storedResults,
    onIncrementCounter,
    onDecrementCounter,
    onAddCounter,
    onSubtractCounter,
    onStoreResult,
    onDeleteStoredResultById
  } = props;
  return (
    <div>
      <CounterOutput value={counter} />
      <CounterControl label="Increment" clicked={onIncrementCounter} />
      <CounterControl label="Decrement" clicked={onDecrementCounter} />
      <CounterControl label="Add 5" clicked={onAddCounter} />
      <CounterControl label="Subtract 5" clicked={onSubtractCounter} />
      <hr />
      <button onClick={() => onStoreResult(counter)}>Store Result</button>
      <div>
        {storedResults.length === 0 ? (
          <h3>No results stored</h3>
        ) : (
          <ul>
            {storedResults.map(result => (
              <li
                onClick={() => onDeleteStoredResultById(result.id)}
                key={result.id}
              >
                {result.value}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    counter: state.counterReducer.counter,
    storedResults: state.resultReducer.storedResults
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(increment()),
    onDecrementCounter: () => dispatch(decrement()),
    onAddCounter: () => dispatch(add(5)),
    onSubtractCounter: () => dispatch(subtract(5)),
    onStoreResult: value => dispatch(storeResult(value)),
    onDeleteStoredResultById: id => dispatch(deleteResultById(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
