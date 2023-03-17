import './App.css';
import React, { useState } from "react";
import data from "./utils/data";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend, Title);


// Настройки первого доната;
export const options1 = {
  maintainAspectRatio: true,
  innerRadius: 10,
  responsive: true,
  plugins: {
    legend: {
      cursor: "pointer",
      position: 'none',
    },
    title: {
      display: true,
      color: 'white',
      align: 'center',
      text: 'Статистика осмотров',
      font: {
        size: 14,
      }
    },
  },
};

// Настройки второго доната;
export const options2 = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    // Стилизую labels;
    legend: {
      onHover: (event, chartElement) => {
        event.native.target.style.cursor = 'pointer';
      },
      onLeave: (event, chartElement) => {
        event.native.target.style.cursor = 'default';
      },
      position: 'right',
      labels: {
        usePointStyle: true,
        padding: 16,
        pointStyle: 'rect',
        color: "white",
      },
    },

    title: {
      display: true,
      color: 'white',
      align: 'start',
      text: 'Статистика осмотров',
      font: {
        size: 14,
      }
    },
  },
};

//Настройки третьего доната;
export const options3 = {
  maintainAspectRatio: true,
  responsive: true,
  plugins: {
    // Стилизую labels;
    legend: {
      onHover: (event, chartElement) => {
        event.native.target.style.cursor = 'pointer';
      },
      onLeave: (event, chartElement) => {
        event.native.target.style.cursor = 'default';
      },
      position: 'bottom',
      labels: {
        usePointStyle: true,
        padding: 20,
        textAlign: 'left',
        pointStyle: 'rect',
        color: "white",
      },
    },
    title: {
      display: true,
      color: 'white',
      align: 'start',
      text: 'Статистика осмотров',
      font: {
        size: 14,
      }
    },
  },
};

function App() {

  // Наполняю доныты;
  const [userData, setUserData] = useState({
    labels: data.map((data) => data.name + '  ' + data.count),
    datasets: [
      {
        label: 'Статистика осмотров',
        data: data.map((data) => data.count),
        backgroundColor: [
          data[0].color, data[1].color, data[2].color
        ],
        borderWidth: 0,
        cutout: '60%',
      },
    ],
  });

  // Добавляю текст внутрь кружочка доната;
  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;

      ctx.save();
      ctx.fillStyle = 'white';
      ctx.font = 'bolder 16px Inter'
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(data.datasets[0].data[0] + data.datasets[0].data[1] + data.datasets[0].data[2], chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
    }
  }
  return (
    <div className='App'>
      <h1 className="title">PieChart</h1>
      <div className='chartBox'>
        <div className='chartBox__small chartBox__item'><Doughnut data={userData} options={options1} plugins={[textCenter]} /></div>
        <div className='chartBox__middle chartBox__item'><Doughnut data={userData} options={options2} plugins={[textCenter]} /></div>
        <div className='chartBox__big  chartBox__item'><Doughnut data={userData} options={options3} plugins={[textCenter]} /></div>
      </div>
    </div>
  );
}

export default App;
