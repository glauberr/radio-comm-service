import React from 'react';
import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

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
        <div className="space-x-4">
          <Button onClick={() => navigate('/login')} variant="default">Entrar</Button>
          <Button onClick={() => navigate('/register')} variant="outline">Registrar</Button>
        </div>
      </div>
    </div>
  );
};

export default Index;