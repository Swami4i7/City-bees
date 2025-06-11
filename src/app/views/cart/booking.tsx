// "use client";

// import { Button } from '@/components/ui/button';
// import Link from 'next/link';
// import { ChevronLeft, X } from "lucide-react";
// import Image from 'next/image';
// import { useEffect, useState } from 'react';
// import { Input } from '@/components/ui/input';
// import { Card, CardContent } from "@/components/ui/card";
// import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import { useMediaQuery } from 'react-responsive';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
// import LargeSubmitButton from '@/components/custom/LargeSubmitButton';


// const Booking: React.FC = () => {

//   const isMidOrLargeScreen = useMediaQuery({ minWidth: 768 });

//   const [addresses, setAddresses] = useState([
//     {
//       id: "address1",
//       name: "Ashik",
//       address: "Alhada Rich apartment, Sheikh Khalifa Medical City",
//       pincode: "123546",
//       phone: "Ph: 9989898989",
//     },
//     {
//       id: "address2",
//       name: "Ibrahim",
//       address: "Alhada Rich apartment, Sheikh Khalifa Medical City",
//       pincode: "123546",
//       phone: "Ph: 9989898989",
//     }
//   ]);
//   const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
//   const [showForm, setShowForm] = useState(false);
//   const [newAddress, setNewAddress] = useState({
//     name: "",
//     address: "",
//     pincode: "",
//     phone: ""
//   });

//   const [selectedDate, setSelectedDate] = useState<string | null>("");
  
//   interface Service {
//     type: string;
//     count: number;
//   }

//   interface Provider {
//     services: Service[];
//     name: string;
//     price: string;
//   }

//   const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null);

//   useEffect(() => {
//     // Retrieve the stored date from localStorage
//     const storedDate = localStorage.getItem("selectedDate");
//     if (storedDate) {
//       setSelectedDate(storedDate);
//     }
//   }, []);

//   useEffect(() => {
//     // Retrieve the selected provider from localStorage
//     const storedProvider = localStorage.getItem("selectedProvider");
//     if (storedProvider) {
//       setSelectedProvider(JSON.parse(storedProvider));
//     }
//   }, []);

//   if (!selectedProvider) {
//     return <p className="text-center mt-10">No provider selected.</p>;
//   }

//   const handleSave = () => {
//     setAddresses([...addresses, { ...newAddress, id: addresses.length + 1 }]);
//     setShowForm(false);
//     setNewAddress({ name: "", address: "", pincode: "", phone: "" });
//   };

//   function LocationMarker({ setNewAddress }) {
//     const map = useMapEvents({
//       click(e) {
//         setNewAddress((prev) => ({
//           ...prev,
//           lat: e.latlng.lat,
//           lng: e.latlng.lng,
//         }));
//       },
//     });
  
//     return null;
//   }

// return (
//   <div>
//     <div>
//       <div className='h-24 bg-black text-white flex justify-between items-end p-4'>
//         <div className='flex items-center'>
//           <Link href="/service-provider" className="flex items-center">
//             <ChevronLeft />
//           </Link>
//           <div className="font-inter text-base pl-2 text-left decoration-skip-ink-0">Confirm Booking</div>
//         </div>
//         <div className='text-sm'>
//           <Image src="/frame2.png" alt="hero" width={20} height={20} />
//         </div>
//       </div>

//       <div className="text-black ml-4 mt-4">Service and Provider</div>

//       <div className="grid grid-rows-2 border border-[#E0E0E0] rounded-md h-auto m-4 mt-2 p-4">
//         {/* First Row with Two Text Items */}
//         <div className="flex flex-col gap-1 pb-2">
//           <p className="text-sm font-semibold">{selectedProvider.services[0].type}</p>
//           <p className="text-xs text-gray-600">
//             ({selectedProvider.services[0].count} + {selectedProvider.services[1]?.count || 0} : service and gas refilling)
//           </p>
//         </div>

//         {/* Second Row with Two Text Items, Separated by a Dashed Line */}
//         <div className="flex flex-col gap-1 pt-2 border-t-2 border-dashed border-[#D8D8D8]">
//           <p className="text-sm">{selectedProvider.name}</p>
//           <p className="text-base font-bold">{selectedProvider.price}</p>
//         </div>
//       </div>

//       {/* Selected Date & Time Slot */}
//       <div className="text-black ml-4 mt-4">Selected Date & Time Slot</div>
//       <div className="relative mx-4 mt-2">
//         <Input
//           className="h-10 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
//           value={selectedDate ?? "No date selected"}
//           readOnly
//         />
//       </div>

//       {/* adding address form */}

    
//       <div className="m-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
//              <p>Location & Address</p>
//             <Button className="mt-2 sm:mt-0 px-4 py-2 bg-white text-black rounded-md border border-gray-300 h-8 hover:bg-transparent" onClick={() => setShowForm(true)}>
//               + Add Address
//             </Button>
//       </div>
        

//       {isMidOrLargeScreen ? (
//         <Dialog open={showForm} onOpenChange={setShowForm}>
//           <DialogContent>
//             <DialogHeader>
//               <DialogTitle>Add New Address</DialogTitle>
//               <DialogClose asChild>
//                 <Button variant="ghost" className="absolute right-2 top-2"></Button>
//               </DialogClose>
//             </DialogHeader>
//             <div className="grid gap-2">
//             <MapContainer center={[25.276987, 55.296249]} zoom={13} className="w-full h-40 rounded-md">
//   <TileLayer
//     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//   />
//   {newAddress.lat && newAddress.lng && (
//     <Marker position={[newAddress.lat, newAddress.lng]} />
//   )}
//   <LocationMarker setNewAddress={setNewAddress} />
// </MapContainer>
//               <label>Flat Name</label>
//               <Input value={newAddress.name} onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })} />
//               <label>Street Name</label>
//               <Input value={newAddress.address} onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })} />
//               <label>Pincode</label>
//               <Input value={newAddress.pincode} onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })} />
//               <label>Contact Number</label>
//               <Input value={newAddress.phone} onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })} />
//               <Button onClick={handleSave}>Save</Button>
//             </div>
//           </DialogContent>
//         </Dialog>
//       ) : showForm && (
//         <div className="border p-4 rounded-md bg-white border-none relative">
//           <button className="absolute right-4 top-5 text-gray-600" onClick={() => setShowForm(false)}>
//             <X size={20} />
//           </button>
//           <h2 className="text-lg mb-4 shadow-none">Add New Address</h2>
//           {/* <div className="w-full h-40 bg-gray-200 flex items-center justify-center mb-4">Map Here</div> */}
//           <MapContainer center={[25.276987, 55.296249]} zoom={13} className="w-full h-40 rounded-md">
//   <TileLayer
//     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//   />
//   {newAddress.lat && newAddress.lng && (
//     <Marker position={[newAddress.lat, newAddress.lng]} />
//   )}
//   <LocationMarker setNewAddress={setNewAddress} />
// </MapContainer>
//           <div className="grid grid-cols-1 gap-1">

//             <label htmlFor="flatName" className='mt-2'>Flat Name</label>
//             <Input id="flatName" value={newAddress.name} onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })} />
            
//             <label htmlFor="streetName">Street Name</label>
//             <Input id="streetName" value={newAddress.address} onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })} />

//             <label htmlFor="city">City</label>
//             <Input id="city" />

//             <label htmlFor="pincode">Pincode</label>
//             <Input id="pincode" value={newAddress.pincode} onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })} />

//             <label htmlFor="contactNumber">Contact Number</label>
//             <Input id="contactNumber" value={newAddress.phone} onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })} />
//             <Button className="bg-[#231F20] text-white" onClick={handleSave}>Save</Button>
//           </div>

          
//         </div>

//       )}
   

// {/* address and location */}
// {(!showForm || isMidOrLargeScreen) && (
//   <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
//     {addresses.map((addr) => (
//       <Card
//         key={addr.id}
//         className={`pt-2 border rounded-md cursor-pointer ${
//           selectedAddress === addr.id ? "bg-[#FFCC041A] border-[#226DB4]" : "bg-white"
//         }`}
//         onClick={() => setSelectedAddress(addr.id)}
//       >
//         <CardContent>
//           <div className="flex justify-between">
//             <p className="font-semibold text-[#226DB4]">{addr.name}</p>
//             {/* Show radio button only for large screens */}
//             <input
//               type="radio"
//               name="address"
//               checked={selectedAddress === addr.id}
//               onChange={() => setSelectedAddress(addr.id)}
//               className="hidden lg:block"
//             />
//           </div>
//           <p className="text-sm text-gray-600">{addr.address}</p>
//           <p className="text-sm">{addr.pincode}</p>
//           <p className="text-sm font-semibold">{addr.phone}</p>
//         </CardContent>
//       </Card>
//     ))}
//   </div>
// )}
// </div>





// <Link href="/summary" className='flex justify-center items-center'>
//   <LargeSubmitButton name="View Summary"/>
//   </Link>
//   </div>

// );
// }

// export default Booking;

"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, X } from "lucide-react";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from "@/components/ui/card";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import LargeSubmitButton from '@/components/custom/LargeSubmitButton';

const Booking: React.FC = () => {
  const [addresses, setAddresses] = useState([
    { id: "address1", name: "Ashik", address: "Alhada Rich apartment, Sheikh Khalifa Medical City", pincode: "123546", phone: "Ph: 9989898989" },
    { id: "address2", name: "Ibrahim", address: "Alhada Rich apartment, Sheikh Khalifa Medical City", pincode: "123546", phone: "Ph: 9989898989" }
  ]);
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [newAddress, setNewAddress] = useState({ name: "", address: "", pincode: "", phone: "" });
  const [selectedDate, setSelectedDate] = useState<string | null>("");
  interface Service {
    type: string;
    count: number;
  }

  interface Provider {
    services: Service[];
    name: string;
    price: string;
  }

  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null);

  useEffect(() => {
    const storedDate = localStorage.getItem("selectedDate");
    if (storedDate) setSelectedDate(storedDate);

    const storedProvider = localStorage.getItem("selectedProvider");
    if (storedProvider) setSelectedProvider(JSON.parse(storedProvider));
  }, []);

  if (!selectedProvider) return <p className="text-center mt-10">No provider selected.</p>;

  const handleSave = () => {
    setAddresses([...addresses, { ...newAddress, id: `${addresses.length + 1}` }]);
    setShowForm(false);
    setNewAddress({ name: "", address: "", pincode: "", phone: "" });
  };

  function LocationMarker({ setNewAddress }) {
    useMapEvents({
      click(e) {
        setNewAddress((prev) => ({ ...prev, lat: e.latlng.lat, lng: e.latlng.lng }));
      },
    });
    return null;
  }

  return (
    <div>
      <div className='h-24 bg-black text-white flex justify-between items-end p-4'>
        <div className='flex items-center'>
          <Link href="/service-provider" className="flex items-center">
            <ChevronLeft />
          </Link>
          <div className="font-inter text-base pl-2">Confirm Booking</div>
        </div>
        <Image src="/frame2.png" alt="hero" width={20} height={20} />
      </div>

      <div className="text-black ml-4 mt-4">Service and Provider</div>

       <div className="grid grid-rows-2 border border-[#E0E0E0] rounded-md h-auto m-4 mt-2 p-4">
         {/* First Row with Two Text Items */}
         <div className="flex flex-col gap-1 pb-2">
           <p className="text-sm font-semibold">{selectedProvider.services[0].type}</p>
           <p className="text-xs text-gray-600">
             ({selectedProvider.services[0].count} + {selectedProvider.services[1]?.count || 0} : service and gas refilling)
           </p>
         </div>

         {/* Second Row with Two Text Items, Separated by a Dashed Line */}
         <div className="flex flex-col gap-1 pt-2 border-t-2 border-dashed border-[#D8D8D8]">
           <p className="text-sm">{selectedProvider.name}</p>
           <p className="text-base font-bold">{selectedProvider.price}</p>
         </div>
       </div>

      <div className="text-black ml-4 mt-4">Selected Date & Time Slot</div>
      <div className="relative mx-4 mt-2">
        <Input className="h-10 border-gray-300 rounded-md" value={selectedDate ?? "No date selected"} readOnly />
      </div>

      <div className="m-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <p>Location & Address</p>
             <Button className="mt-2 sm:mt-0 px-4 py-2 bg-white text-black rounded-md border border-gray-300 h-8 hover:bg-transparent" onClick={() => setShowForm(true)}>
               + Add Address
             </Button>
       </div>

       {showForm && (
  <div className="border p-4 rounded-md bg-white border-none relative md:hidden">
    <button className="absolute right-4 top-5 text-gray-600" onClick={() => setShowForm(false)}>
      <X size={20} />
    </button>
    <h2 className="text-lg mb-4 shadow-none">Add New Address</h2>
    <MapContainer center={[25.276987, 55.296249]} zoom={13} className="w-full h-40 rounded-md">
   <TileLayer
     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
   />
   {newAddress.lat && newAddress.lng && (
     <Marker position={[newAddress.lat, newAddress.lng]} />
   )}
   <LocationMarker setNewAddress={setNewAddress} />
 </MapContainer>

    <div className="grid grid-cols-1 gap-1">
      <label htmlFor="flatName" className="mt-2">Flat Name</label>
      <Input id="flatName" value={newAddress.name} onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })} />
      
      <label htmlFor="streetName">Street Name</label>
      <Input id="streetName" value={newAddress.address} onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })} />

      <label htmlFor="city">City</label>
      <Input id="city" />

      <label htmlFor="pincode">Pincode</label>
      <Input id="pincode" value={newAddress.pincode} onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })} />

      <label htmlFor="contactNumber">Contact Number</label>
      <Input id="contactNumber" value={newAddress.phone} onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })} />

      <Button className="bg-[#231F20] text-white" onClick={handleSave}>Save</Button>
    </div>
  </div>
)}

{/* Large Screen Modal */}
{showForm && (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center hidden md:flex">
    <div className="bg-white p-6 rounded-md w-[50%] relative">
      <button className="absolute right-4 top-5 text-gray-600" onClick={() => setShowForm(false)}>
        <X size={20} />
      </button>
      <h2 className="text-lg mb-4">Add New Address</h2>
      <MapContainer center={[25.276987, 55.296249]} zoom={13} className="w-full h-40 rounded-md">
   <TileLayer
     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
   />
   {newAddress.lat && newAddress.lng && (
     <Marker position={[newAddress.lat, newAddress.lng]} />
   )}
   <LocationMarker setNewAddress={setNewAddress} />
 </MapContainer>

      <div className="grid grid-cols-1 gap-2">
        <label htmlFor="flatName">Flat Name</label>
        <Input id="flatName" value={newAddress.name} onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })} />

        <label htmlFor="streetName">Street Name</label>
        <Input id="streetName" value={newAddress.address} onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })} />

        <label htmlFor="city">City</label>
        <Input id="city" />

        <label htmlFor="pincode">Pincode</label>
        <Input id="pincode" value={newAddress.pincode} onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })} />

        <label htmlFor="contactNumber">Contact Number</label>
        <Input id="contactNumber" value={newAddress.phone} onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })} />

        <Button className="bg-[#231F20] text-white" onClick={handleSave}>Save</Button>
      </div>
    </div>
  </div>
)}
      {!showForm && (
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
     {addresses.map((addr) => (
       <Card
         key={addr.id}
         className={`pt-2 border rounded-md cursor-pointer ${
           selectedAddress === addr.id ? "bg-[#FFCC041A] border-[#226DB4]" : "bg-white"
         }`}
         onClick={() => setSelectedAddress(addr.id)}
       >
         <CardContent>
           <div className="flex justify-between">
             <p className="font-semibold text-[#226DB4]">{addr.name}</p>
             {/* Show radio button only for large screens */}
             <input
               type="radio"
               name="address"
               checked={selectedAddress === addr.id}
               onChange={() => setSelectedAddress(addr.id)}
               className="hidden lg:block"
             />
           </div>
           <p className="text-sm text-gray-600">{addr.address}</p>
           <p className="text-sm">{addr.pincode}</p>
           <p className="text-sm font-semibold">{addr.phone}</p>
         </CardContent>
       </Card>
     ))}
   </div>
)}

      <Link href="/summary" className='flex justify-center'>
        <LargeSubmitButton name="View Summary" />
      </Link>
    </div>
  );
};

export default Booking;

    
        

     
  

    



 