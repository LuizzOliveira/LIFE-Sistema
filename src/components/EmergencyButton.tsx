'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmbulance } from '@fortawesome/free-solid-svg-icons';

interface EmergencyButtonProps {
  onClick: () => void;
}

export default function EmergencyButton({ onClick }: EmergencyButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="fixed cursor-pointer top-20 right-6 bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-full shadow-2xl z-50 emergency-pulse font-bold text-sm"
    >
      <FontAwesomeIcon icon={faAmbulance} className="mr-4 " />
      EMERGÊNCIA SAMU
    </button>
  );
}
