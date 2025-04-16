import Image from "next/image";
import Link from "next/link";

const WorkSection = () => {
  return (
    <div className="w-full float-left pb-[90px] pt-[100px]" id="about">
      <div className="w-full pr-[15px] pl-[15px] mr-auto ml-auto">
        <div className="flex flex-wrap mr-[-15px] ml-[-15px]">
          <div className="relative w-full min-h-[1px] pr-[15px] pl-[15px] flex-[0_0_100%] max-w-full">
            <div className="flex w-[55%] mx-auto text-center">
              <hr className="border-[5px] border-[#2596be] w-[100px] bg-[#2596be] h-[10px] rounded-[10px] mt-[20px]" />
              <h1 className="text-[40px] font-bold text-[#232222] dark:text-white">
                How It Work
              </h1>
              <hr className="border-[5px] border-[#2596be] w-[100px] bg-[#2596be] h-[10px] rounded-[10px] mt-[20px]" />
            </div>
            <p className="w-full text-center text-[#474747] mt-0 text-[16px] font-light">
              necessary, making this the first true generator on the Internet.
              It uses a dictionary of{" "}
            </p>
          </div>
        </div>
        <div className="w-full float-left pt-[50px]">
        {/* grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 */}
          <div className="flex flex-col gap-4 w-full md:flex-row lg:flex-row">
            <div className="relative w-full min-h-[1px] pr-[15px] pl-[15px] flex">
              <div className="w-full bg-[rgb(221,218,218)] h-auto px-[20px] py-[40px]">
                <div className="text-center items-center justify-center flex w-full">
                  <Image src="/img-1.png" alt="" width={100} height={100} />
                </div>
                <h3 className="w-full text-[20px] text-[#060606] text-center px-[15px] py-[0px]">
                  DEPOSIT
                </h3>
                <p className="w-full mx-0 my-auto text-[#474747] text-[16px] text-center">
                  Send bitcoins to the personal trading wallet, which generated
                  by the platform
                </p>
              </div>
            </div>
            <div className="relative w-full min-h-[1px] pr-[15px] pl-[15px] flex">
              <div className="w-full bg-[#2396be] h-auto px-[20px] py-[40px]">
                <div className="text-center items-center justify-center flex w-full">
                  <Image src="/img-2.png" alt="" width={100} height={100} />
                </div>
                <h3 className="w-full text-[20px] text-[#fefefd] text-center px-[15px] py-[0px]">
                  GET PROFIT
                </h3>
                <p className="w-full mx-0 my-auto text-[#fefefd] text-[16px] text-center">
                  Earn huge return on investment. With our professional team of
                  traders, you are guaranteed of your earnings
                </p>
              </div>
            </div>
            <div className="relative w-full min-h-[1px] pr-[15px] pl-[15px] flex">
              <div className="w-full bg-[#2396be] h-auto px-[20px] py-[40px]">
                <div className="text-center items-center justify-center flex w-full">
                  <Image src="/img-3.png" alt="" width={100} height={100} />
                </div>
                <h3 className="w-full text-[20px] text-[#fefefd] text-center px-[15px] py-[0px]">
                  WITHDRAW
                </h3>
                <p className="w-full mx-0 my-auto text-[#fefefd] text-[16px] text-center">
                  Our withdrawals are all processed instantly after they are
                  requested. We provide multiple withdrawal methods
                </p>
              </div>
            </div>
          </div>
          <div className="h-12 w-36 rounded-md flex justify-center items-center bg-[#666666] mx-auto mt-4 text-center text-white">
            <Link className="p-2 text-xl" href="/about">
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
