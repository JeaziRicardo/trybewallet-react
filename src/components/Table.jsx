import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { delExpenseAction } from '../actions';

class Table extends Component {
  handleClick = (id) => {
    const { dellExpenses } = this.props;
    dellExpenses(id);
  }

  render() {
    const { expenses } = this.props;
    return (
      <section>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            { expenses.map((expense) => (
              <tr key={ expense.id }>
                <td>{ expense.description }</td>
                <td>{ expense.tag }</td>
                <td>{ expense.method }</td>
                <td>{ (+expense.value).toFixed(2) }</td>
                <td>{ (expense.exchangeRates[expense.currency].name).split('/')[0] }</td>
                <td>{ (+expense.exchangeRates[expense.currency].ask).toFixed(2) }</td>
                <td>
                  { (expense.value
                    * expense.exchangeRates[expense.currency].ask).toFixed(2) }
                </td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => this.handleClick(expense.id) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            )) }
          </tbody>
        </table>
      </section>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  dellExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dellExpenses: (id) => dispatch(delExpenseAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
