'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmbulance, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

interface EmergencyModalProps {
  show: boolean;
  onClose: () => void;
}

export default function EmergencyModal({ show, onClose }: EmergencyModalProps) {
  if (!show) return null;

  const handleConfirm = () => {
    // Simular chamada de emergência
    alert('SAMU Acionado! Equipe médica a caminho.');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full">
        <div className="text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FontAwesomeIcon icon={faAmbulance} className="text-red-600 text-3xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Chamar SAMU</h3>
          <p className="text-gray-600 mb-8">
            Você está prestes a acionar o serviço de emergência médica. Esta ação deve ser usada apenas em situações de real emergência.
          </p>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <FontAwesomeIcon icon={faExclamationTriangle} className="text-yellow-600 mt-1 mr-3" />
              <div className="text-left">
                <p className="text-sm font-medium text-yellow-800">Informações que serão enviadas:</p>
                <ul className="text-xs text-yellow-700 mt-2 space-y-1">
                  <li>• Localização atual do paciente</li>
                  <li>• Dados médicos do paciente</li>
                  <li>• Contato do tutor responsável</li>
                  <li>• Histórico recente de sinais vitais</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <button 
              onClick={onClose}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-lg font-semibold transition-colors"
            >
              Cancelar
            </button>
            <button 
              onClick={handleConfirm}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Confirmar Chamada
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
