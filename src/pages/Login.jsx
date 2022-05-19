import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isDisabled: true,
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
    if (email.match(regex) && password.length === MIN_PASSWORD) {
      return this.setState({ isDisabled: false });
    }
    return this.setState({ isDisabled: true });
  }

  render() {
    const { isDisabled } = this.state;
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
            type="submit"
            disabled={ isDisabled }
          >
            Entrar
          </button>
        </form>
      </main>
    );
  }
}

export default Login;
