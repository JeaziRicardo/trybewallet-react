const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'CHANGE_CURRENCY':
    return {
      ...state,
      currencies: action.payload,
    };
  default:
    return state;
  }
};

export default walletReducer;
