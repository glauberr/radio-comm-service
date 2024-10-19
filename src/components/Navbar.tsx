import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button"

const Navbar = () => {
  return (
    <nav className="bg-blue-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/images/logo-placeholder.png"
            alt="Logo da Radiocomunicação"
            className="w-10 h-10 mr-4 object-contain"
          />
          <Link to="/" className="text-xl font-bold">Radiocomunicação</Link>
        </div>
        <div className="space-x-4 flex items-center">
          <Link to="/equipment" className="hover:text-blue-200">Equipamentos</Link>
          <Link to="/rental" className="hover:text-blue-200">Aluguel</Link>
          <Link to="/repair" className="hover:text-blue-200">Reparo</Link>
          <Link to="/purchase" className="hover:text-blue-200">Compra</Link>
          <Button variant="outline" className="text-white border-white hover:bg-blue-700">
            <Link to="/login">Entrar</Link>
          </Button>
          <Button variant="default" className="bg-white text-blue-800 hover:bg-blue-100">
            <Link to="/register">Registrar</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;