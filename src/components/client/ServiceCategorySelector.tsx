import React from 'react';

interface ServiceCategorySelectorProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const ServiceCategorySelector: React.FC<ServiceCategorySelectorProps> = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="space-y-4 mb-4 mt-6">
      {/* Category Selector Buttons */}
      <div className="flex space-x-2 mb-2">
        <button 
          className={`px-4 py-2 rounded-xl ${selectedCategory === 'Standard' ? 'bg-[#FFCC0480] text-[#231F20] font-medium' : 'text-[#878787]'}`} 
          onClick={() => onCategoryChange('Standard')}
        >
          Standard
        </button>
        <button 
          className={`px-4 py-2 rounded-xl ${selectedCategory === 'Non Standard' ? 'bg-[#FFCC0480] text-[#231F20] font-medium' : 'text-[#878787]'}`} 
          onClick={() => onCategoryChange('Non Standard')}
        >
          Non Standard
        </button>
      </div>

      {/* Bullet points below the category selector */}
      <div className="text-sm text-[#434343] font-medium">
        {selectedCategory === 'Standard' ? (
          <ul className="list-disc pl-5">
            <li>Fixed Price for all services and no extra or visiting charges.</li>
          </ul>
        ) : (
          <ul className="list-disc pl-5">
            <li>Visiting charge will be added and for spars, extra cost will be added with GST.</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ServiceCategorySelector;
