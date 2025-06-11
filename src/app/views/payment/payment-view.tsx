"use client";
import LargeSubmitButton from "@/components/custom/LargeSubmitButton";
import ServiceProvider from "@/components/pages/service-provider/ServiceProvider";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { useState } from "react";

declare global {
  interface Window {
    Razorpay: any;
  }
}
const PaymentView = () => {
  const router = useRouter();

  const AMOUNT = 1000;
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);

    try {
      //create-order
      const response = await fetch("/api/create-order", {
        method: "POST",
      });

      const data = await response.json();

      //initialize razorpay
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: AMOUNT * 100,
        currency: "INR",
        name: "4i Apps",
        description: "Test Transaction",
        order_id: data.orderId,
        handler: function (response: any) {
          console.log("Payment succesfull", response);
         const orderId = response.razorpay_order_id.replace(/^order_/, "");
          if (response)
            router.push(`/success-booking/${orderId}`);
          //redirect to success-booking page
        }
      };

      const rzpl = new window.Razorpay(options);
      rzpl.open();
    } catch (error) {
      console.log("Payment failed", error);
    } finally {
      setIsProcessing(false);
    }
  };
  return (   
      <div className="grid">
          <Script src="https://checkout.razorpay.com/v1/checkout.js" />
              
      {/* header */}
      <div className="flex justify-between items-end pb-4  bg-[#231F20] h-[101px] p-4">
        <div className="flex items-center space-x-2">
          <Link href="/summary">
          <ChevronLeft className="text-white" />
          </Link>
          <h1 className="text-white text-xl font-semi-bold font-inter">Payment</h1>
        </div>

        {/* timer */}
        <div className="bg-[#FDFDFF] rounded-md text-gray-500 p-2 text-xs font-semibold">
          3:00:00
        </div>
      </div>
      {/* selected service  take from srinidhi */}
      <ServiceProvider/>
          
          {/* payment methods */}
          {/* <RazorPay/> */}

      <LargeSubmitButton name="Pay" onClick={handlePayment} isPending={isProcessing}/>
    </div>
  );
};

export default PaymentView;

{/* <button
  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
  onClick={handlePayment}
  disabled={isProcessing}
>
  {isProcessing ? "Processing..." : "Pay Now"}
</button>; */}
