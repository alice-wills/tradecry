import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="bg-[#2d2c2c] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Our Company */}
        <div>
          <h3 className="text-xl font-bold uppercase mb-4">Our Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="#">About</Link></li>
            <li><Link href="/sign-up">Register</Link></li>
            <li><Link href="/sign-in">Login</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-xl font-bold uppercase mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">FAQ</Link></li>
            <li><Link href="#">Terms of Service</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold uppercase mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <span>Location</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt />
              <span>+01 5618551885</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope />
              <span>alicyawills254@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-bold uppercase mb-4">Newsletter</h3>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 text-sm text-[#3b3b3b] bg-white rounded-md"
            />
            <button className="mt-3 text-white">
              <FaArrowRight />
            </button>
          </div>
          <div className="flex space-x-4 mt-4 text-lg">
            <Link href="#"><FaFacebookF /></Link>
            <Link href="#"><FaTwitter /></Link>
            <Link href="#"><FaLinkedinIn /></Link>
            <Link href="#"><FaInstagram /></Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#2596be] text-center text-sm text-white py-4 mt-10">
        © 2020 - 2025 All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
