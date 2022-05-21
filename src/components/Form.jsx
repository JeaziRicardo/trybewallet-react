import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      value_input: '',
      description_input: '',
      currencies: 'USD',
      method_input: 'cash',
      tag_input: 'food',
    };
  }

  handleChange = ({ target }) => {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  };

  render() {
    const { currencies } = this.props;
    return (
      <main>
        <form>

          <label htmlFor="value_input">
            Valor:
            <input
              onChange={ this.handleChange }
              data-testid="value-input"
              type="number"
              id="value_input"
            />
          </label>

          <label htmlFor="description_input">
            Descrição:
            <input
              onChange={ this.handleChange }
              data-testid="description-input"
              type="text"
              id="description_input"
            />
          </label>

          <label htmlFor="currencies">
            Moeda:
            <select
              onChange={ this.handleChange }
              id="currencies"
            >
              { currencies.map((currency) => (
                <option
                  key={ currency }
                  value={ currency }
                >
                  {currency}
                </option>
              )) }
            </select>
          </label>

          <label htmlFor="method_input">
            Método de pagamento:
            <select
              onChange={ this.handleChange }
              data-testid="method-input"
              id="method_input"
            >
              <option value="cash">Dinheiro</option>
              <option value="credit">Cartão de crédito</option>
              <option value="debit">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag_input">
            Categoria:
            <select
              onChange={ this.handleChange }
              data-testid="tag-input"
              id="tag_input"
            >
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>

          <button type="button">
            Adicionar despesa
          </button>

        </form>
      </main>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Form);
