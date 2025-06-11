import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import Image from "next/image";
const RoleSelectPage = () => {
  return (
    <div className="bg-[#231F20] min-h-screen flex flex-col items-center text-white px-6 py-6">
      <div className="flex justify-end align-center pt-8 pb-2 w-full">
            Help ?
        </div>
    {/* Logo Centered in the Available Space */}
    <div className="flex items-start justify-center w-full pb-8">
            <Image src="/logo1.svg" alt="hero" width={119} height={119} />
          </div>

          <p className="text-center text-[#FFCC04] font-sans text-sm font-semibold leading-[18px] pt-8  ">
          What&apos;s your role now ?
        </p>
        <p className="text-center text-[#DDDDDD] font-sans text-xs font-normal leading-[18px] pt-2 pb-8">you can later switch role through user profile</p>
    <div className="w-full flex justify-left px-2">
      {/* Role Selection */}
      <RadioGroup defaultValue="Service Provider" >
        {[
          { id: "r1", value: "Service Requestor", label: "Service Requestor", description: "Act as a customer/ user, can place requests for all services." },
          { id: "r2", value: "Service Provider", label: "Service Provider", description: "Act as a owner, who will assign technician, approve request and further. " },
          { id: "r3", value: "Technician", label: "Technician", description: "Act as a service person, who takes care of technical assist at user place." },
        ].map((option) => (
          <div key={option.id} className="space-y-1">
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value={option.value}
                id={option.id}
                className="flex border-white border-2 items-center justify-center"
                // className="bg-black border-white border-2 data-[state=checked]:bg-white data-[state=checked]:"
                />
              <Label htmlFor={option.id} className="text-white text-right">{option.label}</Label>
            </div>
            <p className="text-[#DDDDDD] text-xs">{option.description}</p>
          </div>
        ))}
      </RadioGroup>
    </div>
    <div className="w-full flex justify-center pt-8">
          <Link href="/services" className="w-full">
            <Button className="h-10 w-full bg-[#FFCC04] text-[#231F20] hover:bg-[#FFCC04]/80">
              Proceed
            </Button>
          </Link>
        </div>
    </div>


  )
}

export default RoleSelectPage;