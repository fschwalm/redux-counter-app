const initialState = {
  counter: 0,
  storedResults: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      let newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;

    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1
      };

    case "ADD":
      return {
        ...state,
        counter: state.counter + action.value
      };

    case "SUBTRACT":
      return {
        ...state,
        counter: state.counter - action.value
      };

    case "STORE_RESULT":
      return {
        ...state,
        storedResults: state.storedResults.concat({
          id: action.id,
          value: state.counter
        })
      };

    case "DELETE_RESULT_BY_ID":
      return {
        ...state,
        storedResults: state.storedResults.filter(r => r.id !== action.id)
      };

    default:
      return state;
  }
};

export default reducer;
