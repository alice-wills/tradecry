import Image from "next/image"
import Link from "next/link"

const ContactSection = () => {
   return (
     <div className="w-full bg-[#2596be] px-6 md:px-12 lg:px-[90px] py-16" id="contact">
       <div className="max-w-7xl mx-auto">
         <h1 className="text-[32px] md:text-[40px] text-[#fefefd] font-bold uppercase mb-10">
           Contact Us
         </h1>
         <div className="grid lg:grid-cols-3 gap-10">
           {/* Form */}
           <div className="lg:col-span-2">
             <form>
               <div className="grid md:grid-cols-2 gap-x-6 gap-y-4">
                 <input
                   type="text"
                   className="w-full text-[16px] text-[#8b8b8b] bg-white px-4 py-4 rounded-[5px]"
                   placeholder="Your Name"
                   name="Your Name"
                 />
                 <input
                   type="email"
                   className="w-full text-[16px] text-[#8b8b8b] bg-white px-4 py-4 rounded-[5px]"
                   placeholder="Email"
                   name="Email"
                 />
                 <input
                   type="tel"
                   className="w-full text-[16px] text-[#8b8b8b] bg-white px-4 py-4 rounded-[5px]"
                   placeholder="Phone Number"
                   name="Phone Number"
                 />
                 <input
                   type="text"
                   className="w-full text-[16px] text-[#8b8b8b] bg-white px-4 py-4 rounded-[5px]"
                   placeholder="Subject"
                   name="Subject"
                 />
               </div>
               <textarea
                 className="w-full h-[130px] text-[16px] text-[#8b8b8b] bg-white mt-4 p-4 rounded-[5px]"
                 placeholder="Message"
                 name="Message"
                 rows={5}
               ></textarea>
               <div className="pt-6">
                 <Link
                   href="#"
                   className="inline-block text-center text-[18px] text-white bg-[#252525] px-6 py-3 uppercase font-bold rounded-[5px]"
                 >
                   Send
                 </Link>
               </div>
             </form>
           </div>
 
           {/* Image */}
           <div className="flex justify-center items-start">
             <Image
               src="/coin-img.png"
               alt="Contact Illustration"
               width={300}
               height={300}
               className="max-w-full h-auto"
             />
           </div>
         </div>
       </div>
     </div>
   );
 };

export default ContactSection