"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

interface NavItem {
  name: string;
  isSection: boolean;
  target: string;
}

const navLinks: NavItem[] = [
  { name: "Products", isSection: true, target: "products" },
  { name: "About Us", isSection: false, target: "/about" },
  { name: "FAQs", isSection: true, target: "faqs" },
  { name: "Contact us", isSection: false, target: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem,
  ) => {
    setMobileMenuOpen(false);

    // Handles Section Scrolling (Products & FAQs)
    if (item.isSection) {
      e.preventDefault();

      if (pathname === "/") {
        // If already on homepage, scroll smoothly and keep URL clean
        const element = document.getElementById(item.target);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", "/");
        }
      } else {
        // If on another page (/about, /contact), navigate home first then scroll
        router.push("/");
        setTimeout(() => {
          const element = document.getElementById(item.target);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            window.history.pushState(null, "", "/");
          }
        }, 300);
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-6 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Outer Floating Pill Navbar */}
      <nav className="relative flex items-center justify-between h-14 px-4 sm:px-6 rounded-full backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300">
        {/* Left: Brand Logo / Title */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-6 h-6 flex items-center justify-center mb-2">
            <Image
              src="/logo.svg"
              alt="Boiling Proxies Logo"
              width={21}
              height={21}
              className="object-contain"
              priority
              onError={(e) => {
                const target = e.target as HTMLElement;
                target.style.display = "none";
              }}
            />
          </div>
          <span className="text-white font-regular text-[12px] tracking-wide group-hover:text-gray-200 transition-colors">
            Boiling{" "}
            <span className="text-[#ff2200] font-regular text-[12px]">
              Proxies
            </span>
          </span>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.isSection ? `/#${link.target}` : link.target}
              onClick={(e) => handleNavClick(e, link)}
              className="text-gray-300 text-sm font-medium hover:text-white transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Login Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="https://dashboard.boilingproxies.com/login"
            className="px-6 py-1.5 text-sm font-medium text-white bg-transparent border border-white/20 rounded-full hover:bg-white hover:text-[#ff2200] hover:border-white transition-all duration-300 shadow-sm"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-5 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.isSection ? `/#${link.target}` : link.target}
                onClick={(e) => handleNavClick(e, link)}
                className="text-gray-300 text-sm font-medium py-1.5 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10">
            <Link
              href="https://dashboard.boilingproxies.com/login"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-2.5 text-sm font-medium text-white border border-white/20 rounded-full hover:bg-white hover:text-[#ff2200] transition-all duration-300"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
