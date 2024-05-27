import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import './Style/sidebar.css';

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="user-icon">
                <FaRegUserCircle />
            </div>

            <Link to="/">Trang chủ</Link>
            <Link to="/user-management">Quản lí User</Link>
            <Link to="/category-management">Quản lí Category</Link>
            <Link to="/auction-management">Quản lí các phiên đấu giá</Link>
            <Link to="/login">Đăng xuất</Link>


        </div>
    );
};

export default SideBar;
