
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  Navigate
} from "react-router-dom";

import "./App.css";

function CurrentOrders() {
  return (
    <div className="order-card">
      <h2>Current Orders</h2>
      <p><strong>Order ID:</strong> ORD101</p>
      <p><strong>Product:</strong> Wireless Headphones</p>
      <p><strong>Amount:</strong> ₹1,499</p>
      <span className="status current">On the Way</span>
    </div>
  );
}

function OrderHistory() {
  return (
    <div className="order-card">
      <h2>Order History</h2>
      <p><strong>Order ID:</strong> ORD095</p>
      <p><strong>Product:</strong> Smart Watch</p>
      <p><strong>Amount:</strong> ₹2,499</p>
      <span className="status delivered">Delivered</span>
    </div>
  );
}

function CancelledOrders() {
  return (
    <div className="order-card">
      <h2>Cancelled Orders</h2>
      <p><strong>Order ID:</strong> ORD087</p>
      <p><strong>Product:</strong> Bluetooth Speaker</p>
      <p><strong>Amount:</strong> ₹999</p>
      <span className="status cancelled">Cancelled</span>
    </div>
  );
}

function Orders() {
  return (
    <main className="container">
      <h1>My Orders</h1>
      <p className="subtitle">
        Manage and track all your orders.
      </p>

      <nav className="order-nav">
        <Link to="/orders/current">Current Orders</Link>
        <Link to="/orders/history">Order History</Link>
        <Link to="/orders/cancelled">Cancelled Orders</Link>
      </nav>

      <section className="order-content">
        <Outlet />
      </section>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <Link to="/orders/current" className="brand">
          ShopEase
        </Link>
        <span>Order Management System</span>
      </header>

      <Routes>
        <Route
          path="/"
          element={<Navigate to="/orders/current" replace />}
        />

        <Route path="/orders" element={<Orders />}>
          <Route
            index
            element={<Navigate to="current" replace />}
          />
          <Route path="current" element={<CurrentOrders />} />
          <Route path="history" element={<OrderHistory />} />
          <Route path="cancelled" element={<CancelledOrders />} />
        </Route>

        <Route
          path="*"
          element={
            <main className="container">
              <h1>404 - Page Not Found</h1>
              <Link to="/orders/current">Go to Current Orders</Link>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
