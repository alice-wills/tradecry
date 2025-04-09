import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TeamSection = () => {
  return (
    <div className="w-full float-left pb-[70px] pt-[100px]">
      <div className="container pr-[15px] pl-[15px] mr-auto ml-auto">
        <div className="flex flex-wrap mr-[-15px] ml-[-15px]">
          <div className="flex-[0_0_100%] max-w-full w-full min-h-[1px] pr-[15px] pl-[15px]">
            <div className="flex w-[62%] text-center mx-auto">
              <hr className="border-[5px] border-[#2596be] w-[100px] bg-[#2596be] h-[10px] rounded-[10px] mt-[20px]" />
              <h1 className="text-[40px] font-bold text-[#232222]">
                Excellent Team Workers
              </h1>
              <hr className="border-[5px] border-[#2596be] w-[100px] bg-[#2596be] h-[10px] rounded-[10px] mt-[20px]" />
            </div>
          </div>
        </div>
        <div className="w-full float-left pt-[50px]">
          <div className="flex flex-wrap mr-[-15px] ml-[-15px]">
            <div className="relative w-full min-h-[1px] pr-[15px] pl-[15px] flex max-w-[33%]">
              <div className="w-full bg-[#ffffff] border-[#d8d8d7] rounded-md text-center pt-[40px] pr-[20px] pb-[50px] pl-[20px]">
                <div className="w-full text-center flex items-center justify-center">
                  <Image
                    className="max-w-full h-auto border-none align-middle"
                    alt=""
                    src="/team-img1.png"
                    width={200}
                    height={200}
                  />
                </div>
                <h3 className="w-full text-[20px] text-[#2d2d2c] font-bold text-center pt-3 pb-0 tracking-normal uppercase">
                  Williamsom
                </h3>
                <p className="w-full text-[16px] text-[#2d2d2c] m-0 text-center font-light leading-[24px]">
                  variations of passages
                </p>
              </div>
              <div className="w-full mx-auto text-center relative top-[-35px]">
                <ul className="flex text-center justify-center items-center gap-3 mx-auto">
                  <li>
                    <Link href="#">
                      <FacebookIcon />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <TwitterIcon />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <LinkedinIcon />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative w-full min-h-[1px] pr-[15px] pl-[15px] flex max-w-[33%]">
              <div className="w-full bg-[#ffffff] border-[#d8d8d7] rounded-md text-center pt-[40px] pr-[20px] pb-[50px] pl-[20px]">
                <div className="w-full text-center flex items-center justify-center">
                  <Image alt="" src="/team-img2.png" width={200} height={200} />
                </div>
                <h3 className="w-full text-[20px] text-[#2d2d2c] font-bold text-center pt-3 pb-0 tracking-normal uppercase">Sam Scout</h3>
                <p className="w-full text-[16px] text-[#2d2d2c] m-0 text-center font-light leading-[24px]">variations of passages</p>
              </div>
              <div className="w-full mx-auto text-center relative top-[-35px]">
                <ul className="flex text-center justify-center items-center gap-3 mx-auto">
                  <li>
                    <Link href="#">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative w-full min-h-[1px] pr-[15px] pl-[15px] flex max-w-[33%]">
              <div className="w-full bg-[#ffffff] border-[#d8d8d7] rounded-md text-center pt-[40px] pr-[20px] pb-[50px] pl-[20px]">
                <div className="w-full text-center flex items-center justify-center">
                  <Image alt="" src="/team-img3.png" width={200} height={200} />
                </div>
                <h3 className="w-full text-[20px] text-[#2d2d2c] font-bold text-center pt-3 pb-0 tracking-normal uppercase">Elias Jackson</h3>
                <p className="w-full text-[16px] text-[#2d2d2c] m-0 text-center font-light leading-[24px]">variations of passages</p>
              </div>
              <div className="w-full mx-auto text-center relative top-[-35px]">
                <ul className="flex text-center justify-center items-center gap-3 mx-auto">
                  <li>
                    <Link href="#">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
