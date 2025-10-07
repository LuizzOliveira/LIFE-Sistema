'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeartbeat, 
  faShieldAlt, 
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

export default function Plans() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Free',
      icon: faHeartbeat,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      monthlyPrice: 0,
      yearlyPrice: 0,
      description: 'Ideal para monitoramento essencial',
      features: [
        '30 dias de acesso Premium',
        'Após 30 dias, monitoramento de queda inteligente',
        'Alertas por email',
        'Suporte por email'
      ],
      buttonClass: 'bg-blue-600 hover:bg-blue-700',
      buttonText: 'Começar Agora'
    },
    {
      name: 'Avançado',
      icon: faShieldAlt,
      iconBg: 'bg-gradient-to-br from-blue-500 to-purple-600',
      iconColor: 'text-white',
      monthlyPrice: 60,
      yearlyPrice: 48,
      description: 'Monitoramento completo e inteligente',
      features: [
        'Monitoramento de queda inteligente',
        'Geolocalização em tempo real',
        'Monitoramento termal avançado',
        'Monitoramento de batimentos cardíacos',
        'Alertas SMS + Push + Email',
        'Histórico mensal',
        'Suporte prioritário'
      ],
      buttonClass: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700',
      buttonText: 'Assinar Agora'
    }
  ];

  return (
    <div className="fade-in">
      {/* Cabeçalho */}
      {/* <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Planos Premium</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm">
          Escolha o plano ideal para suas necessidades de monitoramento. Todos os planos incluem suporte técnico e atualizações gratuitas.
        </p>
      </div> */}

      {/* Toggle Anual/Mensal */}
      <div className="flex justify-center mb-4">
        <div className="bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setBillingPeriod('monthly')}
            className={`cursor-pointer px-5 py-2 rounded-md text-sm font-medium ${
              billingPeriod === 'monthly'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            Mensal
          </button>
          <button
            onClick={() => setBillingPeriod('yearly')}
            className={`cursor-pointer px-5 py-2 rounded-md text-sm font-medium ${
              billingPeriod === 'yearly'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            Anual <span className="text-green-600 text-xs">(20% OFF)</span>
          </button>
        </div>
      </div>

      {/* Cards dos Planos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md relative flex flex-col justify-between border border-gray-200 hover:border-blue-500 hover:shadow-md hover:shadow-blue-100 transition-all duration-300"
          >
            <div className="text-center mb-4">
              <div className={`w-14 h-14 ${plan.iconBg} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                <FontAwesomeIcon icon={plan.icon} className={`${plan.iconColor} text-xl`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
              <p className="text-gray-600 mb-2 text-sm">{plan.description}</p>
              <div className="text-3xl font-bold text-blue-600 mb-1">
                R$ {billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
              </div>
              <p className="text-gray-500 text-xs">/mês</p>
            </div>

            <ul className="space-y-2 mb-4 text-sm">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`cursor-pointer w-full ${plan.buttonClass} text-white py-2.5 rounded-lg font-semibold transition-all mt-auto`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>

      {/* Garantia e Benefícios */}
      <div className="mt-0 text-center">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl max-w-4xl mx-auto">
          {/* <h3 className="text-lg font-bold text-gray-900 mb-1">Garantia de 30 dias</h3>
          <p className="text-gray-600 mb-4 text-sm">
            Experimente sem riscos. Se não ficar satisfeito, devolvemos 100% do seu dinheiro.
          </p> */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faShieldAlt} className="text-green-500 mr-2" />
              <span>Dados seguros</span>
            </div>
            <div className="flex items-center">
              <span className="text-blue-500 mr-2">🎧</span>
              <span>Suporte especializado</span>
            </div>
            <div className="flex items-center">
              <span className="text-purple-500 mr-2">🔄</span>
              <span>Atualizações gratuitas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
