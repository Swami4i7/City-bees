import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import Image from "next/image";

const page = () => {

    const electronicsServices = [
        {
          id: 1,
          icon: "/ac_service.svg",
          title: "Air Conditioner",
          description: "service, repair, gas refill and migration.",
        },
        {
          id: 2,
          icon: "/washing_machine.svg",
          title: "Washing Machine",
          description: "service, repair and fitting.",
        },
        {
          id: 3,
          icon: "/heater.svg",
          title: "Heater / Geyser",
          description: "service, repair and installation.",
        },
        {
            id: 4,
            icon: "/purifier.svg",
            title: "Water Filter / Purifer",
            description: "repair and filter replacement.",
        },
        {
            id: 5,
            icon: "/fridge.svg",
            title: "Refrigerator",
            description: "service, repair and gas refill.",
        },
        {
            id: 6,
            icon: "/tv.svg",
            title: "Television",
            description: "service, repair and fitting.",
        },
        {
            id: 7,
            icon: "/microwave.svg",
            title: "Microwave Oven",
            description: "service, repair and fitting.",
        },
        {
            id: 8,
            icon: "/computer.svg",
            title: "Computer / Laptop",
            description: "service, repair and fitting.",
        },
        {
            id: 9,
            icon: "/mobile.svg",
            title: "Mobile Phone",
            description: "service, repair and fitting.",
        },
        {
            id: 10,
            icon: "/camera.svg",
            title: "Camera",
            description: "service, repair and fitting.",
        },
        {
            id: 11,
            icon: "/watch.svg",
            title: "Watch",
            description: "service, repair and fitting.",
        },
        {
            id: 12,
            icon: "/fan.svg",
            title: "Fan",
            description: "service, repair and fitting.",
        },
        {
            id: 13,
            icon: "/light.svg",
            title: "Light",
            description: "service, repair and fitting.",
        },
        {
            id: 14,
            icon: "/socket.svg",
            title: "Socket",
            description: "service, repair and fitting.",
        },
        {
            id: 15,
            icon: "/switch.svg",
            title: "Switch",
            description: "service, repair and fitting.",
        },
        {
            id: 16,
            icon: "/ac_service.svg",
            title: "Air Conditioner",
            description: "service, repair, gas refill and migration.",
        },
        {
            id: 17,
            icon: "/washing_machine.svg",
            title: "Washing Machine",
            description: "service, repair and fitting.",
        },
        {
            id: 18,
            icon: "/heater.svg",
            title: "Heater / Geyser",
            description: "service, repair and installation.",
        },
        {
            id: 19,
            icon: "/purifier.svg",
            title: "Water Filter / Purifer",
            description: "repair and filter replacement.",
        },
        {
            id: 20,
            icon: "/fridge.svg",
            title: "Refrigerator",
            description: "service, repair and gas refill.",
        },
        
      ];

  return (
    <>
    <div className="bg-[#231F20] rounded-b-lg px-4 py-2">
        <div className="flex justify-between items-center px-2 py-2">
            <div className="flex justify-center items-center space-x-2">
            <div className="text-white ">
                <Image src="/location.svg" alt="hero" width={22} height={27} /> 
            </div>
            <div className="flex flex-col text-white text-xs">
                
            <div>
                Flat 01
            </div>
            <div>
                Sheik Mohamed Road, SH
            </div>
            </div>
            <div className="px-2">
            <Image src="/dropdown.svg" alt="hero" width={18} height={18} /> 
            </div>
            </div>
            <div className="text-white">
            <Image src="/notifbell.svg" alt="hero" width={24} height={24} /> 
            </div>
        </div>
        
        <div className=" flex items-center justify-between bg-white text-[#888888] text-xs rounded-xl px-4 py-2">
            <div className="flex items-center gap-2">

            <Search className="h-4 w-4 "/>
            Search by service name
            </div>

        <div className="text-[#575757]">
            <Image src="/filter.svg" alt="hero" width={24} height={24} /> 
            </div>
        </div>

        <div className="text-white text-xs px-2 pt-4 text-center">
            Favourites
        </div>

        {/* Service Group */}
        <div className="flex flex-row gap-12 px-4 py-4">
        <div className="flex flex-col justify-center items-center gap-1">

        <div className="flex rounded-full h-12 w-12 bg-[#FFCC04] justify-center items-center text-white text-xs">
        <Image src="/ac_service.svg" alt="hero" width={24} height={24} /> 
        </div>
        <p className="text-white text-xs ">A/C Service</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-1">

        <div className="flex rounded-full h-12 w-12 bg-[#FFCC04] justify-center items-center text-white text-xs">
        <Image src="/cleaning_service.svg" alt="hero" width={24} height={24} /> 
        </div>
        <p className="text-white text-xs ">Cleaning</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">

        <div className="flex rounded-full h-12 w-12 bg-[#FFCC04] justify-center items-center text-white text-xs">
        <Image src="/plumbing_service.svg" alt="hero" width={24} height={24} /> 
        </div>
        <p className="text-white text-xs ">Plumbing</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">

        <div className="flex rounded-full h-12 w-12 bg-[#FAFAFA] justify-center items-center text-white text-xs">
        <Image src="/frame.svg" alt="hero" width={24} height={24} /> 
        </div>
        <p className="text-white text-xs ">Add New</p>
        </div>
        </div>

    </div>
    
    <div className="flex py-6 px-6">
      <Tabs defaultValue="electronics" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-3 bg-[#FDFDFF] pb-3">
          <TabsTrigger
            value="electronics"
            className="flex items-center gap-2 py-2 px-4 rounded-xl text-gray-600 data-[state=active]:bg-gray-200 data-[state=active]:text-gray-800"
          >
            <Image src="/electronics_icon.svg" alt="Electronics" width={18} height={18} />
            Electronics
          </TabsTrigger>
          <TabsTrigger
            value="homes"
            className="flex items-center gap-2 py-2 px-4 rounded-xl text-gray-600 data-[state=active]:bg-gray-200 data-[state=active]:text-gray-800"
          >
            <Image src="/home_icon.svg" alt="Homes" width={18} height={18} />
            Homes
          </TabsTrigger>
          <TabsTrigger
            value="others"
            className="flex items-center gap-2 py-2 px-4 rounded-xl text-gray-600 data-[state=active]:bg-gray-200 data-[state=active]:text-gray-800"
          >
            <Image src="/others_icon.svg" alt="Others" width={18} height={18} />
            Others
          </TabsTrigger>
        </TabsList>

        {/* Electronics Tab */}
        <TabsContent value="electronics"
              className="flex flex-col space-y-4 pt-4 h-[500px] overflow-y-auto snap-y snap-mandatory  scrollbar-hide">
          {electronicsServices.map((service) => (
            <Card key={service.id} className="flex items-center gap-4 snap-center p-4">
              <div className="flex h-[52px] w-[62px] bg-[#FFF1DC8A] justify-center items-center">
                <Image src={service.icon} alt={service.title} width={32} height={32} />
              </div>
              <div>
                <CardTitle className="text-sm ">{service.title}</CardTitle>
                <CardDescription className="text-xs">{service.description}</CardDescription>
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
    </>
  )
}

export default page