const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD = "ADD";
const SUBTRACT = "SUBTRACT";

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

export { increment, decrement, add, subtract };
