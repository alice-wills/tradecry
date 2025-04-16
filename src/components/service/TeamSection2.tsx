import Image from "next/image";

const TeamSection2 = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <!-- Optional: Add a section title here if desired --> */}
        {/* <!-- <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Team</h2> --> */}
        <div className="flex w-[62%] text-center mx-auto mb-7">
          <hr className="border-[5px] border-[#2596be] w-[100px] bg-[#2596be] h-[10px] rounded-[10px] mt-[20px]" />
          <h1 className="text-[40px] font-bold text-[#232222] dark:text-white">
            Excellent Team Workers
          </h1>
          <hr className="border-[5px] border-[#2596be] w-[100px] bg-[#2596be] h-[10px] rounded-[10px] mt-[20px]" />
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* <!-- Team Member Card 1 --> */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 md:p-8 flex flex-col items-center text-center">
              <Image
                className="h-36 w-36 rounded-full object-cover mb-5 mx-auto bg-gray-200"
                src="/team6.avif"
                width={200}
                height={200}
                alt="Portrait of Williamson"
              />
              {/* Replace src with actual image path. Added bg-gray-200 as fallback like the first image */}
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                WILLIAMSON
              </h3>
              <p className="text-base text-gray-600 mb-6">
                Lead Manager
              </p>
              <div className="flex justify-center space-x-3">
                <a
                  href="#"
                  title="Facebook"
                  className="text-white bg-cyan-500 hover:bg-cyan-600 rounded-full p-2 transition duration-200 ease-in-out"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  title="Twitter"
                  className="text-white bg-cyan-500 hover:bg-cyan-600 rounded-full p-2 transition duration-200 ease-in-out"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  title="LinkedIn"
                  className="text-white bg-cyan-500 hover:bg-cyan-600 rounded-full p-2 transition duration-200 ease-in-out"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  title="Instagram"
                  className="text-white bg-cyan-500 hover:bg-cyan-600 rounded-full p-2 transition duration-200 ease-in-out"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 1.272.058 2.163.248 2.943.556.787.31 1.457.718 2.123 1.384.666.666 1.074 1.336 1.384 2.123.308.78.498 1.671.556 2.943.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.272-.248 2.163-.556 2.943-.31.787-.718 1.457-1.384 2.123-.666.666-1.336 1.074-2.123 1.384-.78.308-1.671.498-2.943.556-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.272-.058-2.163-.248-2.943-.556-.787-.31-1.457-.718-2.123-1.384-.666-.666-1.074-1.336-1.384-2.123-.308-.78-.498-1.671-.556-2.943-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.058-1.272.248-2.163.556-2.943.31-.787.718-1.457 1.384-2.123.666-.666 1.336-1.074 2.123-1.384.78-.308 1.671-.498 2.943-.556C8.416 2.175 8.796 2.163 12 2.163zm0 1.626c-3.162 0-3.524.011-4.76.069-1.19.054-1.97.232-2.598.478-.658.254-1.187.597-1.729 1.139-.542.542-.885 1.071-1.139 1.729-.246.628-.424 1.407-.478 2.598C2.174 8.476 2.162 8.838 2.162 12s.011 3.524.069 4.76c.054 1.19.232 1.97.478 2.598.254.658.597 1.187 1.139 1.729.542.542 1.071.885 1.729 1.139.628.246 1.407.424 2.598.478 1.236.058 1.598.069 4.76.069s3.524-.011 4.76-.069c1.19-.054 1.97-.232 2.598-.478.658-.254 1.187-.597 1.729-1.139.542-.542.885-1.071 1.139-1.729.246-.628.424-1.407.478-2.598.058-1.236.069-1.598.069-4.76s-.011-3.524-.069-4.76c-.054-1.19-.232-1.97-.478-2.598-.254-.658-.597-1.187-1.139-1.729-.542-.542-1.071-.885-1.729-1.139-.628-.246-1.407-.424-2.598-.478C15.524 3.8 15.162 3.789 12 3.789zm0 2.937c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zm0 8.378c-1.862 0-3.378-1.516-3.378-3.378s1.516-3.378 3.378-3.378 3.378 1.516 3.378 3.378-1.516 3.378-3.378 3.378zM17.5 6.138c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Team Member Card 2 --> */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 md:p-8 flex flex-col items-center text-center">
              <Image
                className="h-36 w-36 rounded-full object-cover mb-5 mx-auto"
                src="/team5.avif"
                width={200}
                height={200}
                alt="Portrait of Sam Scout"
              />
              {/* Replace src with actual image path */}
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                SAM SCOUT
              </h3>
              <p className="text-base text-gray-600 mb-6">
                Assistant Manager
              </p>
              <div className="flex justify-center space-x-3">
                {/* Repeat social icons as above, or copy paste the block */}
                <a
                  href="#"
                  title="Facebook"
                  className="text-white bg-cyan-500 hover:bg-cyan-600 rounded-full p-2 transition duration-200 ease-in-out"
                >
                  {" "}
                  <span className="sr-only">Facebook</span>{" "}
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {" "}
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />{" "}
                  </svg>{" "}
                </a>
                <a
                  href="#"
                  title="Twitter"
                  className="text-white bg-cyan-500 hover:bg-cyan-600 rounded-full p-2 transition duration-200 ease-in-out"
                >
                  {" "}
                  <span className="sr-only">Twitter</span>{" "}
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {" "}
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />{" "}
                  </svg>{" "}
                </a>
                <a
                  href="#"
                  title="LinkedIn"
                  className="text-white bg-cyan-500 hover:bg-cyan-600 rounded-full p-2 transition duration-200 ease-in-out"
                >
                  {" "}
                  <span className="sr-only">LinkedIn</span>{" "}
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {" "}
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />{" "}
                  </svg>{" "}
                </a>
                <a
                  href="#"
                  title="Instagram"
                  className="text-white bg-cyan-500 hover:bg-cyan-600 rounded-full p-2 transition duration-200 ease-in-out"
                >
                  {" "}
                  <span className="sr-only">Instagram</span>{" "}
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {" "}
                    <path
                      fillRule="evenodd"
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 1.272.058 2.163.248 2.943.556.787.31 1.457.718 2.123 1.384.666.666 1.074 1.336 1.384 2.123.308.78.498 1.671.556 2.943.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.272-.248 2.163-.556 2.943-.31.787-.718 1.457-1.384 2.123-.666.666-1.336 1.074-2.123 1.384-.78.308-1.671.498-2.943.556-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.272-.058-2.163-.248-2.943-.556-.787-.31-1.457-.718-2.123-1.384-.666-.666-1.074-1.336-1.384-2.123-.308-.78-.498-1.671-.556-2.943-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.058-1.272.248-2.163.556-2.943.31-.787.718 1.457 1.384-2.123.666-.666 1.336-1.074 2.123-1.384.78-.308 1.671.498 2.943.556C8.416 2.175 8.796 2.163 12 2.163zm0 1.626c-3.162 0-3.524.011-4.76.069-1.19.054-1.97.232-2.598.478-.658.254-1.187.597-1.729 1.139-.542.542-.885 1.071-1.139 1.729-.246.628-.424 1.407-.478 2.598C2.174 8.476 2.162 8.838 2.162 12s.011 3.524.069 4.76c.054 1.19.232 1.97.478 2.598.254.658.597 1.187 1.139 1.729.542.542 1.071.885 1.729 1.139.628.246 1.407.424 2.598.478 1.236.058 1.598.069 4.76.069s3.524-.011 4.76-.069c1.19-.054 1.97-.232 2.598-.478.658-.254 1.187-.597 1.729-1.139.542.542.885-1.071 1.139-1.729.246-.628.424-1.407.478-2.598.058-1.236.069-1.598.069-4.76s-.011-3.524-.069-4.76c-.054-1.19-.232-1.97-.478-2.598-.254-.658-.597-1.187-1.139-1.729-.542-.542-1.071-.885-1.729-1.139-.628-.246-1.407-.424-2.598-.478C15.524 3.8 15.162 3.789 12 3.789zm0 2.937c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zm0 8.378c-1.862 0-3.378-1.516-3.378-3.378s1.516-3.378 3.378-3.378 3.378 1.516 3.378 3.378-1.516 3.378-3.378 3.378zM17.5 6.138c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25z"
                      clipRule="evenodd"
                    />{" "}
                  </svg>{" "}
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Team Member Card 3 --> */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 md:p-8 flex flex-col items-center text-center">
              <Image
                className="h-36 w-36 rounded-full object-cover mb-5 mx-auto"
                src="/team4.avif"
                width={200}
                height={200}
                alt="Portrait of Elias Jackson"
              />
              {/* Replace src with actual image path */}
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                ELIAS JACKSON
              </h3>
              <p className="text-base text-gray-600 mb-6">
                Head HR
              </p>
              <div className="flex justify-center space-x-3">
                {/* Repeat social icons as above, or copy paste the block */}
                <a
                  href="#"
                  title="Facebook"
                  className="text-white bg-cyan-500 hover:bg-cyan-600 rounded-full p-2 transition duration-200 ease-in-out"
                >
                  {" "}
                  <span className="sr-only">Facebook</span>{" "}
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {" "}
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />{" "}
                  </svg>{" "}
                </a>
                <a
                  href="#"
                  title="Twitter"
                  className="text-white bg-cyan-500 hover:bg-cyan-600 rounded-full p-2 transition duration-200 ease-in-out"
                >
                  {" "}
                  <span className="sr-only">Twitter</span>{" "}
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {" "}
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />{" "}
                  </svg>{" "}
                </a>
                <a
                  href="#"
                  title="LinkedIn"
                  className="text-white bg-cyan-500 hover:bg-cyan-600 rounded-full p-2 transition duration-200 ease-in-out"
                >
                  {" "}
                  <span className="sr-only">LinkedIn</span>{" "}
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {" "}
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />{" "}
                  </svg>{" "}
                </a>
                <a
                  href="#"
                  title="Instagram"
                  className="text-white bg-cyan-500 hover:bg-cyan-600 rounded-full p-2 transition duration-200 ease-in-out"
                >
                  {" "}
                  <span className="sr-only">Instagram</span>{" "}
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {" "}
                    <path
                      fillRule="evenodd"
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 1.272.058 2.163.248 2.943.556.787.31 1.457.718 2.123 1.384.666.666 1.074 1.336 1.384 2.123.308.78.498 1.671.556 2.943.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.272-.248 2.163-.556 2.943-.31.787-.718 1.457-1.384 2.123-.666.666-1.336 1.074-2.123 1.384-.78.308-1.671.498-2.943.556-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.272-.058-2.163-.248-2.943-.556-.787-.31-1.457-.718-2.123-1.384-.666-.666-1.074-1.336-1.384-2.123-.308-.78-.498-1.671-.556-2.943-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.058-1.272.248-2.163.556-2.943.31-.787.718 1.457 1.384-2.123.666-.666 1.336-1.074 2.123-1.384.78-.308 1.671.498 2.943.556C8.416 2.175 8.796 2.163 12 2.163zm0 1.626c-3.162 0-3.524.011-4.76.069-1.19.054-1.97.232-2.598.478-.658.254-1.187.597-1.729 1.139-.542.542-.885 1.071-1.139 1.729-.246.628-.424 1.407-.478 2.598C2.174 8.476 2.162 8.838 2.162 12s.011 3.524.069 4.76c.054 1.19.232 1.97.478 2.598.254.658.597 1.187 1.139 1.729.542.542 1.071.885 1.729 1.139.628.246 1.407.424 2.598.478 1.236.058 1.598.069 4.76.069s3.524-.011 4.76-.069c1.19-.054 1.97-.232 2.598-.478.658-.254 1.187-.597 1.729-1.139.542.542.885-1.071 1.139-1.729.246-.628.424-1.407.478-2.598.058-1.236.069-1.598.069-4.76s-.011-3.524-.069-4.76c-.054-1.19-.232-1.97-.478-2.598-.254-.658-.597-1.187-1.139-1.729-.542-.542-1.071-.885-1.729-1.139-.628-.246-1.407-.424-2.598-.478C15.524 3.8 15.162 3.789 12 3.789zm0 2.937c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zm0 8.378c-1.862 0-3.378-1.516-3.378-3.378s1.516-3.378 3.378-3.378 3.378 1.516 3.378 3.378-1.516 3.378-3.378 3.378zM17.5 6.138c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25z"
                      clipRule="evenodd"
                    />{" "}
                  </svg>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection2;
