import React, { useEffect, useRef } from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import Chart from 'chart.js/auto';


function Home() {
    const donutChartRef = useRef(null);
    const chartRef = useRef(null);
    const lineChartRef = useRef(null);
    const pieChartRef = useRef(null);

    useEffect(() => {
      // Clean up existing chart instances before creating new ones
      if (donutChartRef.current && donutChartRef.current.chart) {
        donutChartRef.current.chart.destroy();
    }
      if (chartRef.current && chartRef.current.chart) {
          chartRef.current.chart.destroy();
      }
      if (lineChartRef.current && lineChartRef.current.chart) {
          lineChartRef.current.chart.destroy();
      }
      
      if (pieChartRef.current && pieChartRef.current.chart) {
          pieChartRef.current.chart.destroy();
      }
      const donutCtx = donutChartRef.current.getContext('2d');
      const ctx = chartRef.current.getContext('2d');
      const lineCtx = lineChartRef.current.getContext('2d');
      const pieCtx = pieChartRef.current.getContext('2d');


      donutChartRef.current.chart = new Chart(donutCtx, {
        type: 'doughnut',
        data: {
            labels: ['New Customers', 'Returning Customers'],
            datasets: [
                {
                    label: 'Customer Type',
                    data: [20, 80], // Example data for new and returning customers
                    backgroundColor: ['#FF6384', '#36A2EB'],
                },
            ],
        },
    });

        chartRef.current.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'],
                datasets: [
                    {
                        label: 'PV',
                        data: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
                        backgroundColor: '#8884d8',
                    },
                    {
                        label: 'UV',
                        data: [2400, 1398, 9800, 3908, 4800, 3800, 4300],
                        backgroundColor: '#82ca9d',
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });

        lineChartRef.current.chart = new Chart(lineCtx, {
            type: 'line',
            data: {
                labels: ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'],
                datasets: [
                    {
                        label: 'PV',
                        data: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
                        borderColor: '#8884d8',
                        fill: false,
                    },
                    {
                        label: 'UV',
                        data: [2400, 1398, 9800, 3908, 4800, 3800, 4300],
                        borderColor: '#82ca9d',
                        fill: false,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });

        
        pieChartRef.current.chart = new Chart(pieCtx, {
          type: 'pie',
          data: {
              labels: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'],
              datasets: [
                  {
                      label: 'Category Distribution',
                      data: [30, 20, 10, 25, 15], // Example data for category distribution
                      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
                  },
              ],
          },
      });
    }, []);

    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>DASHBOARD</h3>
            </div>

            <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>PRODUCTS</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>300</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Charts</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CUSTOMERS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>10</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>NOTIFICATION</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div>
        </div>

        <div className='charts'>
                <div>
                    <canvas ref={donutChartRef} />
                </div>
                <div>
                    <canvas ref={chartRef} />
                </div>

                <div>
                    <canvas ref={lineChartRef} />
                </div>

                
                <div>
                    <canvas ref={pieChartRef} />
                </div>
            </div>
        </main>
    );
}

export default Home;
