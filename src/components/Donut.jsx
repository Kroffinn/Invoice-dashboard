import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class Donut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        colors: ['#438a7a', '#438a7a', '#e7e7e7', '#438a7a'], 
        labels: ['A', 'B', 'C', 'D'], 
        legend: {
          show: false 
        }
      },
      series: [44, 55, 41, 17] 
    };
  }

  render() {
    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="350" />
      </div>
    );
  }
}

export default Donut;
