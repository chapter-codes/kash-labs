import Image from "next/image";


function Loading() {
  return (
    <div className="h-svh w-full flex flex-col items-center justify-center">
      <Image
        src="/icons/brandname-dark.svg"
        alt="Logo"
        height={26}
        width={120}
        className="w-[7.5rem] h-6.5 "
        priority
      />
      <div className="relative w-[7.5rem] h-1  bg-card-bg/80 mt-2 rounded-full">
      <div id="slider" className="absolute h-1 w-1/5 bg-btn-bg rounded-full slider"></div>
      </div>
    </div>
  );

}

export default Loading