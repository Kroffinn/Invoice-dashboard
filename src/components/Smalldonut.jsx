import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class Smalldonut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        colors: ['#438a7a', '#e7e7e7'], // Colors for 2 sections
        labels: ['A', 'B'], // Labels for sections
        legend: {
          show: false // Hide the legend
        },
        chart: {
          width: 85, 
          height: 85
        },
        dataLabels: {
          enabled: false, // Hide percentage initially
          dropShadow: {
            enabled: true, // Enable on hover
            top: 0,
            left: 0,
            blur: 3,
            opacity: 1
          }
        },
        tooltip: {
          enabled: true, // Show percentage on hover
          y: {
            formatter: function (val) {
              return val + "%"; // Format tooltip display
            }
          }
        }
      },
      series: [55, 45] // Values
    };
  }

  render() {
    return (
      <div className="donut" style={{ width: '85px', height: '85px' }}>
        <Chart options={this.state.options} series={this.state.series} type="donut" width="85" />
      </div>
    );
  }
}

export default Smalldonut;
