'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeartbeat, 
  faTachometerAlt, 
  faMapMarkerAlt, 
  faChartLine, 
  faCrown, 
  faTimes,
  faUser
} from '@fortawesome/free-solid-svg-icons';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Sidebar({ isOpen, onClose, activeTab, onTabChange }: SidebarProps) {
  type MenuItem = {
    id: string;
    icon: typeof faTachometerAlt;
    label: string;
    badge?: string | number;
  };

  const menuItems: MenuItem[] = [
    { id: 'dashboard', icon: faTachometerAlt, label: 'Painel Principal' },
    { id: 'location', icon: faMapMarkerAlt, label: 'Geolocalização' },
    { id: 'history', icon: faChartLine, label: 'Histórico Mensal' },
    { id: 'plans', icon: faCrown, label: 'Planos' },
  ];

  return (
    <div className={`fixed left-0 top-0 h-full w-72 glass-effect shadow-2xl z-40 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 sidebar-transition`}>
      {/* Header da Sidebar */}
      <div className="p-6 border-b border-gray-200/50 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center status-online">
              <FontAwesomeIcon icon={faHeartbeat} className="text-white text-xl" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Pulseira L.I.F.E</h1>
              <p className="text-sm text-gray-600">Sistema Inteligente</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="lg:hidden text-gray-600 hover:text-gray-900 p-2"
          >
            <FontAwesomeIcon icon={faTimes} className="text-lg" />
          </button>
        </div>
      </div>

      {/* Status do Paciente */}
      <div className="p-4 border-b border-gray-200/50">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-3 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faUser} className="text-green-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">Maria Silva</p>
              <p className="text-xs text-gray-600">Usuario Ativo</p>
              <div className="flex items-center mt-1">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-xs text-green-600 font-medium">Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu de Navegação */}
      <nav className="p-4 flex-1 ">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onTabChange(item.id)}
                className={`cursor-pointer w-full flex items-center space-x-3 p-4 rounded-xl transition-all ${
                  activeTab === item.id
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <div className="relative">
                  <FontAwesomeIcon icon={item.icon} className="text-lg" />
                  {item.badge && (
                    <span className="notification-badge">{item.badge}</span>
                  )}
                </div>
                <span className="font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer da Sidebar */}
      <div className="p-4 border-t border-gray-200/50">
        <div className="text-center">
          <p className="text-xs text-gray-500">Versão 2.1.0</p>
          <p className="text-xs text-gray-400">© 2024 LIFE</p>
        </div>
      </div>
    </div>
  );
}
