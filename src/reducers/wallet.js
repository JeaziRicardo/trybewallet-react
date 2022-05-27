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
  case 'ADD_EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses,
        ({
          id: state.expenses.length,
          ...action.payload,
        })],
    };
  case 'DELETE_EXPENSE':
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.payload),
    };
  default:
    return state;
  }
};

export default walletReducer;
