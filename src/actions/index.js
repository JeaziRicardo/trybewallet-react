export const userAction = (state) => ({
  type: 'CHANGE_EMAIL',
  payload: state,
});

export const walletAction = (state) => ({
  type: 'CHANGE_CURRENCY',
  payload: state,
});

export function fetchCurrencies() {
  return async (dispatch) => {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await request.json();
    const currencies = Object.keys(response);
    const currencyUp = currencies.filter((currency) => currency !== 'USDT');
    dispatch(walletAction(currencyUp));
  };
}
