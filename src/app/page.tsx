import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from "next/link";

export default function Home() {
  return (
//    <div className="bg-[#231F20] h-screen">
//     <div className="flex mt-[623px]">
//       <p>Expert services at your doorstep, anytime, anywhere. Simplifying your life with trusted professionals on demand.</p>
//       </div>
//     <div className="flex justify-center ">
//       <Image src="/logo1.svg" alt="hero" width={119} height={119} />
//     </div>
//     <div className="flex fixed bottom-0 left-0 place-items-baseline px-6 justify-center gap-2">
//     <Button className="w-[154px] bg-[#FFCC04] text-[#231F20]">Register</Button>
//     <Button className="w-[154px] bg-[#FFFFFF] text-[#231F20]">Login</Button>
//     </div>
//     <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 text-center">
//   Im at the bottom!
// </div>

//    </div>


    // <div className="bg-[#231F20] h-screen flex flex-col items-center justify-center text-white px-6">
    //   {/* Logo Centered */}
    //   <Image src="/logo1.svg" alt="hero" width={119} height={119} />

    //   {/* Text Below Logo */}
    //   <p className="text-center text-[#FAFAFA] font-serif text-xs font-medium leading-[18px] mt-4 max-w-xs">
    //     Expert services at your doorstep, anytime, anywhere. Simplifying your life with trusted professionals on demand.
    //   </p>

    //   {/* Buttons at Bottom */}
    //   <div className="fixed bottom-6 left-0 w-full flex justify-center gap-4">
    //     <Button className="w-[154px] bg-[#FFCC04] text-[#231F20]">Register</Button>
    //     <Button className="w-[154px] bg-[#FFFFFF] text-[#231F20]">Login</Button>
    //   </div>
    // </div>


//fine

  //   <div className="bg-[#231F20] h-screen flex flex-col items-center justify-center text-white px-6">
  //   {/* Logo Centered */}
  //   <Image src="/logo1.svg" alt="hero" width={119} height={119} />

  //   {/* Text and Buttons in the Same Div */}
  //   <div className="fixed bottom-10 left-0 w-full flex flex-col gap-6 items-center ">
  //     {/* Text Above Buttons */}
  //     <p className="text-center text-[#FAFAFA] font-serif text-xs font-medium leading-[18px] mb-4 max-w-xs">
  //       Expert services at your doorstep, anytime, anywhere. Simplifying your life with trusted professionals on demand.
  //     </p>

  //     {/* Buttons */}
  //     <div className="flex justify-center gap-4">
  //     <Link href="/register">

  //       <Button className="w-[154px] bg-[#FFCC04] text-[#231F20]">Register</Button>
  //       </Link>
  //       <Button className="w-[154px] bg-[#FFFFFF] text-[#231F20]">Login</Button>
  //     </div>
  //   </div>
  // </div>

  <div className="bg-[#231F20] min-h-screen flex flex-col items-center text-white px-6 py-6">
      {/* Logo Centered in the Available Space */}
      <div className="flex flex-1 items-center justify-center w-full">
        <Image src="/logo1.svg" alt="hero" width={119} height={119} />
      </div>

      {/* Text and Buttons in the Same Div */}
      <div className="w-full max-w-md flex flex-col items-center gap-10 pb-6">
        {/* Text Above Buttons */}
        <p className="text-center text-[#FAFAFA] font-sans text-xs font-medium leading-[18px] mb-4 px-4">
          Expert services at your doorstep, anytime, anywhere. Simplifying your life with trusted professionals on demand.
        </p>

        {/* Buttons with Next.js Link */}
        <div className="w-full flex justify-center gap-6">
          <Link href="/register" className="w-[154px]">
            <Button className="w-full bg-[#FFCC04] hover:bg-[#FFCC04]/80 text-[#231F20]">Register</Button>
          </Link>
          <Link href="/login" className="w-[154px]">
            <Button className="w-full bg-[#FFFFFF] hover:bg-[#FFFFFF]/80 text-[#231F20]">Login</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

