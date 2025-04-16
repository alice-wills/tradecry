import Link from "next/link"


const FooterSection = () => {
  return (
    <>
    <div className="w-full float-left h-auto bg-[#2d2c2c] bg-[length:100%] p-[90px_0] ">
        <div className="container pr-[15px] pl-[15px] mr-auto ml-auto mb-6">
           <div className="flex flex-wrap flex-col md:flex-row items-center lg:flex-row mr-[-15px] ml-[-15px]">
              <div className="flex-[0_0_25%] max-w-[25%] relative w-full min-h-[1px] pr-[15px] pl-[15px]">
                 <h3 className="w-full text-[24px] text-[#ffffff] mb-[15px] font-bold uppercase">Our Company</h3>
                 <div className="w-full float-left text-[#ffffff]">
                    <ul>
                       <li><Link href="/">Home</Link></li>
                       <li><Link href="#">About</Link></li>
                       <li><Link href="/sign-up">Register</Link></li>
                       <li><Link href="/sign-in">Login</Link></li>
                       
                       <li><Link href="contact.html">Contact</Link></li>
                    </ul>
                 </div>
              </div>
              <div className="flex-[0_0_25%] max-w-[25%] relative w-full min-h-[1px] pr-[15px] pl-[15px]">
                 <h3 className="w-full text-[24px] text-[#ffffff] mb-[15px] font-bold uppercase">Our Company</h3>
                 <div className="w-full float-left text-[#ffffff]">
                    <ul>
                       <li><Link href="#">Faq</Link></li>
                       <li><Link href="#">Terms Of Services</Link></li>
                       <li><Link href="#">Privacy Policy</Link></li><Link href="#">
                       </Link><li><Link href="#"></Link><Link href="#">Register</Link></li>
                       <li><Link href="/sign-in">Login</Link></li>
                       
                    </ul>
                 </div>
              </div>
              <div className="flex-[0_0_25%] max-w-[25%] relative w-full min-h-[1px] pr-[15px] pl-[15px]">
                 <h1 className="w-full text-[24px] text-[#ffffff] mb-[15px] font-bold uppercase">Contact us</h1>
                 <div className="w-full float-left text-[#ffffff]">
                    <ul>
                       <li>
                          <Link href="#"><span className="padding_left_10"><i className="fa fa-map-marker" aria-hidden="true"></i></span>Location</Link>
                       </li>
                       <li>
                          <Link href="#"><span className="padding_left_10"><i className="fa fa-phone" aria-hidden="true"></i></span>+01 5618551885</Link>
                       </li>
                       <li>
                          <Link href="#"><span className="padding_left_10"><i className="fa fa-envelope" aria-hidden="true"></i></span>alicyawills254@gmail.com</Link>
                       </li>
                    </ul>
                 </div>
              </div>
              <div className="flex-[0_0_25%] max-w-[25%] relative w-full min-h-[1px] pr-[15px] pl-[15px]">
                 <h1 className="w-full text-[24px] text-[#ffffff] mb-[15px] font-bold uppercase">Newsletter</h1>
                 <div className="mb-4">
                    <textarea className="text-[#3b3b3b] w-full h-[55px] text-[18px] p-[10px_20px_0px_20px] bg-[#ffffff] m-[0_auto] block mt-[20px] border-0" placeholder="Your Email" rows={5} id="comment" name="Your Email"></textarea>
                    <div className="w-[70px] float-left pt-[30px]"><Link href="#"><i className="fa fa-arrow-right" aria-hidden="true"></i></Link></div>
                 </div>
                 <div className="w-full float-left mt-[20px]">
                    <ul>
                       <li><Link href="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                       <li><Link href="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                       <li><Link href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                       <li><Link href="#"><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>
     </div>
     <div className="w-full float-left bg-[#2596be] h-auto">
        <div className="container pr-[15px] pl-[15px] mr-auto ml-auto mb-6">
           <p className="w-full float-left text-[16px] text-[#fefefd] text-center ml-0 mt-5 font-light">2020 - 2025 All Rights Reserved.</p>
        </div>
     </div>
     </>
  )
}

export default FooterSection