'use client';

import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const ImageUpload = () => {

  const [images, setImages] = useState<string[]>([]);
    
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

    
    return (
      <div>
        <div className="text-black ml-4 mt-4">Add Images</div>
        <div className="ml-4 mt-2 flex items-center gap-4 flex-wrap">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative h-16 w-16 border border-gray-400 rounded-md"
            >
              <Image
                src={img}
                alt="Uploaded"
                layout="fill"
                className="rounded-md object-cover"
              />
              <button
                onClick={() => removeImage(img)}
                className="absolute -top-2 -right-2 bg-gray-300 text-black border-white  p-1 rounded-full"
              >
                <X size={14} />
              </button>
            </div>
          ))}
          {/* Add Image Button */}
          <label className="h-16 w-16 border border-gray-400 rounded-md flex items-center justify-center cursor-pointer">
            <input
              type="file"
              className="hidden"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
            />
            <Image src="/addimage.png" alt="Add" width={16} height={16} />
          </label>
        </div>
      </div>
    );
}

export default ImageUpload