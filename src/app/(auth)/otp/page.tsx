"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const OtpPage = () => {
  return (
    <>
    

      
        {/* Input Field with Label */}
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="emailOrPhone"
            className="text-[#FAFAFA] text-xs font-medium"
          >
            Enter OTP
          </Label>
          <div className="flex flex-col gap-2">
            <InputOTP maxLength={5}>
              <InputOTPGroup className="w-full flex justify-between gap-x-2 text-white ">
                {/* Manually defining 5 OTP slots */}
                <InputOTPSlot
                  index={0}
                  className="w-14 h-12 text-xl text-white bg-[#2E2E2E] border-none rounded-md text-center caret-white"
                />
                <InputOTPSlot
                  index={1}
                  className="w-14 h-12 text-xl text-white bg-[#2E2E2E] border-none rounded-md text-center"
                />
                <InputOTPSlot
                  index={2}
                  className="w-14 h-12 text-xl text-white bg-[#2E2E2E] border-none rounded-md text-center"
                />
                <InputOTPSlot
                  index={3}
                  className="w-14 h-12 text-xl text-white bg-[#2E2E2E] border-none rounded-md text-center"
                />
                <InputOTPSlot
                  index={4}
                  className="w-14 h-12 text-xl text-white bg-[#2E2E2E] border-none rounded-md text-center"
                />
              </InputOTPGroup>
            </InputOTP>
          </div>
        </div>

        {/* OTP Button */}
        <div className="w-full flex justify-center">
          <Link href="/role" className="w-full">
            <Button className="h-10 w-full bg-[#FFCC04] text-[#231F20] hover:bg-[#FFCC04]/80">
              Login
            </Button>
          </Link>
        </div>
        
        <div className="flex w-full items-center justify-between">
          {/* Left: Checkbox and Remember Me */}
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" className="border-white text-white" />
            <label htmlFor="terms" className="text-xs text-[#FAFAFA]">
              Remember me
            </label>
          </div>

          {/* Right: Forgot Password */}
          <Button variant="link" className="text-xs text-[#FAFAFA] p-0">
            Resend OTP
          </Button>
        </div>
    </>
  );
};

export default OtpPage;
