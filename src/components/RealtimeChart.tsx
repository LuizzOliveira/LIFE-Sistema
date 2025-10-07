'use client';

import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface RealtimeChartProps {
  title: string;
  color: string;
  backgroundColor: string;
  dataGenerator: () => number;
  yMin: number;
  yMax: number;
  unit: string;
}

export default function RealtimeChart({ 
  title, 
  color, 
  backgroundColor, 
  dataGenerator,
  yMin,
  yMax,
  unit
}: RealtimeChartProps) {
  const [chartData, setChartData] = useState({
    labels: Array(12).fill('').map((_, i) => {
      const time = new Date();
      time.setMinutes(time.getMinutes() - (11 - i) * 5);
      return `${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}`;
    }),
    datasets: [{
      label: title,
      data: Array(12).fill(0).map(() => dataGenerator()),
      borderColor: color,
      backgroundColor: backgroundColor,
      tension: 0.4,
      fill: true,
      pointRadius: 4,
      pointHoverRadius: 6,
    }]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prevData => {
        const newData = [...prevData.datasets[0].data];
        newData.shift();
        newData.push(dataGenerator());

        const newLabels = [...prevData.labels];
        newLabels.shift();
        const time = new Date();
        newLabels.push(`${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}`);

        return {
          labels: newLabels,
          datasets: [{
            ...prevData.datasets[0],
            data: newData
          }]
        };
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [dataGenerator]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: (context: import('chart.js').TooltipItem<'line'>) => `${context.parsed.y}${unit}`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        min: yMin,
        max: yMax
      }
    },
    animation: {
      duration: 0
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
      <h3 className="text-lg font-bold text-gray-900 mb-6">{title}</h3>
      <div className="chart-container">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}
