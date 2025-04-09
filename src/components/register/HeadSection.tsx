"use client";

import { useState } from "react";
import Navbar from "../Navbar";
import { useSignUp } from "@clerk/nextjs";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const HeadSection = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [code, setCode] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { isLoaded, signUp, setActive } = useSignUp();

  const router = useRouter();

  if (!isLoaded) return <Loader2 className="mx-auto my-6 animate-spin" />;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!isLoaded) return null;

    try {
      await signUp.create({
        firstName,
        lastName,
        emailAddress,
        phoneNumber,
        password,
      });
      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });
      setPendingVerification(true);
    } catch (error: any) {
      console.log(JSON.stringify(error, null, 2));
      setError(error.errors[0].message);
    }
  }

  async function onPresseVerify(e: React.FormEvent) {
    e.preventDefault();
    if (!isLoaded) return;

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (completeSignUp.status !== "complete") {
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.push("/home");
      }
    } catch (error: any) {
      console.log(JSON.stringify(error, null, 2));
      setError(error.errors[0].message);
    }
  }

  return (
    <div className="bg-[url(/banner-bg.png)] w-full h-full mb-8">
      <div className="">
        <Navbar />
        <div className="container pr-[15px] pl-[15px] mr-auto ml-auto mt-4">
          <div className="justify-center flex flex-wrap mr-[-15px] ml-[-15px]">
            <div className="relative w-full min-h-[1px] pr-[15px] pl-[15px] flex-[0_0_66.666%] max-w-[66.666%]">
              <div className="relative flex flex-col min-w-0 break-words bg-clip-border border border-[rgba(0,0,0,0.125)] bg-white rounded-sm mb-8">
                <div className="px-5 py-3 mb-0 bg-[rgba(0,0,0,0.03)] text-black border-b border-[rgba(0,0,0,0.125)]">
                  Register
                </div>

                <div className="flex-[1_1_auto] p-5">
                  {!pendingVerification ? (
                    <form onSubmit={submit}>
                      <div className="mb-1 flex flex-wrap mr-[15px] ml-[15px]">
                        <label className="pt-[calc(0.375rem+1px)] pb-[calc(0.375rem+1px)] mb-0  leading-6 relative w-full min-h-[1px] pr-[15px] pl-[15px] text-lg text-black">
                          First Name
                        </label>

                        <div className="flex-[1_1_50%] max-w-[50%] relative w-full min-h-[1px] pr-[15px] pl-[15px]">
                          <input
                            id="name"
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="block w-full px-2 py-2 text-[16px] text-[#495057] bg-[#fff] bg-clip-padding border border-[#ced4da] rounded-sm"
                            name="name"
                          />
                        </div>
                      </div>
                      <div className="mb-1 flex flex-wrap mr-[15px] ml-[15px]">
                        <label className="pt-[calc(0.375rem+1px)] pb-[calc(0.375rem+1px)] mb-0  leading-6 relative w-full min-h-[1px] pr-[15px] pl-[15px] text-lg text-black">
                          Last Name
                        </label>

                        <div className="flex-[1_1_50%] max-w-[50%] relative w-full min-h-[1px] pr-[15px] pl-[15px]">
                          <input
                            id="name"
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="block w-full px-2 py-2 text-[16px] text-[#495057] bg-[#fff] bg-clip-padding border border-[#ced4da] rounded-sm"
                            name="name"
                          />
                        </div>
                      </div>

                      <div className="mb-1 flex flex-wrap mr-[15px] ml-[15px]">
                        <label className=" pt-[calc(0.375rem+1px)] pb-[calc(0.375rem+1px)] mb-0 leading-6 relative w-full min-h-[1px] pr-[15px] pl-[15px] text-black">
                          Email Address
                        </label>

                        <div className="flex-[1_1_50%] max-w-[50%] relative w-full min-h-[1px] pr-[15px] pl-[15px]">
                          <input
                            id="email"
                            type="email"
                            placeholder="Email Address"
                            value={emailAddress}
                            onChange={(e) => setEmailAddress(e.target.value)}
                            className="block w-full px-2 py-2 text-[16px] text-[#495057] bg-[#fff] bg-clip-padding border border-[#ced4da] rounded-sm"
                            name="email"
                            required
                          />
                        </div>
                      </div>

                      <div className="mb-1 flex flex-wrap mr-[15px] ml-[15px]">
                        <label className=" pt-[calc(0.375rem+1px)] pb-[calc(0.375rem+1px)] mb-0  leading-6 relative w-full min-h-[1px] pr-[15px] pl-[15px] text-black">
                          Phone Number
                        </label>

                        <div className="flex-[1_1_50%] max-w-[50%] relative w-full min-h-[1px] pr-[15px] pl-[15px]">
                          <input
                            id="phone"
                            type="tel"
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="block w-full px-2 py-2 text-[16px] text-[#495057] bg-[#fff] bg-clip-padding border border-[#ced4da] rounded-sm"
                            name="phone"
                            required
                          />
                        </div>
                      </div>

                      <div className="mb-1 flex flex-wrap mr-[15px] ml-[15px]">
                        <label className=" pt-[calc(0.375rem+1px)] pb-[calc(0.375rem+1px)] mb-0  leading-6 relative w-full min-h-[1px] pr-[15px] pl-[15px] text-black">
                          Password
                        </label>

                        <div className="flex-[1_1_50%] max-w-[50%] relative w-full min-h-[1px] pr-[15px] pl-[15px]">
                          <input
                            id="password"
                            placeholder="password"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full px-2 py-2 text-[16px] text-[#495057] bg-[#fff] bg-clip-padding border border-[#ced4da] rounded-sm"
                            name="password"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-8 top-1/2 -translate-y-1/2"
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4 text-gray-500" />
                            ) : (
                              <Eye className="h-4 w-4 text-gray-500" />
                            )}
                          </button>
                        </div>
                      </div>
                      {error && <p className="text-red-700 text-xl">{error}</p>}
                      <div id="clerk-captcha"/>
                      <div className="mb-0 flex flex-wrap -mr-4 -ml-4">
                      
                        <div className="ml-[33.333%] flex-[0_0_50%] max-w-50% relative w-full min-h-[1px] pr-[15px] pl-[15px]">
                          <button
                            type="submit"
                            className="py-2 px-4 bg-blue-500 mt-3 text-white rounded hover:bg-blue-700 mr-2"
                          >
                            Register
                          </button>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <form onSubmit={onPresseVerify} className="space-y-4">
                      <div className="mb-1 flex flex-wrap mr-[15px] ml-[15px]">
                        <label className=" pt-[calc(0.375rem+1px)] pb-[calc(0.375rem+1px)] mb-0  leading-6 relative w-full min-h-[1px] pr-[15px] pl-[15px] text-black">
                          Verification Code
                        </label>
                        <input
                          id="code"
                          type="text"
                          value={code}
                          onChange={(e) => setCode(e.target.value)}
                          placeholder="Enter verification code"
                          className="block w-full px-2 py-2 text-[16px] text-[#495057] bg-[#fff] bg-clip-padding border border-[#ced4da] rounded-sm"
                          required
                        />
                      </div>
                      {error && <p className="text-red-700 text-xl">{error}</p>}
                      <button
                        type="submit"
                        className="py-2 px-10 bg-blue-500 mt-3 ml-6 text-white rounded hover:bg-blue-700 mr-10"
                      > 
                        Verify Email
                      </button>
                    </form>
                  )}
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
