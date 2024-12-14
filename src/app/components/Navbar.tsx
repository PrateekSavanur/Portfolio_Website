"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/contact", label: "Contact Me" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#0F172A] shadow-lg">
      <div className="mx-auto flex items-center justify-between py-4 px-6">
        {/* Brand */}
        <div className="text-3xl font-bold text-[#E2E8F0] hover:text-[#7DD3FC] transition-colors duration-300">
          <Link href="/">Prateek</Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={`${
                pathname === link.href
                  ? "text-[#7DD3FC] font-semibold"
                  : "text-[#94A3B8] hover:text-[#7DD3FC]"
              } relative group`}
            >
              <Link href={link.href}>{link.label}</Link>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#7DD3FC] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Menu */}
        <button
          className="block md:hidden text-[#E2E8F0] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-[#1E293B] text-[#E2E8F0] w-64 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <button
          className="text-[#7DD3FC] absolute top-4 right-4 focus:outline-none"
          onClick={() => setIsOpen(false)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <ul className="flex flex-col items-start space-y-6 p-6 mt-16">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={`${
                pathname === link.href
                  ? "text-[#7DD3FC] font-semibold"
                  : "hover:text-[#7DD3FC]"
              }`}
            >
              <Link href={link.href} onClick={handleLinkClick}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
