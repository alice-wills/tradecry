import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  // mx-auto flex max-w-7xl items-center justify-between gap-3 p-3
  return (
    <nav className="flex mx-auto max-w-7xl items-center justify-start p-4 gap-4 text-white">
      <Link className="" href="/">
        <Image className="" src="/crypix .jpeg" alt="" width={150} height={150} />
      </Link>
      <div className="">
        <ul className="flex items-center gap-3 flex-1">
          <li className="">
            <Link className="" href="/">
              Home
            </Link>
          </li>

          <li className="">
            <Link className="" href="#about">
              About
            </Link>
          </li>

          <li className="">
            <Link className="" href="/sign-up">
              Register
            </Link>
          </li>
          <li className="">
            <Link className="" href="/sign-in">
              Login
            </Link>
          </li>
          <li className="">
            <Link className="" href="#contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

// -webkit-tap-highlight-color: transparent;
// -webkit-text-size-adjust: 100%;
// --blue: #007bff;
// --indigo: #6610f2;
// --purple: #6f42c1;
// --pink: #e83e8c;
// --red: #dc3545;
// --orange: #fd7e14;
// --yellow: #ffc107;
// --green: #28a745;
// --teal: #20c997;
// --cyan: #17a2b8;
// --white: #fff;
// --gray: #6c757d;
// --gray-dark: #343a40;
// --primary: #007bff;
// --secondary: #6c757d;
// --success: #28a745;
// --info: #17a2b8;
// --warning: #ffc107;
// --danger: #dc3545;
// --light: #f8f9fa;
// --dark: #343a40;
// --breakpoint-xs: 0;
// --breakpoint-sm: 576px;
// --breakpoint-md: 768px;
// --breakpoint-lg: 992px;
// --breakpoint-xl: 1200px;
// --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
// --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
// text-align: left;
// color: #666666;
// font-size: 14px;
// font-family: 'Poppins', sans-serif;
// line-height: 1.80857;
// font-weight: normal;
// box-sizing: border-box !important;
// transition: ease all 0.5s;
// position: relative;
// display: flex;
// align-items: center;
// flex-flow: row nowrap;
// justify-content: flex-start;
// background-color: transparent !important;
// padding: 15px 0px;
