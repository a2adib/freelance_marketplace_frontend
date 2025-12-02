import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <aside className="col-span-full md:col-span-1 lg:col-span-1 text-center md:text-left">
        <Link to="/" className="text-2xl font-bold">SkillSwap</Link>
        <p className="mt-2">
          Your local skill exchange platform.
          <br />
          Learn, share, and grow with your community.
        </p>
      </aside>
      <nav className="text-center md:text-left">
        <h6 className="footer-title">Contact</h6>
        <a className="link link-hover block">contact@skillswap.com</a>
        <a className="link link-hover block">+1 (123) 456-7890</a>
        <a className="link link-hover block">123 Skill Swap Lane, Community City</a>
      </nav>
      <nav className="text-center md:text-left">
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover block">Terms of use</a>
        <a className="link link-hover block">Privacy policy</a>
      </nav>
      <nav className="text-center md:text-left">
        <h6 className="footer-title">Follow Us</h6>
        <div className="flex justify-center md:justify-start gap-4 mt-2">
          <a target="_blank" rel="noopener noreferrer" className="link link-hover">
            <FaTwitter size={24} />
          </a>
          <a target="_blank" rel="noopener noreferrer" className="link link-hover">
            <FaFacebook size={24} />
          </a>
          <a target="_blank" rel="noopener noreferrer" className="link link-hover">
            <FaInstagram size={24} />
          </a>
          <a target="_blank" rel="noopener noreferrer" className="link link-hover">
            <FaLinkedin size={24} />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
