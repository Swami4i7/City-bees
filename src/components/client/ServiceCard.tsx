import React from 'react';
import { StarIcon } from 'lucide-react';

// Define the types for the props
interface ServiceCardProps {
  serviceName: string;
  rating: string;
  priceInfo: string;
  children: React.ReactNode; // Allows any valid JSX as children
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  serviceName,
  rating,
  priceInfo,
  children,
}) => {
  return (
    <div className="bg-white rounded-lg">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-2">
        {/* Service Name and Rating in the same row */}
        <div className="flex justify-between w-full">
          <h3 className="text-xl font-semibold">{serviceName}</h3>
          <div className="flex items-center">
            <StarIcon className="text-yellow-400" size={12} />
            <span className="ml-1 text-gray-500 text-xs">{rating}</span>
          </div>
        </div>
        
        {/* Price Info Section */}
      </div>

      {/* Price Info */}
      <div>
        <p className="text-sm text-[#6D6D6D]">{priceInfo}</p>
      </div>

      {/* Child Content */}
      <div className="">{children}</div>
    </div>
  );
};

export default ServiceCard;
