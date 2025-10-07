'use client';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faThermometerHalf, 
  faHeartbeat, 
  faWifi, 
  faBatteryFull,
  faCheckCircle,
  faMapMarkerAlt,
  faWalking,
  faHome
} from '@fortawesome/free-solid-svg-icons';
import RealtimeChart from './RealtimeChart';

interface DashboardProps {
  onShowFallAlert: () => void;
}

export default function Dashboard({ onShowFallAlert }: DashboardProps) {
  const [temperature, setTemperature] = useState(36.5);
  const [heartRate, setHeartRate] = useState(72);
  const [lastUpdate, setLastUpdate] = useState('agora');
  const [connectionStatus, setConnectionStatus] = useState('Conectado');

  useEffect(() => {
    // Simular alerta de queda após 15 segundos
    const fallTimer = setTimeout(() => {
      onShowFallAlert();
    }, 15000);

    // Atualizar dados em tempo real
    const interval = setInterval(() => {
      setTemperature(Number((36 + Math.random() * 1.5).toFixed(1)));
      setHeartRate(Math.floor(65 + Math.random() * 25));
      setLastUpdate('agora');
    }, 5000);

    return () => {
      clearTimeout(fallTimer);
      clearInterval(interval);
    };
  }, [onShowFallAlert]);

  return (
    <div className="fade-in">
      {/* Header do Painel */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Painel de Monitoramento</h2>
            <p className="text-gray-600">Dados em tempo real da pulseira inteligente</p>
          </div>
          <div className="mt-4 sm:mt-0 flex items-center space-x-3">
            <div className="flex items-center space-x-2 bg-green-100 px-3 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-green-700 font-medium">Sistema Ativo</span>
            </div>
            <div className="text-sm text-gray-500">
              Última atualização: <span>{lastUpdate}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cards de Monitoramento */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Card Temperatura */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 card-hover">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center">
              <FontAwesomeIcon icon={faThermometerHalf} className="text-white text-lg" />
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 uppercase tracking-wide">Temperatura</p>
              <p className="text-2xl font-bold text-gray-900">{temperature}°C</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              <FontAwesomeIcon icon={faCheckCircle} className="mr-1" />
              Normal
            </span>
            <span className="text-xs text-gray-500">Faixa: 36-37°C</span>
          </div>
        </div>

        {/* Card Batimentos */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 card-hover">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center">
              <FontAwesomeIcon icon={faHeartbeat} className="text-white text-lg heartbeat" />
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 uppercase tracking-wide">Batimentos</p>
              <p className="text-2xl font-bold text-gray-900">{heartRate} BPM</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              <FontAwesomeIcon icon={faCheckCircle} className="mr-1" />
              Saudável
            </span>
            <span className="text-xs text-gray-500">Faixa: 60-100</span>
          </div>
        </div>

        {/* Card Status Conexão */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 card-hover">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
              <FontAwesomeIcon icon={faWifi} className="text-white text-lg" />
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 uppercase tracking-wide">Conexão</p>
              <p className="text-lg font-bold text-green-600">{connectionStatus}</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              <FontAwesomeIcon icon={faCheckCircle} className="mr-1" />
              Estável
            </span>
            <span className="text-xs text-gray-500">4G/WiFi</span>
          </div>
        </div>

        {/* Card Bateria */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 card-hover">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
              <FontAwesomeIcon icon={faBatteryFull} className="text-white text-lg" />
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 uppercase tracking-wide">Bateria</p>
              <p className="text-2xl font-bold text-gray-900">87%</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              <FontAwesomeIcon icon={faCheckCircle} className="mr-1" />
              Carregada
            </span>
            <span className="text-xs text-gray-500">~3 dias</span>
          </div>
        </div>
      </div>

      {/* Gráficos em Tempo Real */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <RealtimeChart 
          title="Temperatura em Tempo Real"
          color="rgb(239, 68, 68)"
          backgroundColor="rgba(239, 68, 68, 0.1)"
          dataGenerator={() => Number((36 + Math.random() * 1.5).toFixed(1))}
          yMin={35}
          yMax={38}
          unit="°C"
        />
        <RealtimeChart 
          title="Batimentos em Tempo Real"
          color="rgb(236, 72, 153)"
          backgroundColor="rgba(236, 72, 153, 0.1)"
          dataGenerator={() => Math.floor(65 + Math.random() * 25)}
          yMin={50}
          yMax={100}
          unit="BPM"
        />
      </div>

      {/* Cards de Informações Adicionais */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Localização Atual</h4>
              <p className="text-sm text-gray-600">Atualizada agora</p>
            </div>
          </div>
          <p className="text-sm text-gray-700">Rua das Flores, 123</p>
          <p className="text-sm text-gray-700">Jardim Paulista, São Paulo - SP</p>
          <p className="text-xs text-gray-500 mt-2">Coordenadas: -23.5505, -46.6333</p>
        </div>

        {/* <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faWalking} className="text-green-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Atividade</h4>
              <p className="text-sm text-gray-600">Última hora</p>
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">1.2 km</p>
          <p className="text-sm text-gray-600">Distância percorrida</p>
          <p className="text-xs text-gray-500 mt-2">Velocidade média: 3.5 km/h</p>
        </div> */}

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faHome} className="text-purple-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Zona Segura</h4>
              <p className="text-sm text-gray-600">Status atual</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium text-green-600">Dentro da zona</span>
          </div>
          <p className="text-xs text-gray-500 mt-2">Raio de 500m da residência</p>
        </div>
      </div>
    </div>
  );
}
