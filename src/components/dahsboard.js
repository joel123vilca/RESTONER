import React from "react";
import Order from "./order";
import Menu from "./menu";
import Cart from "./cart";
import "./dashboard.scss";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <Menu />
      <Cart />
      <Order />
    </div>
  );
};

export default Dashboard;
