import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  Sum = () => {
    const { expenses } = this.props;
    const totalSum = expenses
      .reduce((acc, curr) => acc
        + (curr.value * curr.exchangeRates[curr.currency].ask), 0);
    return totalSum.toFixed(2);
  }

  render() {
    const { getEmail } = this.props;
    return (
      <header>
        <h1>Trybe Wallet</h1>
        <p>
          Email:
          {' '}
          <span data-testid="email-field">{ getEmail }</span>
        </p>
        <p>
          Despesa Total: R$
          {' '}
          <span data-testid="total-field">{ this.Sum() }</span>
          {' '}
          <span data-testid="header-currency-field">BRL</span>
        </p>
      </header>
    );
  }
}

Header.propTypes = {
  getEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
