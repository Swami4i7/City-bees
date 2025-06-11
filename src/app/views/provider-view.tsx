"use client";

import React, { useState } from "react";
import ServiceCategorySelector from "../../components/client/ServiceCategorySelector";
import ServiceList from "../../components/client/ServiceList";
import Cart from "../../components/client/Cart";
import LocationHeader from "@/components/client/LocationHeader";
import ServiceCard from "@/components/client/ServiceCard";
import VideoGifComponent from "@/components/client/VideoGif";

const Provider: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Standard");
  const [serviceCount, setServiceCount] = useState<Record<string, number>>({
    "AC Service": 0,
    "AC Gas Refill": 0,
  });
  const videoLink="/assets/videos/walking.mp4"

  const standardServices = [
    {
      name: "Air Conditioner Service",
      description: "A/C overall checkup with deep cleaning. Both indoor and outdoor foam wash with water jet clean",
      warranty: "2 months service warranty",
    },
    {
      name: "A/C Gas Filling",
      description: "A/C overall checkup with gas refilling. 50% of the gas could be refilled at this cost.",
      warranty: "2 months service warranty",
    },
    {
      name: "A/C Install or Pack up",
      description: "A/C overall checkup. Both outdoor and indoor unit fitting and pack up.",
      warranty: "2 months service warranty",
    }
  ];

  const nonStandardServices = [
    {
      name: "A/C Inspections",
      description: "A/C overall checkup. 50% of the gas could be refilled. Outdoor and Indoor Unit complete checkup. Gas checkup. Extra cost for spare parts.",
      warranty: "service warranty",
    },
  ];

  const handleAdd = (serviceName: string) => {
    setServiceCount((prev) => ({
      ...prev,
      [serviceName]: (prev[serviceName] || 0) + 1,
    }));
  };

  const handleRemove = (serviceName: string) => {
    setServiceCount((prev) => ({
      ...prev,
      [serviceName]: Math.max((prev[serviceName] || 0) - 1, 0),
    }));
  };

  // const onEditLocation = () => {
  //   console.log("Edit location clicked");
  //   // Handle edit location functionality
  // };

  // const onBackClick = () => {
  //   console.log("Back clicked");
  //   // Handle back button functionality
  // };

  return (
    <div className=" p-4">
      {/* 🏠 Location Header */}
      <LocationHeader
        locationName="Flat 02"
        address="Akshaya HQ, Town street, Dubai"
        // onEdit={onEditLocation}
        // onBack={onBackClick}
      />
      <div className="pl-4 pr-4 pb-4">
        {/* 🎥 Video Section */}
        <div className="my-6">
        <VideoGifComponent videoLink={videoLink} />
        </div>

        <ServiceCard
          serviceName="Air Conditioner Service"
          rating={"4.5"}
          priceInfo="(cost vary depends on service providers)"
        >
          <ServiceCategorySelector
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <ServiceList
            services={selectedCategory === "Standard" ? standardServices : nonStandardServices}
            onAdd={handleAdd}
            onRemove={handleRemove}
            quantities={serviceCount}
          />

          <Cart
            selectedCategory={selectedCategory}
            cartCount={Object.values(serviceCount).reduce((a, b) => a + b, 0)}
          />
        </ServiceCard>
      </div>
    </div>
  );
};

export default Provider;
