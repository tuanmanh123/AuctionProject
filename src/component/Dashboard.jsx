import React from 'react';
import { FaUsers, FaList, FaGavel } from 'react-icons/fa'; // Import các biểu tượng cần thiết
import './Style/Dashboard.css';
import { MdDashboardCustomize } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div class='dashboard-header'>
        <div class='dashboard-icon' ><MdDashboardCustomize></MdDashboardCustomize></div>
        <h3>Dashboard</h3>
      </div>

      <div className="dashboard-content">
        <div className="card" id='User-dashboard'>
          <div className="card-icon" >
            <FaUsers className="icon" />
          </div>
          <h3>Users</h3>
          <p>100</p>
        </div>
        <div className="card" id='Categories-dashboard'>
          <div className="card-icon">
            <FaList className="icon" />
          </div>
          <h3>Categories</h3>
          <p>50</p>
        </div>
        <div className="card" id='Auctions-dashboard'>
          <div className="card-icon">
            <FaGavel className="icon" />
          </div>
          <h3>Auctions</h3>
          <p>20</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
