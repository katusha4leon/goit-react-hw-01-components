import styles from './TransactionHistory.module.css';

export const TransactionHistory = props => {
  return (
    <section className={styles.table}>
      <table className={styles['transaction-history']}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {props.items.map(transaction => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.type}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};