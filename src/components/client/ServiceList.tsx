import React from 'react';
import ServiceDetail from './ServiceDetail';

interface ServiceListProps {
  services: Array<{ name: string; description: string; warranty: string }>;
  onAdd: (serviceName: string) => void;
  onRemove: (serviceName: string) => void;
  quantities: { [key: string]: number };
}

const ServiceList: React.FC<ServiceListProps> = ({ services, onAdd, onRemove, quantities }) => {
  return (
    <div>
      {services.map(service => (
        <ServiceDetail
          key={service.name}
          serviceName={service.name}
          description={service.description}
          warranty={service.warranty}
          onAdd={() => onAdd(service.name)}
          onRemove={() => onRemove(service.name)}
          quantity={quantities[service.name]}
        />
      ))}
    </div>
  );
};

export default ServiceList;
