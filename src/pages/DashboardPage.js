import DashboardLayout from '../components/DashboardLayout';
import { productOrders, topProducts } from '../data';

const tableHeadings = ['Order ID', 'Product', 'Category', 'Quantity', 'Total'];

function DashboardPage() {
  return (
    <DashboardLayout>
      <header className="dashboard-header">
        <div>
          <small>Good morning, Vineetha</small>
          <h1>Product Dashboard</h1>
        </div>
        <button type="button" aria-label="Open notifications">
          <i className="fa-solid fa-bell" />
        </button>
      </header>

      <div className="stats-row">
        <div className="stat-card blue"><i className="fa-solid fa-boxes-stacked" /> Product Orders <strong>594</strong></div>
        <div className="stat-card pink"><i className="fa-solid fa-cart-plus" /> New Orders <strong>30</strong></div>
        <div className="stat-card yellow"><i className="fa-solid fa-wallet" /> Product Revenue <strong>$ 12.4k</strong></div>
      </div>

      <div className="dashboard-grid">
        <div className="analytics-panel">
          <div className="panel-title">
            <h2>Sales Statistics</h2>
            <span>Product orders</span>
          </div>
          <div className="chart">
            <svg viewBox="0 0 520 220" role="img" aria-label="Progress score chart">
              <path d="M20 165 C90 105 125 96 190 116 S295 195 365 117 S465 140 505 78" className="line green" />
              <path d="M20 165 C85 148 123 128 179 94 S288 117 352 150 S460 165 505 105" className="line blue-line" />
              <g className="bar"><rect x="357" y="65" width="44" height="130" rx="8" /><text x="379" y="55">$80</text></g>
            </svg>
            <div className="months"><span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span></div>
          </div>
        </div>

        <div className="drivers-panel">
          <h2>Top Products</h2>
          {topProducts.map((product) => (
            <div className="driver" key={product.name}>
              <span>{product.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}</span>
              <div><strong>{product.name}</strong><small>Orders {product.orders} - Revenue: {product.revenue}</small></div>
            </div>
          ))}
        </div>
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
              {productOrders.slice(0, 4).map((row) => (
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

export default DashboardPage;
