// import Image from "next/image";

// const AuthLayout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <div className="bg-[#231F20] min-h-screen flex flex-col items-center text-white px-6 py-6">
//       {/* Logo Centered in the Available Space */}
//       <div className="flex flex-1 items-center justify-center w-full">
//         <Image src="/loading.gif" alt="Animated GIF" width={150} height={150} unoptimized />
//       </div>

//       {/* Render Page-Specific Content */}
//       <div className="w-full max-w-md flex flex-col gap-4 pb-8">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default AuthLayout;

import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative bg-[#231F20] min-h-screen flex flex-col items-center text-white px-6 py-6">
        <div className="flex justify-end align-center py-8 w-full">
            Help ?
        </div>
      {/* Background Image - phone.svg */}
      <div className="absolute top-[143px] left-1/2 -translate-x-1/2 z-10">
        <Image
          src="/phone.svg"
          alt="Background"
          width={186}
          height={364}
        />
      </div>

      {/* Logo - logo2.svg */}
      <div className="absolute top-[180px] left-1/2 -translate-x-1/2 z-10">
        <Image src="/logo2.svg" alt="Logo" width={72} height={72} />
      </div>

      {/* Loading Animation - loading.gif */}
      <div className="absolute top-[300px] left-1/2 -translate-x-1/2 z-10">
        <Image src="/loading.gif" alt="Loading" width={143} height={143} unoptimized />
      </div>

      {/* Render Page-Specific Content */}
      <div className="relative w-full max-w-md flex flex-col gap-4 pb-8 z-30 mt-[600]">
        {/* No padding, using mt-[380px] to push content below images */}
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
