import React from 'react';
import { Line, Bar, Pie, Doughnut, Radar } from 'react-chartjs-2';
import './charts.css'
const Charts = () => {
  return (
    <div className="charts-container">
      {/* First row */}
      <div className="chart-row">
        <div className="chart">
          <h1>Line Chart</h1>
          <Line
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [{
                label: 'Sales',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
              }]
            }}
          />
        </div>
        <div className="chart">
          <h1>Bar Chart</h1>
          <Bar
            data={{
              labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
              datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
              }]
            }}
          />
        </div>
      </div>
      
      {/* Second row */}
      <div className="chart-row">
        <div className="chart">
          <h1>Pie Chart</h1>
          <Pie
            data={{
              labels: ['Red', 'Blue', 'Yellow'],
              datasets: [{
                label: '# of Votes',
                data: [10, 20, 30],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
              }]
            }}
          />
        </div>
        <div className="chart">
          <h1>Doughnut Chart</h1>
          <Doughnut
            data={{
              labels: ['Red', 'Blue', 'Yellow'],
              datasets: [{
                label: '# of Votes',
                data: [10, 20, 30],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
              }]
            }}
          />
        </div>
      </div>
      
      {/* Third row */}
      <div className="chart-row">
        <div className="chart">
          <h1>Radar Chart</h1>
          <Radar
            data={{
              labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
              datasets: [{
                label: 'My Data',
                data: [65, 59, 90, 81, 56, 55, 40],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
              }]
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Charts;
