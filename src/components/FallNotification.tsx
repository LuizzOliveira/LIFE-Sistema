'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faTimes } from '@fortawesome/free-solid-svg-icons';

interface FallNotificationProps {
  show: boolean;
  onClose: () => void;
}

export default function FallNotification({ show, onClose }: FallNotificationProps) {
  if (!show) return null;

  const now = new Date();
  const timeString = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;

  return (
    <div className="fixed top-24 right-6 bg-white border-l-4 border-red-500 p-4 rounded-lg shadow-2xl z-50 alert-shake max-w-sm">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <FontAwesomeIcon icon={faExclamationTriangle} className="text-red-500 text-xl" />
        </div>
        <div className="ml-3 flex-1">
          <h4 className="text-red-800 font-bold text-sm">🚨 ALERTA DE QUEDA DETECTADA!</h4>
          <p className="text-red-700 text-xs mt-1">Detectada às {timeString} - Hoje</p>
          <p className="text-red-600 text-xs">📍 Rua das Flores, 123 - São Paulo</p>
          <div className="mt-2 flex space-x-2">
            <button className="bg-red-600 text-white px-3 py-1 rounded text-xs hover:bg-red-700">
              Chamar Socorro
            </button>
            <button 
              onClick={onClose}
              className="bg-gray-300 text-gray-700 px-3 py-1 rounded text-xs hover:bg-gray-400"
            >
              Dispensar
            </button>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="ml-2 text-red-400 hover:text-red-600"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  );
}
