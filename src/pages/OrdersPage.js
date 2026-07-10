import DashboardLayout from '../components/DashboardLayout';
import { productOrders } from '../data';

const tableHeadings = ['Order ID', 'Product', 'Category', 'Quantity', 'Total'];

function OrdersPage() {
  return (
    <DashboardLayout>
      <header className="dashboard-header">
        <div>
          <small>Manage product purchases</small>
          <h1>Product Orders</h1>
        </div>
        <button type="button" aria-label="Create order">
          <i className="fa-solid fa-plus" />
        </button>
      </header>

      <div className="stats-row">
        <div className="stat-card blue"><i className="fa-solid fa-box" /> Open Orders <strong>128</strong></div>
        <div className="stat-card pink"><i className="fa-solid fa-clock" /> Pending <strong>24</strong></div>
        <div className="stat-card yellow"><i className="fa-solid fa-circle-check" /> Completed <strong>466</strong></div>
      </div>

      <div className="orders-panel">
        <div className="panel-title">
          <h2>Recent Product Orders</h2>
          <span>Updated today</span>
        </div>

        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0 orders-table">
            <thead>
              <tr>
                {tableHeadings.map((heading) => <th key={heading}>{heading}</th>)}
              </tr>
            </thead>
            <tbody>
              {productOrders.map((row) => (
                <tr key={row.join('-')}>
                  {row.map((cell, index) => (
                    <td key={`${cell}-${index}`} data-label={tableHeadings[index]}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default OrdersPage;
