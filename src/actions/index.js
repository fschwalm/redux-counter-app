import uuidv4 from 'uuid/v4';
import * as actionTypes from './types';


const increment = () => ({
  type: actionTypes.INCREMENT
});

const decrement = () => ({
  type: actionTypes.DECREMENT
});

const add = value => ({
  type: actionTypes.ADD,
  value
});

const subtract = value => ({
  type: actionTypes.SUBTRACT,
  value
});

const storeResult = value => ({
  type: actionTypes.STORE_RESULT,
  id: uuidv4(),
  value
});

const deleteResultById = id => ({
  type: actionTypes.DELETE_RESULT_BY_ID,
  id
});

export { increment, decrement, add, subtract, storeResult, deleteResultById };
