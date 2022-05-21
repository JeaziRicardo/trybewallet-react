import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Form extends Component {
  render() {
    const { currencies } = this.props;
    return (
      <main>
        <form>
          <label htmlFor="value-input">
            Valor:
            <input data-testid="value-input" type="number" id="value-input" />
          </label>
          <label htmlFor="description-input">
            Descrição:
            <input data-testid="description-input" type="text" id="description-input" />
          </label>
          <label htmlFor="currencies">
            Moeda:
            <select id="currencies">
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
          <label htmlFor="method-input">
            Método de pagamento:
            <select data-testid="method-input" id="method-input">
              <option value="cash">Dinheiro</option>
              <option value="credit">Cartão de crédito</option>
              <option value="debit">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag-input">
            Categoria:
            <select data-testid="tag-input" id="tag-input">
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
