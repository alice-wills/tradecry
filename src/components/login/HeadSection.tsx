"use client"

import Link from "next/link";
import Navbar from "../Navbar";
import { useState } from "react";

const HeadSection = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  return (
    <div className="bg-[url(/banner-bg.png)] w-full h-full mb-8">
      <div className="">
        <Navbar />
        <div className="container pr-[15px] pl-[15px] mr-auto ml-auto mt-4">
          <div className="justify-center flex flex-wrap mr-[-15px] ml-[-15px]">
            <div className="relative w-full min-h-[1px] pr-[15px] pl-[15px] flex-[0_0_66.666%] max-w-[66.666%]">
              <div className="relative flex flex-col min-w-0 break-words bg-clip-border border border-[rgba(0,0,0,0.125)] bg-white rounded-sm mb-8">
                <div className="px-5 py-3 mb-0 bg-[rgba(0,0,0,0.03)] text-black border-b border-[rgba(0,0,0,0.125)]">Login</div>

                <div className="flex-[1_1_auto] p-5">
                  <form >
                    <div className="mb-1 flex flex-wrap mr-[15px] ml-[15px]">
                      <label className="pt-[calc(0.375rem+1px)] pb-[calc(0.375rem+1px)] mb-0  leading-6 relative w-full min-h-[1px] pr-[15px] pl-[15px] text-lg text-black">
                        Email Address
                      </label>

                      <div className="flex-[1_1_50%] max-w-[50%] relative w-full min-h-[1px] pr-[15px] pl-[15px]">
                        <input
                          id="email"
                          type="email"
                          className="block w-full px-2 py-2 text-[16px] text-[#495057] bg-[#fff] bg-clip-padding border border-[#ced4da] rounded-sm "
                          name="email"
                          value={email}
                          onChange={(e)=> setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-1 flex flex-wrap mr-[15px] ml-[15px]">
                      <label className="pt-[calc(0.375rem+1px)] pb-[calc(0.375rem+1px)] mb-0  leading-6 relative w-full min-h-[1px] pr-[15px] pl-[15px] text-lg text-black">
                        Password
                      </label>

                      <div className="flex-[1_1_50%] max-w-[50%] relative w-full min-h-[1px] pr-[15px] pl-[15px]">
                        <input
                          id="password"
                          type="password"
                          className="block w-full px-2 py-2 text-[16px] text-[#495057] bg-[#fff] bg-clip-padding border border-[#ced4da] rounded-sm "
                          name="password"
                          value={password}
                          onChange={(e)=> setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-1 flex flex-wrap mr-[15px] ml-[15px]">
                      <div className="relative w-full min-h-[1px] pr-[15px] pl-[15px] flex-[0_0_50%] max-w-[50%]">
                        <div className="relative block pl-5 ">
                          <input
                            className="absolute p-0 mt-2 -ml-5"
                            type="checkbox"
                            name="remember"
                            id="remember"
                          />

                          <label className="mb-0 inline-block">
                            Remember Me
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="mb-0 flex flex-wrap ">
                      <div className="flex items-start mx-auto justify-center gap-4">
                        <button type="submit" className="py-2 px-4 bg-blue-500 mt-3 text-white rounded hover:bg-blue-700 mr-2 cursor-pointer">
                          Login
                        </button>

                        <Link
                          className="cursor-pointer py-2 px-4 bg-gray-500 mt-3 text-white rounded hover:bg-gray-700 mr-2"
                          href="https://cryptixmarket.com/password/reset"
                        >
                          Forgot Your Password?
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadSection;
