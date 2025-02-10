import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-3">
          <h2 className="font-semibold text-xl mb-4">Exclusive</h2>
          <ul className="space-y-2">
            <li>Subscribe</li>
            <li>Get 10% off your first order</li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="font-semibold text-xl mb-4">Support</h2>
          <ul className="space-y-2">
            <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="font-semibold text-xl mb-4">Account</h2>
          <ul className="space-y-2">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="font-semibold text-xl mb-4">Quick Link</h2>
          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="font-semibold text-xl mb-4">Social Accounts</h2>
          <ul className="flex space-x-4">
            <li>
              <FaFacebookSquare />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaSquareInstagram />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
