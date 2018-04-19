import uuidv4 from 'uuid/v4';

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD = "ADD";
const SUBTRACT = "SUBTRACT";
const STORE_RESULT = "STORE_RESULT";

const increment = () => ({
  type: INCREMENT
});

const decrement = () => ({
  type: DECREMENT
});

const add = value => ({
  type: ADD,
  value
});

const subtract = value => ({
  type: SUBTRACT,
  value
});

const storeResult = value => ({
  type: STORE_RESULT,
  id: uuidv4(),
  value
});

export { increment, decrement, add, subtract, storeResult };
