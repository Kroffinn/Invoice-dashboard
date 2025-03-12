import { useState } from 'react';
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = () => {
    const [state, setState] = useState({
        options: {
          chart: {
            id: "dual-line-chart",
            zoom: {
              enabled: false
            }
          },
          xaxis: {
            categories: [
              "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
              "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
            ]
          },
          colors: ['#438a7a', '#e7e7e7'], // Colors for both lines
          stroke: {
            curve: 'smooth'
          },
          legend: {
            position: 'top'
          }
        },
        series: [
          {
            name: "Due Amount",
            data: [30, 40, 45, 50, 49, 60, 70, 91, 80, 85, 90, 95]
          },
          {
            name: "Amount Received",
            data: [20, 35, 40, 45, 50, 55, 65, 85, 75, 80, 85, 90]
          }
        ]
    });

    return (
        <div>
            <ReactApexChart options={state.options} series={state.series} type="line" height={400} />
        </div>
    );
}

export default LineChart;