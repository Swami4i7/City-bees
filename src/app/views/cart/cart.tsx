"use client"

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, Download, X } from "lucide-react";
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import Address from '@/components/custom/Address';
import CartServices from '@/components/custom/CartServices';
import Issues from '@/components/custom/Issues';
import ImageUpload from '@/components/custom/ImageUpload';
import LargeSubmitButton from '@/components/custom/LargeSubmitButton';



const CartPage: React.FC = () => {

  const [images, setImages] = useState<string[]>([]);

  const [files, setFiles] = useState<File[]>([]);


  const services = [
    {
      id: 2,
      name: "A/C Service",
      items: [
        { id: 1, type: "1.0 Ton split A/C", quantity: 1 },
        { id: 2, type: "1.5 Ton split A/C", quantity: 1 },
      ],
    },
    {
      id: 1,
      name: "A/C Gas Refilling",
      items: [{ id: 3, type: "1.5 Ton split A/C", quantity: 1 }],
    },
  ];

  const [serviceData, setServiceData] = useState(services);
  


  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setImages((prev) => [...prev, ...newImages]);
    }
  };

  const removeImage = (imageUrl: string) => {
    setImages((prev) => prev.filter((img) => img !== imageUrl));
  };

  const updateQuantity = (serviceId: number, itemId: number, change: number) => {
    setServiceData((prev) =>
      prev.map((service) =>
        service.id === serviceId
          ? {
              ...service,
              items: service.items.map((item) =>
                item.id === itemId
                  ? { ...item, quantity: Math.max(0, item.quantity + change) }
                  : item
              ),
            }
          : service
      )
    );
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles([...files, ...Array.from(event.target.files)]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };



return (
  <div>
    <div className="h-24 bg-black text-white flex justify-between items-end p-4">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <ChevronLeft />
        </Link>
        <div className="font-inter text-base pl-2 text-left">Cart</div>
      </div>
      <div className="text-sm">
        <Image src="/frame2.png" alt="hero" width={20} height={20} />
      </div>
    </div>

    <Address />
    <CartServices />
    <Issues />
    <ImageUpload />

   

    
    <div>
      <div className="text-black ml-4 mt-4">Add Attachment</div>
      <div className="relative mx-4">
        <input
          id="file-upload"
          type="file"
          className="hidden"
          multiple
          onChange={handleFileChange}
        />
        <label htmlFor="file-upload">
          <Button className="mt-2 h-12 w-full sm:w-auto bg-gray-100 text- py-2 rounded shadow-none text-blue-600 hover:bg-transparent"
            onClick={() => document.getElementById("file-upload")?.click()} >
            <Download /> Add Files
          </Button>
        </label>
        <div className="mt-2 flex flex-wrap gap-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="text-sm w-fit text-gray-600 h-10 flex items-center px-3 border rounded-md bg-gray-100"
            >
              <span className="mr-2">{file.name}</span>
              <button onClick={() => removeFile(index)} className="text-gray-500">
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>

    <Link href="/service-provider" className='flex justify-center items-center'>
      <LargeSubmitButton  name="Select Date & Service Provider"/>
    </Link>
  </div>
);
}




 

export default CartPage;
