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

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const menusidebarcollaps = () => {
    setIsSidebarCollapsed(true);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };
  const location = useLocation();

  const hideLayout = location.pathname === "";
  return (
    <>
      {/* navbar */}
      {!hideLayout && <Navbar toggleSidebar={toggleSidebar} />}
      {/* navbar end */}
      {/* sidebar start */}
      <div className={`main-content  ${hideLayout ? "" : ""}`}>
        {!hideLayout && (
          <Sidebar
            collapsed={isSidebarCollapsed}
            menuItemClick={menusidebarcollaps}
          />
        )}
        {/* sidebar end */}
        {/* right side  */}
        <div
          className={`right-side-content ${isSidebarCollapsed ? "collapsed " : ""
            }`}
        >
          {/* <Routes><Route path="/" element={<Login />} /></Routes> */}
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/users" element={<Users />} />
            <Route path="/bannermanager" element={<BannerManager />} />
            <Route path="/products" element={<Productes />}/> 
          </Routes>
        </div>
      </div>
    </>
  );
}
export default App;
