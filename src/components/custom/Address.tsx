import Image from "next/image";

const Address = () => {
    return (
      <div>
        <div className="text-black ml-4 mt-4">Address</div>
        <div className="flex items-center w h-12  bg-white ml-4 rounded-md mt-2 gap-2">
          {/* Small Div for Icon */}
          <div className="w-10 h-10 flex items-center justify-center">
            <Image
              src="/address.png"
              alt="Address Icon"
              width={16}
              height={16}
            />
          </div>

          {/* Big Div for Address */}
          <div className="flex flex-col">
            <p className="text-sm font-semibold">Flat 02</p>
            <p className="text-xs text-gray-600">
              Akshaya HQ, Town street, Dubai
            </p>
          </div>
        </div>
      </div>
    );
}

export default Address