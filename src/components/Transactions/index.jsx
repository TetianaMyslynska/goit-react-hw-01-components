import PropTypes from 'prop-types';
import './style.css';

const Transactions = ({ transactions }) => {
    return  <table className="table">
  <thead >
    <tr className="head">
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
        <tbody>
            {transactions.map(({id, type, amount, currency}) =>
            <tr className="line" key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
            </tr> )} 
  </tbody>
</table>
}
Transactions.propTypes = {
    id: PropTypes.string,
    type:PropTypes.string,
    amount:PropTypes.string,
    currency:PropTypes.string
}
export default Transactions;