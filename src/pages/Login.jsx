import React from 'react';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isDisabled: true,
      logged: false,
    };
  }

  handleChange = ({ target }) => {
    const { type, value } = target;
    this.setState({
      [type]: value,
    }, () => this.disabledButton());
  }

  disabledButton = () => {
    const { email, password } = this.state;
    const MIN_PASSWORD = 6;
    const regex = '[a-z0-9]+@[a-z]+.[a-z]{2,3}';
    if (email.match(regex) && password.length >= MIN_PASSWORD) {
      return this.setState({ isDisabled: false });
    }
    return this.setState({ isDisabled: true });
  }

  handleClick = () => {
    const { logged } = this.state;
    if (!logged) {
      this.setState({ logged: true });
    }
  }

  render() {
    const { isDisabled, logged } = this.state;
    return (
      <main>
        <form>
          <h1>Login</h1>
          <label htmlFor="input-email">
            <input
              id="input-email"
              type="email"
              data-testid="email-input"
              placeholder="E-mail"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="input-password">
            <input
              id="input-password"
              type="password"
              data-testid="password-input"
              placeholder="Senha"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            disabled={ isDisabled }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
          { logged && <Redirect to="/carteira" /> }
        </form>
      </main>
    );
  }
}

export default Login;
