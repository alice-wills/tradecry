"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const KYCPage = () => {
  const [showLetter, setShowLetter] = useState(true);
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <aside className="flex flex-col sm:flex sm:flex-col">
        <Link
          href=""
          className="inline-flex items-center justify-center h-20 w-full bg-blue-600 hover:bg-blue-500 focus:bg-blue-500"
        >
          <span
            className="text-white text-4xl ml-2"
            style={{ display: showLetter ? "block" : "none" }}
          >
            <Image
              src="/logo-transparent.png"
              className="h-16"
              alt=""
              width={100}
              height={100}
            />
          </span>
        </Link>
        <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800">
          <nav className="flex flex-col mx-4 my-6 space-y-4">
            <Link
              href="/home"
              className="inline-flex items-center py-3 text-blue-600 bg-white rounded-lg px-2 justify-start"
            >
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
              <span
                className="ml-2"
                style={{ display: showLetter ? "block" : "none" }}
              >
                Home
              </span>
            </Link>
            <Link
              href="/deposit"
              className="inline-flex items-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg px-2 justify-start"
            >
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 17v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 12v8M12 12l-3.5 3.5M12 12l3.5 3.5M20 11H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v4a2 2 0 01-2 2z"
                ></path>
              </svg>

              <span
                className="ml-2"
                style={{ display: showLetter ? "block" : "none" }}
              >
                Deposit
              </span>
            </Link>
            <Link
              href="/wallet"
              className="inline-flex items-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg px-2 justify-start"
            >
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7h18c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2zm0 0h18c1.1 0 2 .9 2 2v1H3V7zm16 5v2h2v-2h-2z"
                ></path>
              </svg>

              <span
                className="ml-2"
                style={{ display: showLetter ? "block" : "none" }}
              >
                Wallet
              </span>
            </Link>

            <Link
              href="/kyc"
              className="inline-flex items-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg px-2 justify-start"
            >
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 22c-6 0-10-4-10-10V7l10-5 10 5v5c0 6-4 10-10 10zm0-4l5-5-5-5-5 5 5 5z"
                ></path>
              </svg>
              <span
                className="ml-2"
                style={{ display: showLetter ? "block" : "none" }}
              >
                KYC Verification
              </span>
            </Link>

            <Link
              href="/profile"
              className="inline-flex items-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg px-2 justify-start"
            >
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <span
                className="ml-2 "
                style={{ display: showLetter ? "block" : "none" }}
              >
                Account Settings{" "}
              </span>
            </Link>
          </nav>
        </div>
      </aside>

      <div className="flex-grow text-gray-800">
        <header className="flex items-center h-20 px-6 sm:px-10 bg-white">
          <div className="mr-8 cursor-pointer">
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => setShowLetter(!showLetter)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
          <div className="relative w-full max-w-md sm:-ml-2">
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
            <input
              type="text"
              role="search"
              placeholder="Search..."
              className="py-2 pl-10 pr-4 w-full border-4 border-transparent placeholder-gray-400 focus:bg-gray-50 rounded-lg"
            />
          </div>
          {/* <div className="flex flex-shrink-0 items-center ml-auto">
            <button
              className="relative inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg"
              onClick={() => setShowDropDownMenu(!showDropDownMenu)}
            >
              <span className="sr-only">User Menu</span>
              <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
                <span className="font-semibold">Sadoyin</span>
              </div>
              <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
                <Image
                  width={100}
                  height={100}
                  src="https://via.placeholder.com/150"
                  alt="user profile photo"
                  className="h-full w-full object-cover"
                />
              </span>
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="hidden sm:block h-6 w-6 text-gray-300"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              className="absolute top-20 bg-white border rounded-md p-2 w-56"
              style={{ display: showDropDownMenu ? "block" : "none" }}
            >
              <div className="">
                <Link
                  href="/profile"
                  className="p-2 hover:bg-blue-100 cursor-pointer"
                >
                  Profile
                </Link>
              </div>
              <Link href="#" className="p-2 hover:bg-blue-100 cursor-pointer">
                Logout
              </Link>
            </div>
            <div className="border-l pl-3 ml-3 space-x-1">
              <Link
                href="#"
                className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full"
              >
                <span className="sr-only">Log out</span>
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  ></path>
                </svg>
              </Link>
            </div>
          </div> */}
          <div className="shrink-0">
            <UserButton
              appearance={{
                elements: {
                  avatarBox: {
                    width: 35,
                    height: 35,
                  },
                },
              }}
            />
          </div>
        </header>

        <main className="p-6 sm:p-10 space-y-6">
          <div className="mr-6">
            <h1 className="text-4xl font-semibold mb-2">KYC Verification</h1>
          </div>

          <div className="landing-page animate__animated  animate__fadeIn bg-white shadow-lg">
            <section className="flex flex-col text-lg px-6 py-3 ">
              <p className="text-gray-700">
                To remove all limits on your account, we need to verify your
                identity
              </p>

              <div className="my-6">
                <form
                  method="POST"
                  action="https://cryptixmarket.com/kyc/store"
                  className="my-6"
                >
                  <input
                    type="hidden"
                    name="_token"
                    value="Npe0OYVvqZjmtaUDxGEuRy8KpdvzFd21KpIrfdhk"
                  />{" "}
                  <div className="my-3 flex justify-between items-center bg-gray-50 px-6 py-2 rounded">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center justify-center mr-6 rounded-full w-12 h-12 bg-gray-200">
                        <i className="far fa-file-alt"></i>
                      </div>
                      <div>
                        <h3 className="font-bold">Passport Photo</h3>
                        <p className="text-sm">Not Verified</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="mr-3 text-red-800">
                        <i className="fas fa-times-circle"></i>
                      </div>
                      <div>
                        <i className="fas fa-chevron-right"></i>
                      </div>
                    </div>
                  </div>
                  <div className="my-6">
                    <div className="my-5">
                      <p className="text-xl font-bold">Upload Passport</p>
                    </div>
                    <div>
                      <input type="file" name="photo" />
                    </div>
                  </div>
                </form>
              </div>

              <div className="my-6">
                <div className="my-3 flex justify-between items-center bg-gray-50 px-6 py-2 rounded">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center justify-center mr-6 rounded-full w-12 h-12 bg-gray-200">
                      <i className="far fa-file-alt"></i>
                    </div>
                    <div>
                      <h3 className="font-bold">
                        User Means of Identification
                      </h3>
                      <p className="text-sm">Not Verified</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="mr-3 text-red-800">
                      <i className="fas fa-times-circle"></i>
                    </div>
                    <div>
                      <i className="fas fa-chevron-right"></i>
                    </div>
                  </div>
                </div>

                <div className="my-6">
                  <div className="grid grid-cols-2">
                    <div>
                      <div className="my-5">
                        <p className="text-lg font-semibold">
                          Upload Card Front
                        </p>
                      </div>
                      <div>
                        <input type="file" name="id_card_from" />
                      </div>
                    </div>{" "}
                    <br />
                    <div>
                      <div className="my-5">
                        <p className="text-lg font-semibold">
                          Upload Card Back
                        </p>
                      </div>
                      <div>
                        <input type="file" name="id_card_back" />
                      </div>
                    </div>
                  </div>
                  <div className="my-6">
                    <input
                      className="cursor-pointer py-1 px-7 rounded bg-blue-800 text-white"
                      type="submit"
                      value="Upload"
                      name="upload"
                    />
                  </div>
                  <br />
                  <br />
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default KYCPage;
