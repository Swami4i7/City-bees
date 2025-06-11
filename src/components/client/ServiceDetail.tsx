import React from "react";
import AddButton from "./AddButton"; // Import the new AddButton component

interface ServiceDetailProps {
  serviceName: string;
  description: string;
  warranty: string;
  onAdd: () => void;
  onRemove: () => void;
  quantity: number;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({
  serviceName,
  description,
  warranty,
  onAdd,
  onRemove,
  quantity,
}) => {
  const handleAdd = () => onAdd();
  const handleRemove = () => onRemove();

  return (
    <div className="p-4 space-y-4 border rounded-lg mb-2">
      <div className="flex justify-between items-center">
        <div>
          {/* Reduced font size for service name */}
          <h4 className="text-md font-semibold">{serviceName}</h4> {/* Reduced to text-sm */}
          <span className="text-sm text-gray-500">({warranty})</span>
        </div>
        {/* Reduced button size */}
        <AddButton onAdd={handleAdd} onRemove={handleRemove} quantity={quantity} />
      </div>

      {/* Dashed Border Below Service Name */}
      <div className="border-t-2 border-dashed my-4"></div>

      {/* Description Section */}
      <div className="space-y-2">
        <ul className="list-disc pl-5 text-sm text-gray-600">
          {description.split(".").filter(line => line.trim()).map((line) => (
            <li key={`${serviceName}-${line.trim()}`}>{line.trim()}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceDetail;
