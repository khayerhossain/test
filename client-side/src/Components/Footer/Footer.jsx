import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import mainLogo from "../../assets/main-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#03373D] text-white py-6">
      {/* Same container as accordion section */}
      <div className="w-full my-12 px-4 md:px-8 lg:px-16  mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          {/* Logo + Brand Name */}
          <div>
            <div className="flex items-center -space-x-5 mb-2">
              <img className="w-24 block" src={mainLogo} alt="Logo" />
              <span className="text-xl font-semibold block">GreenSpot</span>
            </div>

            <p className="text-sm">
              GardenHub is your go-to platform for <br />
              daily gardening tips, community inspiration, and expert advice.{" "}
              <br />
              Grow smarter, live greener.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-xl mb-2">Contact Info</h3>
            <p className="text-sm">Email: info@gardenhub.com</p>
            <p className="text-sm">Phone: +1 234 567 890</p>
            <p className="text-sm">Address: 123 Green St, Garden City</p>
          </div>

          {/* Terms */}
          <div>
            <h3 className="font-semibold text-xl mb-2">Terms</h3>
            <ul className="text-sm space-y-1">
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-xl mb-2">Follow Us</h3>
            <div className="flex space-x-4 text-green-400 text-lg">
              <a
                href="#"
                className="hover:text-green-200 transition"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="hover:text-green-200 transition"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="hover:text-green-200 transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center text-sm text-white mt-8">
          &copy; 2025 <span className="font-semibold">Gardenspoot</span>. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
