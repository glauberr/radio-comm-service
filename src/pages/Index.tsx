import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/worker-with-radio.jpg"
          alt="Trabalhador com rádio comunicador"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="z-10 text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Comércio e Serviços de Radiocomunicação</h1>
        <p className="text-xl text-blue-600 mb-8 text-center max-w-2xl">
          Sua solução completa para gerenciamento, aluguel, reparo e compra de equipamentos de radiocomunicação.
        </p>
        
        {/* Nova seção de marketing de serviços */}
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-blue-100 rounded-lg">
              <h3 className="font-bold text-blue-700">Aluguel de Equipamentos</h3>
              <p className="text-sm text-blue-600">Soluções flexíveis para suas necessidades temporárias.</p>
            </div>
            <div className="p-4 bg-blue-100 rounded-lg">
              <h3 className="font-bold text-blue-700">Reparo e Manutenção</h3>
              <p className="text-sm text-blue-600">Serviço técnico especializado para manter seus equipamentos funcionando.</p>
            </div>
            <div className="p-4 bg-blue-100 rounded-lg">
              <h3 className="font-bold text-blue-700">Venda de Equipamentos</h3>
              <p className="text-sm text-blue-600">Ampla gama de produtos de radiocomunicação de alta qualidade.</p>
            </div>
            <div className="p-4 bg-blue-100 rounded-lg">
              <h3 className="font-bold text-blue-700">Consultoria Técnica</h3>
              <p className="text-sm text-blue-600">Orientação especializada para otimizar suas operações de radiocomunicação.</p>
            </div>
          </div>
        </div>

        {/* Nova seção de informações de contato */}
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Entre em Contato</h2>
          <div className="flex flex-col items-center space-y-2">
            <p className="text-blue-600">
              <span className="font-bold">Telefone:</span> (22) 9 9001 4400
            </p>
            <p className="text-blue-600">
              <span className="font-bold">E-mail:</span> contato@radiocomunicacao.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;