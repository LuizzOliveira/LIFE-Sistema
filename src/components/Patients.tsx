'use client';

import { useState, FormEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserShield } from '@fortawesome/free-solid-svg-icons';

export default function Patients() {
  const [patientFormData, setPatientFormData] = useState({});
  const [tutorFormData, setTutorFormData] = useState({});

  const handlePatientSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Paciente cadastrado com sucesso!');
    (e.target as HTMLFormElement).reset();
  };

  const handleTutorSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Tutor cadastrado com sucesso!');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Cadastro de Paciente e Tutor</h2>
        <p className="text-gray-600">Gerencie informações dos pacientes e seus responsáveis</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Formulário do Paciente */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <FontAwesomeIcon icon={faUser} className="text-blue-600 text-lg" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Dados do Paciente</h3>
              <p className="text-sm text-gray-600">Informações pessoais e médicas</p>
            </div>
          </div>
          
          <form onSubmit={handlePatientSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nome Completo *</label>
                <input 
                  type="text" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                  placeholder="Digite o nome completo"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Data de Nascimento *</label>
                <input 
                  type="date" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">CPF *</label>
                <input 
                  type="text" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                  placeholder="000.000.000-00"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Sexo *</label>
                <select 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">Selecione</option>
                  <option value="M">Masculino</option>
                  <option value="F">Feminino</option>
                  <option value="O">Outro</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Endereço Completo *</label>
              <input 
                type="text" 
                required 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                placeholder="Rua, número, bairro, cidade, estado"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Telefone *</label>
                <input 
                  type="tel" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                  placeholder="email@exemplo.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Condições Médicas</label>
              <textarea 
                rows={3} 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                placeholder="Descreva condições médicas relevantes, alergias, medicamentos em uso..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Cadastrar Paciente
            </button>
          </form>
        </div>

        {/* Formulário do Tutor */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <FontAwesomeIcon icon={faUserShield} className="text-green-600 text-lg" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Dados do Tutor</h3>
              <p className="text-sm text-gray-600">Responsável pelo paciente</p>
            </div>
          </div>
          
          <form onSubmit={handleTutorSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nome Completo *</label>
                <input 
                  type="text" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors" 
                  placeholder="Digite o nome completo"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Parentesco *</label>
                <select 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                >
                  <option value="">Selecione</option>
                  <option value="filho">Filho(a)</option>
                  <option value="conjuge">Cônjuge</option>
                  <option value="irmao">Irmão(ã)</option>
                  <option value="neto">Neto(a)</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">CPF *</label>
                <input 
                  type="text" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors" 
                  placeholder="000.000.000-00"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Data de Nascimento *</label>
                <input 
                  type="date" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Endereço Completo *</label>
              <input 
                type="text" 
                required 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors" 
                placeholder="Rua, número, bairro, cidade, estado"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Telefone Principal *</label>
                <input 
                  type="tel" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors" 
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Telefone Secundário</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors" 
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
              <input 
                type="email" 
                required 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors" 
                placeholder="email@exemplo.com"
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Cadastrar Tutor
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
