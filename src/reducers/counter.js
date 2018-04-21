import * as actionTypes from '../actions/types';

const initialState = {
  counter: 0,
  storedResults: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      let newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;

    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };

    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value
      };

    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.value
      };

    case actionTypes.STORE_RESULT:
      return {
        ...state,
        storedResults: state.storedResults.concat({
          id: action.id,
          value: state.counter
        })
      };

    case actionTypes.DELETE_RESULT_BY_ID:
      return {
        ...state,
        storedResults: state.storedResults.filter(r => r.id !== action.id)
      };

    default:
      return state;
  }
};

export default reducer;
