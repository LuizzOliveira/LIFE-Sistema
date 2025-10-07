'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';
import Location from '@/components/Location';
import History from '@/components/History';
import Patients from '@/components/Patients';
import Plans from '@/components/Plans';
import EmergencyButton from '@/components/EmergencyButton';
import FallNotification from '@/components/FallNotification';
import EmergencyModal from '@/components/EmergencyModal';

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showFallNotification, setShowFallNotification] = useState(false);
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setIsSidebarOpen(false);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 font-sans min-h-screen">
      {/* Botão de Emergência SAMU */}
      <EmergencyButton onClick={() => setShowEmergencyModal(true)} />

      {/* Notificação de Alerta de Queda */}
      <FallNotification 
        show={showFallNotification} 
        onClose={() => setShowFallNotification(false)} 
      />

      {/* Overlay Mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      {/* Botão Menu Mobile */}
      <button 
        className="fixed top-4 left-4 lg:hidden bg-white p-3 rounded-xl shadow-lg z-30 hover:shadow-xl transition-all"
        onClick={() => setIsSidebarOpen(true)}
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Conteúdo Principal */}
      <div className="lg:ml-72 min-h-screen">
        <div className="p-6">
          {activeTab === 'dashboard' && <Dashboard onShowFallAlert={() => setShowFallNotification(true)} />}
          {activeTab === 'location' && <Location />}
          {activeTab === 'history' && <History />}
          {activeTab === 'patients' && <Patients />}
          {activeTab === 'plans' && <Plans />}
        </div>
      </div>

      {/* Modal de Emergência SAMU */}
      <EmergencyModal 
        show={showEmergencyModal}
        onClose={() => setShowEmergencyModal(false)}
      />
    </div>
  );
}
