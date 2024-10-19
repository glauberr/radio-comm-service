import React from 'react';
import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">Radio Communicator Commerce and Services</h1>
      <p className="text-xl text-blue-600 mb-8 text-center max-w-2xl">
        Your one-stop solution for radio communication equipment management, rental, repair, and purchase.
      </p>
      <div className="space-x-4">
        <Button onClick={() => navigate('/login')} variant="default">Login</Button>
        <Button onClick={() => navigate('/register')} variant="outline">Register</Button>
      </div>
    </div>
  );
};

export default Index;