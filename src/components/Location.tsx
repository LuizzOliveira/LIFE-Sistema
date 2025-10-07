'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faWalking, faHome } from '@fortawesome/free-solid-svg-icons';

// Importar o mapa dinamicamente para evitar problemas de SSR
const MapComponent = dynamic(() => import('./MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="map-container bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <div className="loading-spinner mx-auto mb-4"></div>
        <p className="text-gray-600">Carregando mapa interativo...</p>
      </div>
    </div>
  )
});

export default function Location() {
  return (
    <div className="fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Geolocalização em Tempo Real</h2>
        <p className="text-gray-600">Acompanhe a localização e movimentação do paciente</p>
      </div>

      {/* Cards de Informações */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
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
        </div>

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

      {/* Mapa Interativo */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-gray-900">Mapa Interativo</h3>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Trajeto atual</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Zona segura</span>
            </div>
          </div>
        </div>
        <MapComponent />
      </div>
    </div>
  );
}
