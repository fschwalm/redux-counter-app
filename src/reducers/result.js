import * as actionTypes from '../actions/types';

const initialState = {
  storedResults: []
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        storedResults: state.storedResults.concat({
          id: action.id,
          value: action.value
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

export default resultReducer;
