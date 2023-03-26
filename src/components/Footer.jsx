import React from "react";
import plage from "../assets/plage.jpg";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineSkype } from "react-icons/ai";
import { SlEnvolope } from "react-icons/sl";
import { CiFacebook } from "react-icons/ci";
import { FaGooglePlusG } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { TfiYoutube } from "react-icons/tfi";
import { FaVimeo } from "react-icons/fa";
function Footer() {
  return (
    <div className="bg-black">
      <div className="grid grid-cols-1 sm:grid-cols-sm-4  md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 w-11/12 m-auto py-8 text-white ">
        <div className="">
          <h2>Menu</h2>
          <ul>
            <li>About Us</li>
            <li>Press Center</li>
            <li>Jobs</li>
            <li>News</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>

        <div className="">
          <h2>Our Blog</h2>
          <div className="flex items-center">
            <img className="w-[80px]" src={plage} alt="plage" />
            <ul className="ml-4">
              <h3 className="text-green-300">Beautiful places</h3>
              <ul>
                <li>Lorem, ipsum dolor</li>
                <li>Lorem, ipsum dolor</li>
              </ul>
            </ul>
          </div>
          <div className="flex items-center">
            <img className="w-[80px]" src={plage} alt="plage" />
            <ul className="ml-4">
              <h3 className="text-green-300">Beautiful places</h3>
              <ul>
                <li>Lorem, ipsum dolor</li>
                <li>Lorem, ipsum dolor</li>
              </ul>
            </ul>
          </div>
        </div>
        {/* center */}
        <div className="">
          <h2>Call Center</h2>
          <div className="flex items-center">
            <FiPhoneCall className="mr-4" /> 0698487054
          </div>
          <div className="flex items-center">
            <AiOutlineSkype className="mr-4" /> Skype
          </div>
          <div className="flex items-center">
            <SlEnvolope className="mr-4" /> Message us
          </div>
        </div>
        {/* follow us */}
        <div className="">
          <h2>Follow Us</h2>
          <div className=" flex">
            <CiFacebook className="mr-2" />
            <FaGooglePlusG className="mr-2" />
            <FiTwitter className="mr-2" />
            <FaPinterestP className="mr-2" />
            <AiFillLinkedin className="mr-2" />
            <TfiYoutube className="mr-2" />
            <FaVimeo className="mr-2" />
          </div>
          <h2>Subcribe to our news letter!</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quos
            deleniti eum numquam.
          </p>
          <div className="">
            <input type="text" placeholder="Enter your email..." />
            <button className="bg-green-300 p-2 rounded-[30%] text-xl text-[#FFF]">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
