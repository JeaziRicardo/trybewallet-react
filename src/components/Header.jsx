import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
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
          <span data-testid="total-field">0</span>
          {' '}
          <span data-testid="header-currency-field">BRL</span>
        </p>
      </header>
    );
  }
}

Header.propTypes = {
  getEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
});

export default connect(mapStateToProps)(Header);
