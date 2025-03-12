import { useState } from 'react';
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Barchart = () => {
    const [filter, setFilter] = useState("year");

    const dataSets = {
        year: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            series: [
                { name: "Expenses", data: [30, 40, 45, 50, 49, 60, 70, 91, 80, 85, 75, 90] },
                { name: "Income", data: [25, 35, 40, 45, 44, 55, 65, 85, 75, 80, 70, 88] }
            ]
        },
        sixMonths: {
            categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            series: [
                { name: "Expenses", data: [70, 91, 80, 85, 75, 90] },
                { name: "Income", data: [65, 85, 75, 80, 70, 88] }
            ]
        },
        oneMonth: {
            categories: ["Dec"],
            series: [
                { name: "Expenses", data: [90] },
                { name: "Income", data: [88] }
            ]
        }
    };

    const { categories, series } = dataSets[filter];

    const chartOptions = {
        chart: { id: "basic-bar" },
        xaxis: { categories },
        colors: ['#438a7a', '#e7e7e7'],
        plotOptions: {
            bar: {
                columnWidth: '30%',
                grouped: true
            }
        },
        dataLabels: { enabled: false }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', width: '100%' }}>
            <p className='activity'><strong>Payment Activity</strong></p>
                <div>
                    <button 
                        onClick={() => setFilter("year")} 
                        style={{ backgroundColor: filter === "year" ? "#438a7a" : "#ccc", padding: "10px", marginRight: "5px", color: "white", border: "none", borderRadius: "5px" }}>
                        Year
                    </button>
                    <button 
                        onClick={() => setFilter("sixMonths")} 
                        style={{ backgroundColor: filter === "sixMonths" ? "#438a7a" : "#ccc", padding: "10px", marginRight: "5px", color: "white", border: "none", borderRadius: "5px" }}>
                        6 Months
                    </button>
                    <button 
                        onClick={() => setFilter("oneMonth")} 
                        style={{ backgroundColor: filter === "oneMonth" ? "#438a7a" : "#ccc", padding: "10px", color: "white", border: "none", borderRadius: "5px" }}>
                        1 Month
                    </button>
                </div>
            </div>
            <div style={{ width: '100%', height: '400px' }}>
                <ReactApexChart options={chartOptions} series={series} type="bar" height={400} width={'100%'} />
            </div>
        </div>
    );
}

export default Barchart;
