"use client";

import Link from "next/link";
import { ChevronLeft, CircleCheck, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import { format } from "date-fns";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import LargeSubmitButton from "@/components/custom/LargeSubmitButton";

const ServiceProvider: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>();
  const [showSearch, setShowSearch] = useState(false);
  const [open, setOpen] = useState(false);
 

  const [openModal, setOpenModal] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);

  const handleSelect = (provider) => {
    setSelectedProvider(provider);
    localStorage.setItem("selectedProvider", JSON.stringify(provider)); // Store in localStorage
  };


  const serviceProviders = [
    {
      name: "Mustafa A/C Service",
      price: "34 د.إ",
      services: [
        { type: "A/C Service", count: 2, details: [{ name: "1.0 Ton split A/C", quantity: 1, price: "10 د.إ" }, { name: "1.5 Ton split A/C", quantity: 1, price: "10 د.إ" }] },
        { type: "A/C Gas Refilling", count: 1, details: [{ name: "1.5 Ton split A/C", quantity: 1, price: "11 د.إ" }] },
      ],
      fees: { platformFee: "2 د.إ", tax: "1 د.إ", total: "34 د.إ" },
      rating: 4.2,
      serviceDetails: "A/C overall checkup.",
      additionalInfo: "50% of the gas could be refilled at this cost.",
    },
    {
      name: "Rafiq appliance",
      price: "33 د.إ",
      services: [
        { type: "A/C Service", count: 2, details: [{ name: "1.0 Ton split A/C", quantity: 1, price: "10 د.إ" }, { name: "1.5 Ton split A/C", quantity: 1, price: "10 د.إ" }] },
        { type: "A/C Gas Refilling", count: 1, details: [{ name: "1.5 Ton split A/C", quantity: 1, price: "10 د.إ" }] },
      ],
      fees: { platformFee: "2 د.إ", tax: "1 د.إ", total: "33 د.إ" },
      serviceDetails: "A/C overall checkup.",
      additionalInfo: "50% of the gas could be refilled at this cost.",
      rating: 4.5,
    },
    {
      name: "Rasheed and Bhai",
      price: "41 د.إ",
      services: [
        { type: "A/C Service", count: 2, details: [{ name: "1.0 Ton split A/C", quantity: 1, price: "12 د.إ" }, { name: "1.5 Ton split A/C", quantity: 1, price: "14 د.إ" }] },
        { type: "A/C Gas Refilling", count: 1, details: [{ name: "1.5 Ton split A/C", quantity: 1, price: "13 د.إ" }] },
      ],
      fees: { platformFee: "2 د.إ", tax: "1 د.إ", total: "41 د.إ" },
      rating: 4.7,
      serviceDetails: "A/C overall checkup.",
      additionalInfo: "50% of the gas could be refilled at this cost.",
    },
  ];

 

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
      setShowSearch(true);
      setOpen(false);
      
      // Store the date in localStorage
      localStorage.setItem("selectedDate", format(selectedDate, "PPP"));
    }
  };



  const openBreakup = () => {
    
    setOpenModal(true);
  };
  

  return (


    <div>
      {/* Header (No Changes) */}
      <div className="h-24 bg-black text-white flex items-end px-4 py-4">
        <Link href="/cart" className="flex items-center">
          <ChevronLeft className="left-0" />
        </Link>
        <div className="font-inter text-base  pl-2 text-left">Service Provider</div>
      </div>

      {/* Info Card (No Changes) */}
      <div className="bg-[#FFCC0440] rounded-md h-20 m-4 flex items-center justify-between px-4">
        <div className="flex flex-col justify-center">
          <p className="text-md text-[#434343] font-semibold">Total service: 3</p>
          <p className="text-xs font-normal text-[#6D6D6D]">(cost based on your services)</p>
        </div>
        {/* <div>
          <Image src="/Group 292.png" alt="hero" width={24} height={24} />
        </div> */}
        {/* modal */}
        <div>
      {/* Image Trigger */}
     
            <Image src="/Group 292.png" alt="hero" width={24} height={24} className="outline-border:none"/>
          
        <Dialog open={openModal} onOpenChange={setOpenModal}>
        {/* Modal Content */}
        <DialogContent className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg p-6">
          <DialogHeader>
            <DialogTitle className="text-lg font-extralight text-left font-interflex justify-between items-center">
              Total breakup summary
              
            </DialogTitle>
          </DialogHeader>

          {/* Services Breakdown */}
          <div className="space-y-4">
            {/* Service 1 */}
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <span className="bg-gray-200 text-[#226DB4]  rounded-full px-2 py-1 text-xs ">2</span>
                <p >{serviceProviders[1].services[0].type}</p>

              </div>
              <div className="pl-5 relative border-l border-gray-300 space-y-1 translate-x-3">
                <p className="flex justify-between text-sm"><span>1.0 Ton split A/C x 1</span><span className="text-[#434343]">10 د.إ</span></p>
                <p className="flex justify-between text-sm"><span>1.5 Ton split A/C x 1</span><span className="text-[#434343]">10 د.إ</span></p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-xs ">1</span>
                <p >A/C Gas Refilling</p>
              </div>
              <div className="pl-5 relative border-l border-gray-300 space-y-1 translate-x-3">
                <p className="flex justify-between text-sm"><span>1.5 Ton split A/C x 1</span><span className="text-[#434343]">10 د.إ</span></p>
              </div>
            </div>

            {/* Fees Section */}
            <div className="border-t border-gray-300 pt-2 space-y-1  text-[#434343]">
              <p className="flex justify-between text-sm"><span>Platform fee</span><span>2 د.إ</span></p>
              <p className="flex justify-between text-sm"><span>Govt Tax</span><span>1 د.إ</span></p>
            </div>

            {/* Total */}
            <div className="border-t border-gray-300 pt-2 text-[#434343]">
              <p className="flex justify-between"><span>Total</span><span>33 د.إ</span></p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
      </div>

      {/* Select Date Section (No Changes) */}
      <div className="text-black ml-4">Select Date & Time slot</div>

      {/* Date Picker with Image Trigger */}
      <div className="relative mx-4">
        <Input
          className="h-10 mt-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 pr-10"
          placeholder="Select date"
          value={date ? format(date, "PPP") : ""}
          readOnly
        />

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={() => setOpen(!open)}
            >
              <Image
                src="/fluent-mdl2_date-time.png"
                alt="Calendar Icon"
                width={16}
                height={16}
                className="h-5 w-5 cursor-pointer"
              />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={date} onSelect={handleDateSelect} />
          </PopoverContent>
        </Popover>
      </div>

      {/* Search Bar (Only Visible After Date Selection) */}
      {showSearch && (
  <div className="relative mx-4 mt-4">
    {/* Search Icon Positioned on the Left */}
    <Image
      src="/Group 6.png"
      alt="Search Icon"
      width={16}
      height={16}
      className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
    />

    {/* Input Field with Left Padding */}
    <Input
      className="h-10 w-full border border-gray-300 rounded-md pl-10 focus:outline-none focus:ring-2 focus:ring-gray-600 text-[#888888]"
      placeholder="Search by service name"
    />
  </div>
)}


      {/* Card Grid (Only Visible After Date Selection) */}
      {showSearch && (
  <div className="m-4 space-y-4">
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {serviceProviders.map((provider, index) => (
        <div key={index} className="border border-gray-300 rounded-md p-4">
          {/* First Row: Service Name, Price, View Breakup, Select Button */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-md font-semibold">{provider.name}</p>
              <div className="flex items-center gap-2">
                <p className="font-semibold">{provider.price}</p> 
                <Dialog open={openModal} onOpenChange={setOpenModal}>               
                  <DialogTrigger asChild>
                    <button onClick={() => openBreakup()}>
                      <a href="#" className="text-[#226DB4] text-sm underline">View Breakup</a>
                    </button>
                  </DialogTrigger>
                </Dialog>
              </div>
            </div>
            <button
              className={`w-20 border px-4 py-1 rounded-md mt-2 flex items-center justify-center ${
                selectedProvider?.name === provider.name
                  ? "bg-[#226DB4] text-white border-[#226DB4]"
                  : "bg-white text-[#226DB4] border-[#226DB4]"
              }`}
              onClick={() => handleSelect(provider)}
            >
              {selectedProvider?.name === provider.name ? <CircleCheck size={16} /> : "Select"}
            </button>
          </div>

          {/* Service Details */}
          <div className="flex justify-between items-center border-t-2 mt-2 border-dashed border-gray-300 pt-2">
            <div className="text-gray-500 text-sm space-y-1">
              <ul className="list-disc list-inside">
                <li className="text-xs">{provider.serviceDetails}</li>
                <li className="text-xs">{provider.additionalInfo}</li>
              </ul>
            </div>
            <div className="flex items-center gap-1">
              <Star className="text-yellow-500 w-4 h-4" />
              <span className="text-sm">{provider.rating}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)}




{selectedProvider && (
  <Link href="/booking" className='flex justify-center items-center'>
  <LargeSubmitButton name="Proceed to Booking"/>
  </Link>
)}

    </div>
  );
};

export default ServiceProvider;
