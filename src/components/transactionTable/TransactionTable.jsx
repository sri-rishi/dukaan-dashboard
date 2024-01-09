const TransactionsTable = () => {
    const cellItems = [ "#281209","7 July 2023", "₹1,278.23", "₹22"]

    const rows = Array.from({ length: 10 }, (_, rowIndex) => (
      <tr className="data-row" key={rowIndex}>
        {cellItems.map((cellValue, colIndex)=> (
          <td className="data" key={colIndex}>{cellValue}</td>
        ))}
      </tr>
    ));
  
    return (
      <div className="table">
            <table>
            <thead className="table-head">
                <tr>
                    <th className="table-head-title">Order ID</th>
                    <th className="table-head-title">Order Date</th>
                    <th className="table-head-title">Order Ammout</th>
                    <th className="table-head-title">Transaction fee</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
      </div>
    );
}

export default TransactionsTable;