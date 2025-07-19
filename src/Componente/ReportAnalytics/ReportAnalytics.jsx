import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from 'chart.js';
import PageHeader from './PageHeader';
import StatsCards from './StatsCards';
import MainCharts from './MainCharts';
import SecondaryCharts from './SecondaryCharts';
import ReportsTable from './ReportsTable';

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

const ReportAnalytics = () => {
  // Chart data
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Reports Generated',
      data: [10, 20, 15, 30, 25, 40],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      tension: 0.4,
    }],
  };

  const pieData = {
    labels: ['Approved', 'Rejected', 'Pending'],
    datasets: [{
      data: [60, 15, 25],
      backgroundColor: ['#28a745', '#dc3545', '#ffc107'],
      borderWidth: 1,
    }],
  };

  const barData = {
    labels: ['Sales', 'HR', 'IT', 'Finance', 'Operations'],
    datasets: [{
      label: 'Reports by Department',
      data: [12, 9, 7, 5, 4],
      backgroundColor: [
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    }],
  };

  const lineAvgTime = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{
      label: 'Avg Processing Time (Days)',
      data: [2, 3, 1.5, 2.5],
      fill: false,
      borderColor: '#17a2b8',
      backgroundColor: '#17a2b8',
      tension: 0.4,
    }],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="container-fluid py-4">
      <PageHeader />
      <StatsCards />
      <MainCharts lineData={lineData} pieData={pieData} chartOptions={chartOptions} />
      <SecondaryCharts barData={barData} lineAvgTime={lineAvgTime} chartOptions={chartOptions} />
      <ReportsTable />
    </div>
  );
};

export default ReportAnalytics;