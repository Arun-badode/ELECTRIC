import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import { useState } from "react";
import Dashboard from "./Componente/Dashboard/Dashboard";
import Orders from "./Componente/Orders/Orders";
import BannerManager from "./Componente/Banner/BannerManager";
import Users from "./Componente/Users/Users";
import Productes from "./Componente/Products/Products";
import ReportAnalytics from "./Componente/ReportAnalytics/ReportAnalytics";
import Support from "./Componente/Support/Support";
import Settings from "./Componente/Settings/Settings";
import Inventory from "./Componente/Inventory/Inventory";
import Home from "./Home/Home";
import ElectricalProducts from "./Home/ElectricalProducts";

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const menusidebarcollaps = () => {
    setIsSidebarCollapsed(true);
  };
  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };
  const location = useLocation();
  const hideLayout = location.pathname === "/" || location.pathname === "/electricalproducts";

  return (
    <>
      {/* Home Page (No Layout) */}
      {hideLayout ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/electricalproducts" element={<ElectricalProducts />} />

        </Routes>
      ) : (
        // Pages with Layout
        <>
          <Navbar toggleSidebar={toggleSidebar} />
          <div className="main-content">
            <Sidebar
              collapsed={isSidebarCollapsed}
              menuItemClick={menusidebarcollaps}
            />
            <div
              className={`right-side-content ${isSidebarCollapsed ? "collapsed" : ""}`}
            >
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/users" element={<Users />} />
                <Route path="/bannermanager" element={<BannerManager />} />
                <Route path="/products" element={<Productes />} />
                <Route path="/reportanalytics" element={<ReportAnalytics />} />
                <Route path="/support" element={<Support />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/inventory" element={<Inventory />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
