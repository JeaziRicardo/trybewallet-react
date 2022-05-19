import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Trybe Wallet</h1>
        <p>
          Email:
          {' '}
          <span data-testid="email-field"> </span>
        </p>
        <p>
          Despesa Total:
          {' '}
          <span data-testid="total-field">0</span>
          <span data-testid="header-currency-field">BRL</span>
        </p>
      </header>
    );
  }
}

export default Header;
