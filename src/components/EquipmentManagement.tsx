import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

const EquipmentManagement = () => {
  const { toast } = useToast()

  const handleRegister = () => {
    toast({
      title: "Equipment Registered",
      description: "New equipment has been added to the inventory.",
    })
  };

  const handleRental = () => {
    toast({
      title: "Rental Price Updated",
      description: "The rental price has been updated successfully.",
    })
  };

  const handleRepair = () => {
    toast({
      title: "Repair Request Submitted",
      description: "A new repair request has been created.",
    })
  };

  const handlePurchase = () => {
    toast({
      title: "Purchase Completed",
      description: "The equipment purchase has been processed.",
    })
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Equipment Management</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Register Equipment</h2>
          <Input placeholder="Equipment Name" className="mb-2" />
          <Input placeholder="Serial Number" className="mb-2" />
          <Button onClick={handleRegister}>Register</Button>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Update Rental Price</h2>
          <Input placeholder="Equipment ID" className="mb-2" />
          <Input placeholder="New Price" type="number" className="mb-2" />
          <Button onClick={handleRental}>Update Price</Button>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Request Repair</h2>
          <Input placeholder="Equipment ID" className="mb-2" />
          <Input placeholder="Issue Description" className="mb-2" />
          <Button onClick={handleRepair}>Submit Repair Request</Button>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Purchase Equipment</h2>
          <Input placeholder="Equipment Name" className="mb-2" />
          <Input placeholder="Quantity" type="number" className="mb-2" />
          <Button onClick={handlePurchase}>Purchase</Button>
        </div>
      </div>
    </div>
  );
};

export default EquipmentManagement;