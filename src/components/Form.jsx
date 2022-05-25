import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchExpense } from '../actions';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  handleChange = ({ target }) => {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  };

  handleClick = () => {
    const { addExpenses } = this.props;
    const resetState = {
      value: '',
      description: '',
      currency: 'USD',
    };
    addExpenses(this.state);
    this.setState({ ...resetState });
  };

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <main>
        <form>

          <label htmlFor="value">
            Valor:
            <input
              onChange={ this.handleChange }
              data-testid="value-input"
              type="number"
              id="value"
              value={ value }
            />
          </label>

          <label htmlFor="description">
            Descrição:
            <input
              onChange={ this.handleChange }
              data-testid="description-input"
              type="text"
              id="description"
              value={ description }
            />
          </label>

          <label htmlFor="currency">
            Moeda:
            <select
              onChange={ this.handleChange }
              id="currency"
              value={ currency }
            >
              { currencies.map((shortCurrency) => (
                <option
                  key={ shortCurrency }
                  value={ shortCurrency }
                >
                  {shortCurrency}
                </option>
              )) }
            </select>
          </label>

          <label htmlFor="method">
            Método de pagamento:
            <select
              onChange={ this.handleChange }
              data-testid="method-input"
              id="method"
              value={ method }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag">
            Categoria:
            <select
              onChange={ this.handleChange }
              data-testid="tag-input"
              id="tag"
              value={ tag }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>

          <button
            type="button"
            onClick={ this.handleClick }
          >
            Adicionar despesa
          </button>

        </form>
      </main>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  addExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  addExpenses: (state) => dispatch(fetchExpense(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
