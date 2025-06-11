import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <>
      {/* Input Field and Button */}
        {/* Input Field with Label */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="emailOrPhone" className="text-[#FAFAFA] text-xs font-medium">
            Enter Email Id or Mobile Number
          </Label>
          <Input
            id="emailOrPhone"
            type="text"
            placeholder="Enter here..."
            className="w-full bg-[#2E2E2E] text-white border-none rounded-md px-4 py-3"
          />
        </div>

        {/* OTP Button */}
        <div className="w-full flex justify-center">
          <Link href="/otp" className="w-full">
            <Button className="h-10 w-full bg-[#FFCC04] text-[#231F20] hover:bg-[#FFCC04]/80">
              Get OTP
            </Button>
          </Link>
        </div>
    </>
  );
};

export default RegisterPage;
