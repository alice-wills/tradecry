import Image from "next/image"
import Link from "next/link"

const ContactSection = () => {
  return (
    <div className="w-full h-full float-left bg-[#2596be] px-[90px]" id="contact">
         <div className="container pr-[15px] pl-[15px] mr-auto ml-auto mb-6">
            <div className="flex flex-wrap mr-[-15px] ml-[-15px]">
               <div className="flex-[0_0_100%] w-full max-w-[100%] min-h-[1px] pr-[15px] pl-[15px]">
                  <h1 className="w-full float-left text-[40px] text-[#fefefd] font-bold uppercase">Contact Us</h1>
               </div>
            </div>
            <div className="w-full float-left">
               <div className="flex flex-wrap mr-[-15px] ml-[-15px]">
                  <div className="relative w-full min-h-[1px] pr-[15px] pl-[15px] flex-[0_0_66.666%] max-w-[66.66%] ">
                     <div className="w-full float-left">
                        <form action="">
                           <div className="flex flex-wrap mr-[-15px] ml-[-15px] pb-4">
                              <div className="relative w-full min-h-[1px] pr-[15px] pl-[15px] flex-[0_0_50%] max-w-[50%]">
                                 <input type="text" className="w-full float-left text-[16px] text-[#8b8b8b] bg-[#ffffff] px-[14px] py-[15px] mt-[20px] border-0 rounded-[5px]" placeholder="Your Name" name="Your Name"/>
                              </div>
                              <div className="relative w-full min-h-[1px] pr-[15px] pl-[15px] flex-[0_0_50%] max-w-[50%]">
                                 <input type="text" className="w-full float-left text-[16px] text-[#8b8b8b] bg-[#ffffff] px-[14px] py-[15px] mt-[20px] border-0 rounded-[5px]" placeholder="Email" name="Email"/>
                              </div>
                              <div className="relative w-full min-h-[1px] pr-[15px] pl-[15px] flex-[0_0_50%] max-w-[50%]">
                                 <input type="text" className="w-full float-left text-[16px] text-[#8b8b8b] bg-[#ffffff] px-[14px] py-[15px] mt-[20px] border-0 rounded-[5px]" placeholder="Phone Number" name="Phone Number"/>
                              </div>
                              <div className="relative w-full min-h-[1px] pr-[15px] pl-[15px] flex-[0_0_50%] max-w-[50%]">
                                 <input type="text" className="w-full float-left text-[16px] text-[#8b8b8b] bg-[#ffffff] px-[14px] py-[15px] mt-[20px] border-0 rounded-[5px]" placeholder="Subject" name="Subject"/>
                              </div>
                           </div>
                           <textarea className="text-[#8b8b8b] w-full h-[130px] text-[18px] bg-[#ffffff] pt-[40px] pr-[15px] pb-6 pl-[15px] border-0 rounded-[5px]" placeholder="Message" rows={5} id="comment" name="Message"></textarea>
                           <div className="w-full float-left pt-[40px] pb-6">
                              <div className="w-[220px] float-left"><Link className="w-full text-center text-[18px] text-[#fefefd] bg-[#252525] p-[10px] uppercase block font-bold rounded-[5px]" href="#">Send</Link></div>
                           </div>
                        </form>
                     </div>
                  </div>
                  <div className="relative w-full min-h-[1px] pr-[15px] pl-[15px] flex-[0_0_33.333%] max-w-[33.333%]">
                     <div className="mt-[20px] "><Image className="max-w-[100%] h-auto" alt=""  width={300} height={300} src="/coin-img.png"/></div>
                  </div>
               </div>

            </div>
         </div>
      </div>
  )
}

export default ContactSection