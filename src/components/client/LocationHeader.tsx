import React from "react";
import { MapPinned, ChevronLeft, PencilIcon } from "lucide-react"; // Import icons

interface LocationHeaderProps {
  locationName: string;
  address: string;
}

const LocationHeader: React.FC<LocationHeaderProps> = ({
  locationName,
  address,
}) => {
  return (
    <div className="w-full h-[60px] flex justify-between items-center">
      {/* Left Side: Back Button + Location */}
      <div className="flex items-center gap-2">
        {/* Chevron Left Icon with Transparent Background */}
        <div
          className="flex items-center justify-center bg-transparent hover:bg-transparent focus:bg-transparent p-2 cursor-pointer"
          // onClick={onBack} // Uncomment if you want to add functionality
        >
          <ChevronLeft size={32} className="text-[#231F20]" />
        </div>

        {/* Map Pin + Location Info */}
        <div className="flex items-center gap-2">
          <MapPinned size={18} className="text-[#231F20]" />
          <div>
            <h3 className="text-sm font-semibold text-[#231F20]">{locationName}</h3>
            <p className="text-xs text-[#6A6A6A] font-semibold">{address}</p>
          </div>
        </div>
      </div>

      {/* Right Side: Edit Button with Transparent Background */}
      <div
        className="flex items-center justify-center bg-transparent hover:bg-transparent focus:bg-transparent p-2 cursor-pointer"
        // onClick={onEdit} // Uncomment if you want to add functionality
      >
        <PencilIcon size={20} className="text-[#231F20] mr-2" />
      </div>
    </div>
  );
};

export default LocationHeader;
