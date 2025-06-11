'use client';

import Address from "@/components/custom/Address";
import CartServices from "@/components/custom/CartServices";
import ImageUpload from "@/components/custom/ImageUpload";
import Issues from "@/components/custom/Issues";
import { ChevronLeft, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import Link from "next/link";
import LargeSubmitButton from "@/components/custom/LargeSubmitButton";


const Summary = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>("");

  useEffect(() => {
    const storedDate = localStorage.getItem("selectedDate");
    if (storedDate) {
      setSelectedDate(storedDate);
    }
  }, []); // Empty dependency array → Runs only on mount

  return (
    <div className="grid bg-[#FDFDFF]">
      <div className="flex items-end justify-between pb-4 bg-[#231F20] h-[101px] p-4">
        <div className="flex items-center space-x-2">
          <Link href="/booking">
          <ChevronLeft className="text-white" />
          </Link>
          <h1 className="text-white text-xl font-semi-bold font-inter">
            Summary
          </h1>
        </div>
        <div className="relative">
          <ShoppingCart className="text-white font-extrabold h-[24px] w-[24px]" />
          <div className="absolute -right-2 -top-2 bg-yellow-400 h-[18px] w-[18px] rounded-xl flex justify-center items-center font-inter text-xs font-semibold">
            3
          </div>
        </div>
      </div>
      <Address />
      {/* date  picker read-only*/}

      <div className="text-black ml-4 mt-4">Selected Date & Time Slot</div>
      <div className="relative mx-4 mt-2">
        <Input
          className="h-10 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
          value={selectedDate ?? "No date selected"}
          readOnly
        />
      </div>
      <CartServices />
      <Issues />
      <ImageUpload />
      <Link href="/payment" className='flex justify-center items-center'>
        {/* <Button className="mt-6 w-full sm:w-auto bg-black text-white py-2 rounded">
    View Summary
    </Button> */}
        <LargeSubmitButton name="Proceed to Payment"/>
      </Link>
    </div>
  );
};

export default Summary;
