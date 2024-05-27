import React, { useState } from "react";

import Dashboard from "./material_component/Dashboard";
import './Style/Home.css';
import SideBar from "./sidebar";
import Chart from "./material_component/chart";
import BarChart from "./material_component/Bar_chart.jsx";


function Home() {

    return (
        <div class='Main-Home'>
            <div class='Main'>
                <div class='sidebar'><SideBar></SideBar></div>
                <div class='dashboard'>
                    <Dashboard></Dashboard>


                </div>
                <div class='dashboard-content'>
                    <Chart></Chart>


                </div>
            </div>
        </div >




    )
}
export default Home;