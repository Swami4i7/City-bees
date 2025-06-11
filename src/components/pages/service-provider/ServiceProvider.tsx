import { useEffect, useState } from "react";

const ServiceProvider = () => {

  const [selectedProvider, setSelectedProvider] = useState(null);

    useEffect(() => {
    // Retrieve the selected provider from localStorage
    const storedProvider = localStorage.getItem("selectedProvider");
    if (storedProvider) {
      setSelectedProvider(JSON.parse(storedProvider));
    }
  }, []);

  if (!selectedProvider) {
    return <p className="text-center mt-10">No provider selected.</p>;
  }


  return (
    <div>
      <div className="text-black ml-4 mt-4">Service and Provider</div>

      <div className="grid grid-rows-2 border border-[#E0E0E0] rounded-md h-auto m-4 mt-2 p-4">
        {/* First Row with Two Text Items */}
        <div className="flex flex-col gap-1 pb-2">
          <p className="text-sm font-semibold">
            {selectedProvider.services[0].type}
          </p>
          <p className="text-xs text-gray-600">
            ({selectedProvider.services[0].count} +{" "}
            {selectedProvider.services[1]?.count || 0} : service and gas
            refilling)
          </p>
        </div>

        {/* Second Row with Two Text Items, Separated by a Dashed Line */}
        <div className="flex flex-col gap-1 pt-2 border-t-2 border-dashed border-[#D8D8D8]">
          <p className="text-sm">{selectedProvider.name}</p>
          <p className="text-base font-bold">{selectedProvider.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceProvider