import Image from "next/image";

const ServiceSection = () => {
  return (
    <div className="w-full float-left pb-[10px] pt-[100px]">
      <div className="w-full pr-[15px] pl-[15px] mr-auto ml-auto">
        <div className="flex flex-wrap mr-[-15px] ml-[-15px]">
          <div className=" w-full min-h-[1px] pr-[15px] pl-[15px]  max-w-full">
            <div className="flex w-full mx-auto text-center justify-center">
              <hr className="border-[5px] border-[#2596be] w-[100px] bg-[#2596be] h-[10px] rounded-[10px] mt-[20px]" />
              <h1 className="text-[40px] font-bold text-[#232222] dark:text-white">
                OUR PLATFORM ADVANTAGES
              </h1>
              <hr className="border-[5px] border-[#2596be] w-[100px] bg-[#2596be] h-[10px] rounded-[10px] mt-[20px]" />
            </div>
          </div>
        </div>
        <div className="w-full float-left pt-[90px]">
          <div className="flex flex-col flex-wrap justify-center items-center mx-auto md:flex-row lg:flex-row gap-4">
            <div className="flex-[0_0_33.333333%]  w-full  min-h-[1px] pr-[15px] pl-[15px]">
              <div className="text-center justify-center items-center mx-auto flex w-full">
                <Image alt="" src="/payment.png" width={100} height={100} />
              </div>
              <h3 className="w-full float-left text-[30px] text-[#000] font-bold text-center pt-[20px] dark:text-white">
                PAYMENT OPTIONS
              </h3>
              <p className="w-[90%] mx-auto text-[16px] text-[#000] text-center justify-center items-center dark:text-white ">
                We provide various withdrawal methods.{" "}
              </p>
            </div>
            <div className="flex-[0_0_33.333333%]  w-full relative min-h-[1px] pr-[15px] pl-[15px]">
              <div className="text-center justify-center items-center mx-auto flex w-full">
                <Image alt="" src="/security.png" width={100} height={100} />
              </div>
              <h3 className="w-full float-left text-[30px] text-[#000] font-bold text-center pt-[20px] dark:text-white">
                STRONG SECURITY
              </h3>
              <p className="w-[90%] mx-auto text-[16px] text-[#000] text-center justify-center items-center dark:text-white">
                With advanced security systems, we keep your account always
                protected.
              </p>
            </div>
            <div className="flex-[0_0_33.333333%]  w-full relative min-h-[1px] pr-[15px] pl-[15px]">
              <div className="text-center justify-center items-center mx-auto flex w-full">
                <Image src="/world.png" alt="" width={100} height={100} />
              </div>
              <h3 className="w-full float-left text-[30px] dark:text-white text-[#000] font-bold text-center pt-[20px]">
                WORLD COVERAGE
              </h3>
              <p className="w-[90%] mx-auto text-[16px] text-[#000] text-center justify-center items-center dark:text-white">
                Our platform is used by bitcoin investors worldwide.{" "}
              </p>
            </div>
            <div className="flex-[0_0_33.333333%] w-full relative min-h-[1px] pr-[15px] pl-[15px]">
              <div className="text-center justify-center items-center mx-auto flex w-full">
                <Image alt="" src="/team.png" width={100} height={100} />
              </div>
              <h3 className="w-full float-left text-[30px] text-[#000] font-bold text-center pt-[20px] dark:text-white">
                EXPERIENCED TEAM
              </h3>
              <p className="w-[90%] mx-auto text-[16px] text-[#000] text-center justify-center items-center dark:text-white">
                Our experienced team helps us build the best product and deliver
                first class service to our clients.{" "}
              </p>
            </div>
            <div className="flex-[0_0_33.333333%] w-full relative min-h-[1px] pr-[15px] pl-[15px]">
              <div className="text-center justify-center items-center mx-auto flex w-full">
                <Image alt="" src="/report.png" width={100} height={100} />
              </div>
              <h3 className="w-full float-left text-[30px] text-[#000] font-bold text-center pt-[20px] dark:text-white">
                ADVANCED REPORTING
              </h3>
              <p className="w-[90%] mx-auto text-[16px] text-[#000] text-center justify-center items-center dark:text-white">
                We provide reports for all investments done using our platform.
              </p>
            </div>
            <div className="flex-[0_0_33.333333%] w-full relative min-h-[1px] pr-[15px] pl-[15px]">
              <div className="text-center justify-center items-center mx-auto flex w-full">
                <Image alt="" src="/platform.png" width={100} height={100} />
              </div>
              <h3 className="w-full float-left text-[30px] text-[#000] font-bold text-center pt-[20px] dark:text-white">
                CROSS-PLATFORM TRADING
              </h3>
              <p className="w-[90%] mx-auto text-[16px] text-[#000] text-center justify-center items-center dark:text-white">
                Our platform can be accessed from various devices such as
                Phones, Tablets &amp; Pc.{" "}
              </p>
            </div>
            <div className="flex-[0_0_33.333333%] w-full relative min-h-[1px] pr-[15px] pl-[15px]">
              <div className="text-center justify-center items-center mx-auto flex w-full">
                <Image alt="" src="/support.png" width={100} height={100} />
              </div>
              <h3 className="w-full float-left text-[30px] text-[#000] font-bold text-center pt-[20px] dark:text-white">
                EXPERT SUPORT
              </h3>
              <p className="w-[90%] mx-auto text-[16px] text-[#000] text-center justify-center items-center dark:text-white">
                Our 24/7 support allows us to keep in touch with customers in
                all time zones and regions.{" "}
              </p>
            </div>
            <div className="flex-[0_0_33.333333%] w-full relative min-h-[1px] pr-[15px] pl-[15px]">
              <div className="text-center justify-center items-center mx-auto flex w-full">
                <Image alt="" src="/exchange.png" width={100} height={100} />
              </div>
              <h3 className="w-full float-left text-[30px] text-[#000] font-bold text-center pt-[20px] dark:text-white">
                INSTANT EXCHANGE
              </h3>
              <p className="w-[90%] mx-auto text-[16px] text-[#000] text-center justify-center items-center dark:text-white">
                Change your world today and make yourself a great tomorrow,
                invest with the little money you have and make a great profit at
                the end.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
