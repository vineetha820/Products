import { NavLink } from 'react-router-dom';

const sidebarLinks = [
  { label: 'Dashboard', path: '/dashboard', icon: 'fa-table-columns', isPage: true },
  { label: 'Products', path: '/products', icon: 'fa-bag-shopping', isPage: true },
  { label: 'Cart', path: '/cart', icon: 'fa-cart-shopping', isPage: true },
  { label: 'Orders', path: '/orders', icon: 'fa-box', isPage: true },
  
];

function DashboardLayout({ children }) {
  return (
    <main className="page-frame dashboard-page">
      <section className="dashboard-shell">
        <aside className="sidebar">
          <div className="brand">
            <span className="brand-mark">M</span>
            <div>
              <strong>Vineetha</strong>
              <small>Admin panel</small>
            </div>
          </div>

          {sidebarLinks.map((link) => (
            <NavLink
              className={({ isActive }) => (link.isPage && isActive ? 'active' : '')}
              to={link.path}
              key={link.label}
            >
              <i className={`fa-solid ${link.icon}`} />
              {link.label}
            </NavLink>
          ))}
        </aside>

        <div className="dashboard-main">{children}</div>
      </section>
    </main>
  );
}

export default DashboardLayout;
