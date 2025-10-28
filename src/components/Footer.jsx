import React from "react";
import Button from "./Button";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">FurniHome</h2>
          <p className="text-sm leading-relaxed">
            Your comfort, our design. Explore our modern, stylish, and sustainable
            furniture that makes your home truly yours.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Products</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Customer Service</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition">Returns & Refunds</a></li>
            <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Stay Connected</h3>
          <p className="text-sm mb-4">Subscribe to get updates on new arrivals and offers.</p>

          <div className="flex items-center mb-4">
            <input type="email" placeholder="Enter your email"
              className="px-3 py-2 w-full rounded-l-md text-gray-100 focus:outline-none"/>
              <Button className="bg-gray-300 hover:bg-gray-100">Subscribe</Button>
          </div>

          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaPinterestP /></a>
          </div>
        </div>
      </div>

     
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} FurniHome. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
