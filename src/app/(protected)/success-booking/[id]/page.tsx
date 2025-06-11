"use client";

import { Button } from "@/components/ui/button";
import { redirect, useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const { id } = useParams();
    return (
      <div className="flex flex-col space-y-2 items-center justify-center h-screen bg-[#FFCC04]">
          <h1>ID: {id}</h1>
          <h1 className="p-4">BOOKING SUCCESSFULL</h1>
          <h4 className="text-center p-4">
            You will be notified once the service provider approve your request
            and proceed for payment
          </h4>
        <Button onClick={() => redirect("/services")}>Go To Home</Button>
      </div>
    ); 
};

export default Page;
