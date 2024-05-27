import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale } from "chart.js";
Chart.register(CategoryScale);



function BarChart() {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sales',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    };

    const options = {
        title: {
            display: true,
            text: 'Sales Data',
            fontSize: 20
        },
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };

    return (
        <div>
            <h2>Bar Chart Example</h2>
            <Bar data={data} options={options} />
        </div>
    );
}

export default BarChart;
