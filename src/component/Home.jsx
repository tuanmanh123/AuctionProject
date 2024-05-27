import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import './Style/Home.css';

import SideBar from "./sidebar";
function Home() {
    return (
        <div class='Main-Home'>
            <div class="Sidebar-container">
                <div class="SideBar">
                    <SideBar></SideBar>
                </div>
            </div>
            <div class="Content-container">
                <div class='Dashboard'>
                    <Dashboard></Dashboard>
                </div>
            </div>


        </div>
    )
}
export default Home;