import React from "react";
import {
  FaTelegram,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaChevronUp,
} from "react-icons/fa";
import logo from "../Img/perfect_rank.png";

const Footer = () => {
  return (
    <>
      <div className='mt-24 bg-gray-200 flex justify-center border-b-2 align-text-top hover:text-blue-500'>
        <FaChevronUp className='text-lg mt-6 ' />
        <a href='#home'>
          <h3 className='text-center p-5'>Back to Top</h3>
        </a>
      </div>
      <footer className='bg-gray-100 text-gray-800 py-10 px-6 md:px-12 lg:px-24 font-bold'>
        {/* Grid layout for responsiveness */}
        <div className='max-w-7xl p-2 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10'>
          {/* Left Section */}
          <div className='space-y-4'>
            <img className='size-20 mx-10' src={logo} alt='website-logo' />
            {/* <p className="text-sm text-gray-600 leading-relaxed">
            We understand that every student has different needs and capabilities, 
            which is why we create such a wonderful and unique curriculum that is 
            the best fit for every student.
          </p> */}
            <div className='flex gap-2 mt-4'>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg'
                alt='Google Play'
                className='w-24 md:w-28'
              />
              <img
                src='https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg'
                alt='App Store'
                className='w-24 md:w-28'
              />
            </div>

            {/* Social Media Links */}
            <div className='mt-10 pt-5 flex'>
              {/* <span className="font-semibold text-gray-700 block mb-3">Follow Us :</span> */}
              <div className='ml-2 flex gap-5 flex-wrap'>
                <FaTelegram className='text-blue-500 text-xl md:text-2xl cursor-pointer hover:scale-110 transition' />
                <FaFacebook className='text-blue-600 text-xl md:text-2xl cursor-pointer hover:scale-110 transition' />
                <FaInstagram className='text-pink-500 text-xl md:text-2xl cursor-pointer hover:scale-110 transition' />
                <FaLinkedin className='text-blue-700 text-xl md:text-2xl cursor-pointer hover:scale-110 transition' />
                {/* <FaTwitter className="text-blue-400 text-xl md:text-2xl cursor-pointer hover:scale-110 transition" /> */}
                <FaYoutube className='text-red-600 text-xl md:text-2xl cursor-pointer hover:scale-110 transition' />
              </div>
            </div>
          </div>

          {/* Know Us */}
          <div>
            <h3 className='text-lg font-semibold mb-3'>Know us</h3>
            <ul className='space-y-2 text-sm text-gray-700'>
              <li>
                <a href='#' className='hover:text-blue-500'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-500'>
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-500'>
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-500'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-500'>
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-500'>
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Help Us */}
          <div>
            <h3 className='text-lg font-semibold mb-3'>Sections</h3>
            <ul className='space-y-2 text-sm text-gray-700'>
              <li>
                <a href='#' className='hover:text-blue-500'>
                  UPCS mock test
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-500'>
                  UPCS mock test
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-500'>
                  UPCS mock test
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-500'>
                  MPSC mock test
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-500'>
                  MPSC mock test
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-500'>
                  MPSC mock test
                </a>
              </li>
            </ul>
          </div>

          {/* Our Channels */}
          <div>
            <h3 className='text-lg font-semibold mb-3'>Our Channels</h3>
            <ul className='space-y-2 text-sm text-gray-700'>
              <li>
                <a href='#' className='hover:text-blue-500'>
                  Perfect Rank Foundation
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-500'>
                  Perfect Rank Foundation
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-500'>
                  Perfect Rank Foundation
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-500'>
                  Perfect Rank Foundation
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-500'>
                  Perfect Rank Foundation
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-500'>
                  Perfect Rank Foundation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
