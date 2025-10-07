'use client';

import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faThermometerHalf, 
  faHeartbeat, 
  faChartBar, 
  faAward,
  faDownload
} from '@fortawesome/free-solid-svg-icons';

export default function History() {
  const [period, setPeriod] = useState('month');

  const getChartData = (type: 'temp' | 'bpm') => {
    let labels: string[] = [];
    let data: number[] = [];

    switch(period) {
      case 'day':
        labels = ['00h', '04h', '08h', '12h', '16h', '20h', '24h'];
        data = type === 'temp' 
          ? [36.1, 36.0, 36.2, 36.4, 36.6, 36.3, 36.2]
          : [68, 65, 70, 75, 78, 72, 70];
        break;
      case 'week':
        labels = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
        data = type === 'temp'
          ? [36.1, 36.3, 36.2, 36.4, 36.5, 36.3, 36.2]
          : [70, 72, 71, 75, 73, 69, 68];
        break;
      case 'quarter':
        labels = ['Jan', 'Fev', 'Mar'];
        data = type === 'temp'
          ? [36.3, 36.4, 36.2]
          : [73, 74, 72];
        break;
      default:
        labels = ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'];
        data = type === 'temp'
          ? [36.2, 36.5, 36.3, 36.4]
          : [72, 75, 71, 74];
    }

    return {
      labels,
      datasets: [{
        label: type === 'temp' ? 'Temperatura Média (°C)' : 'BPM Médio',
        data,
        borderColor: type === 'temp' ? 'rgb(239, 68, 68)' : 'rgb(236, 72, 153)',
        backgroundColor: type === 'temp' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(236, 72, 153, 0.1)',
        tension: 0.4,
        fill: true
      }]
    };
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false
      }
    }
  };

  return (
    <div className="fade-in">
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Histórico de Dados</h2>
            <p className="text-gray-600">Análise detalhada dos dados coletados ao longo do tempo</p>
          </div>
          <div className="mt-4 sm:mt-0 flex items-center space-x-3">
            <select 
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              <option value="day">Último Dia</option>
              <option value="week">Última Semana</option>
              <option value="month">Último Mês</option>
              <option value="quarter">Último Trimestre</option>
            </select>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              Exportar
            </button>
          </div>
        </div>
      </div>

      {/* Estatísticas Resumidas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faThermometerHalf} className="text-red-600" />
            </div>
            <span className="text-xs bg-red-50 text-red-600 px-2 py-1 rounded-full">Temperatura</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Média:</span>
              <span className="font-bold text-gray-900">36.4°C</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Máxima:</span>
              <span className="font-bold text-red-600">37.2°C</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Mínima:</span>
              <span className="font-bold text-blue-600">35.8°C</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faHeartbeat} className="text-pink-600" />
            </div>
            <span className="text-xs bg-pink-50 text-pink-600 px-2 py-1 rounded-full">Batimentos</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Média:</span>
              <span className="font-bold text-gray-900">74 BPM</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Máximo:</span>
              <span className="font-bold text-red-600">95 BPM</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Mínimo:</span>
              <span className="font-bold text-blue-600">58 BPM</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faChartBar} className="text-green-600" />
            </div>
            <span className="text-xs bg-green-50 text-green-600 px-2 py-1 rounded-full">Atividade</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Dias ativos:</span>
              <span className="font-bold text-gray-900">30/30</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Alertas:</span>
              <span className="font-bold text-yellow-600">2</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Quedas:</span>
              <span className="font-bold text-red-600">1</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faAward} className="text-purple-600" />
            </div>
            <span className="text-xs bg-purple-50 text-purple-600 px-2 py-1 rounded-full">Qualidade</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Score geral:</span>
              <span className="font-bold text-green-600">Excelente</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Uptime:</span>
              <span className="font-bold text-gray-900">99.8%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Precisão:</span>
              <span className="font-bold text-blue-600">98.5%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gráficos Detalhados */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Histórico de Temperatura</h3>
          <div className="chart-container">
            <Line data={getChartData('temp')} options={options} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Histórico de Batimentos</h3>
          <div className="chart-container">
            <Line data={getChartData('bpm')} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
}
