import Image from "next/image"


const ClientSection = () => {
  return (
    <div className="w-full float-left pb-[170px] pt-[100px] bg-white" >
         <div className="container pr-[15px] pl-[15px] mr-auto ml-auto mb-6">
            <div id="carouselExampleIndicators" className="relative" data-ride="carousel">
               <ol className="absolute bottom-[-80px] right-0 left-0 z-[15] flex justify-center pl-0 mr-[15%] ml-[15%] list-none">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className=""></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1" className=""></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2" className="active"></li>
               </ol>
               <div className="relative w-full overflow-hidden">
                  <div className="relative w-full hidden">
                     <h1 className="w-full float-left text-[40px] text-[#2b2a2a] font-bold text-center pb-0">What Our Client Say</h1>
                     <p className="w-full float-left text-[16px] text-[#6b6a6a] text-center m-0">eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim </p>
                     <div className="w-full text-center pt-[40px] inline-block"><Image alt="" width={100} height={100} src="/client-imag.png"/></div>
                     <h3 className="w-full text-[20px] text-[#000000] text-center font-bold pt-[20px]">Magna Aliqua.</h3>
                     <p className="w-[85%] text-[16px] y-[#000000] text-center m-[0_auto]"> Investing with tradecrptix.com has been one of the best decisions I have ever made. Their team is knowledgeable, transparent, and truly has my best interests at heart. I have seen consistent returns and feel secure knowing my money is in good hands.</p>
                  </div>
                  <div className="relative w-full hidden">
                     <h1 className="w-full float-left text-[40px] text-[#2b2a2a] font-bold text-center pb-0">What Our Client Say</h1>
                     <p className="w-full float-left text-[16px] text-[#6b6a6a] text-center m-0">eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim </p>
                     <div className="w-full text-center pt-[40px] inline-block"><Image alt="" width={100} height={100} src="https://randomuser.me/api/portraits/men/81.jpg"/></div>
                     <h3 className="w-full text-[20px] text-[#000000] text-center font-bold pt-[20px]">Michael R.</h3>
                     <p className="w-[85%] text-[16px] text-[#000000] text-center m-[0_auto]"> The returns I have seen with tradecryptix.com have exceeded my expectations. Their strategic approach to investing and ongoing support make them stand out in the industry. I highly recommend their services to anyone looking to grow their wealth.</p>
                  </div>
                  <div className="relative w-full">
                     <h1 className="w-full float-left text-[40px] text-[#2b2a2a] font-bold text-center pb-0">What Our Client Say</h1>
                     <p className="w-full float-left text-[16px] text-[#6b6a6a] text-center m-0">eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim </p>
                     <div className="w-full text-center pt-[40px] flex items-center justify-center "><Image alt="" width={100} height={100} src="https://randomuser.me/api/portraits/men/68.jpg"/></div>
                     <h3 className="w-full text-[20px] text-[#000000] text-center font-bold pt-[20px]">Jonathan M.</h3>
                     <p className="w-[85%] text-[16px] text-[#000000] text-center m-[0_auto]"> Investing tradecryptix.com has been one of the best decisions I have ever made. Their team is knowledgeable, transparent, and truly has my best interests at heart. I have seen consistent returns and feel secure knowing my money is in good hands.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
  )
}

export default ClientSection