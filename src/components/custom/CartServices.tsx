'use client'

import { useState } from "react";

const CartServices = () => {

      const [images, setImages] = useState<string[]>([]);
      const services = [
        {
          id: 2,
          name: "A/C Service",
          items: [
            { id: 1, type: "1.0 Ton split A/C", quantity: 1 },
            { id: 2, type: "1.5 Ton split A/C", quantity: 1 },
          ],
        },
        {
          id: 1,
          name: "A/C Gas Refilling",
          items: [{ id: 3, type: "1.5 Ton split A/C", quantity: 1 }],
        },
      ];

      const [serviceData, setServiceData] = useState(services);

      const updateQuantity = (
        serviceId: number,
        itemId: number,
        change: number
      ) => {
        setServiceData((prev) =>
          prev.map((service) =>
            service.id === serviceId
              ? {
                  ...service,
                  items: service.items.map((item) =>
                    item.id === itemId
                      ? {
                          ...item,
                          quantity: Math.max(0, item.quantity + change),
                        }
                      : item
                  ),
                }
              : service
          )
        );
      };

    
  return (
    <div className="p-4 border-b-2 border-dashed border-[#D8D8D8]">
      {serviceData.map((service) => (
        <div key={service.id} className="relative pb-2">
          {/* Service Title with Blue Circular Badge */}
          <div className="flex items-center gap-3 pb-1">
            <div className="w-8 h-8 flex items-center justify-center rounded-full border bg-gray-200 text-[#226DB4] text-sm ">
              {service.id}
            </div>
            <div>{service.name}</div>
          </div>

          {/* Service Items */}
          {service.items.map((item) => (
            <div
              key={item.id}
              className=" flex realtive justify-between items-center p-3 pl-7 border-l border-gray-[#E0E0E0] translate-x-4 "
            >
              <span className="text-sm">{item.type}</span>

              {/* Quantity Control Buttons */}
              <div className="flex items-center border border-[#226DB4] rounded-md text-[#226DB4] text-sm  ">
                <button
                  onClick={() => updateQuantity(service.id, item.id, -1)}
                  className="w-8 h-8 flex items-center justify-center text-[#226DB4]  border-[#226DB4] "
                >
                  -
                </button>
                <span className="w-8 text-center text-[#226DB4] text-sm ">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(service.id, item.id, 1)}
                  className="w-8 h-8 flex items-center justify-center text-[#226DB4]  border-[#226DB4]"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default CartServices