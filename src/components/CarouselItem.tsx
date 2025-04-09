import Link from "next/link";

const CarouselItem = () => {
  return (
    <div className="py-12 px-10">
      <h1 className="text-5xl text-white">
        Best Crypto 
      </h1>
      <span className="text-blue-500 text-5xl whitespace-nowrap">Investment Platform</span>
      <p className="text-gray-300 text-xl py-2">Profitable investment in cryptocurrency</p>

      <div className="flex gap-4 my-10 mb-2">
        <div className="bg-blue-400 h-12 w-36 rounded-md flex items-center justify-center text-white">
          <Link className="p-2 text-xl" href="/sign-up">Register</Link>
        </div>
        <div className="bg-white h-12 w-36 rounded-md flex items-center justify-center">
          <Link className="p-2 text-xl" href="/sign-in">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
