import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { addEquipment, getEquipment } from "@/utils/localStorage"

const EquipmentManagement = () => {
  const { toast } = useToast()

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const equipmentData = {
      name: formData.get('equipmentName'),
      serialNumber: formData.get('serialNumber'),
    };
    addEquipment(equipmentData);
    toast({
      title: "Equipamento Registrado",
      description: "Novo equipamento foi adicionado ao inventário.",
    })
  };

  const handleRental = () => {
    toast({
      title: "Preço de Aluguel Atualizado",
      description: "O preço de aluguel foi atualizado com sucesso.",
    })
  };

  const handleRepair = () => {
    toast({
      title: "Solicitação de Reparo Enviada",
      description: "Uma nova solicitação de reparo foi criada.",
    })
  };

  const handlePurchase = () => {
    toast({
      title: "Compra Concluída",
      description: "A compra do equipamento foi processada.",
    })
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gerenciamento de Equipamentos</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Registrar Equipamento</h2>
          <form onSubmit={handleRegister}>
            <Input name="equipmentName" placeholder="Nome do Equipamento" className="mb-2" />
            <Input name="serialNumber" placeholder="Número de Série" className="mb-2" />
            <Button type="submit">Registrar</Button>
          </form>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Atualizar Preço de Aluguel</h2>
          <Input placeholder="ID do Equipamento" className="mb-2" />
          <Input placeholder="Novo Preço" type="number" className="mb-2" />
          <Button onClick={handleRental}>Atualizar Preço</Button>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Solicitar Reparo</h2>
          <Input placeholder="ID do Equipamento" className="mb-2" />
          <Input placeholder="Descrição do Problema" className="mb-2" />
          <Button onClick={handleRepair}>Enviar Solicitação de Reparo</Button>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Comprar Equipamento</h2>
          <Input placeholder="Nome do Equipamento" className="mb-2" />
          <Input placeholder="Quantidade" type="number" className="mb-2" />
          <Button onClick={handlePurchase}>Comprar</Button>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Equipamentos Registrados</h2>
        <ul>
          {getEquipment().map((equipment: any, index: number) => (
            <li key={index} className="mb-2">
              {equipment.name} - Série: {equipment.serialNumber}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EquipmentManagement;
