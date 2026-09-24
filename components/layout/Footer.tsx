"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function Footer() {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log("Subscribed:", email);
    setEmail("");
  };

  // Smooth scroll handler that strips the hash fragment from the URL bar
  const handleSectionClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();

    if (pathname === "/") {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", "/");
      }
    } else {
      router.push("/");
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", "/");
        }
      }, 300);
    }
  };

  return (
    <footer className="bg-[#0e0e0e] text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          {/* Left Column: Brand & Newsletter (Spans 5 cols on desktop) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src="/logo.svg"
                alt="Boiling Proxies Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="font-regular text-[14px] tracking-tight mt-2">
                Boiling <span className="text-[#ff2200]">Proxies</span>
              </span>
            </Link>

            {/* Main Title */}
            <h3 className="text-2xl sm:text-[24px] font-medium tracking-tight">
              <span className="text-[#ff2200]"> Stay Connected </span>
              <span className="text-gray-300">with</span>
              <br />
              Boiling <span className="text-[#ff2200]">Proxies</span>
            </h3>

            {/* Subtext */}
            <p className="text-xs sm:text-[12px] text-[#FFFFFF] leading-relaxed max-w-md font-normal">
              At Boiling Proxies, we're committed to providing top-tier proxy
              solutions and exceptional support, ensuring you have everything
              you need for seamless and secure online activities.
            </p>

            {/* Newsletter Subscription Box */}
            <form onSubmit={handleSubscribe} className="pt-2">
              <div className="flex items-center bg-[#141414] border border-white/10 rounded-full p-1.5 max-w-md focus-within:border-white/30 transition-all duration-300">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address here"
                  required
                  className="w-full bg-transparent px-4 py-2 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex-shrink-0 bg-[#ff2200] hover:bg-[#e01e00] text-white font-medium text-xs sm:text-sm px-5 py-2 sm:py-2.5 rounded-full transition-colors duration-200 cursor-pointer"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          {/* Right Columns Container (Spans 7 cols on desktop) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:pt-2">
            {/* Links Column */}
            <div>
              <h4 className="text-[18px] font-semibold text-white mb-4 tracking-wide">
                Links
              </h4>
              <ul className="space-y-3 text-xs sm:text-[16px] text-[#999999]">
                <li>
                  <Link
                    href="/"
                    onClick={(e) => handleSectionClick(e, "products")}
                    className="hover:text-white transition-colors duration-200"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors duration-200"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    onClick={(e) => handleSectionClick(e, "faqs")}
                    className="hover:text-white transition-colors duration-200"
                  >
                    FAQS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="text-[18px] font-semibold text-white mb-4 tracking-wide">
                Legal
              </h4>
              <ul className="space-y-3 text-xs sm:text-[16px] text-[#999999]">
                <li>
                  <Link
                    href="/imprint"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Imprint
                  </Link>
                </li>
                <li>
                  <Link
                    href="/refund-policy"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tos"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Socials Column */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-[18px] font-semibold text-white mb-4 tracking-wide">
                Socials
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://x.com/boilingproxies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="X (Twitter)"
                >
                  <Image
                    src="/socials/twitter.svg"
                    alt="X / Twitter"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full"
                  />
                </a>
                <a
                  href="https://discord.com/invite/vQT8Y7ztNf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Discord"
                >
                  <Image
                    src="/socials/discord.svg"
                    alt="Discord"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full"
                  />
                </a>
                <a
                  href="https://web.facebook.com/BoilingProxies/?_rdc=1&_rdr#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Facebook"
                >
                  <Image
                    src="/socials/facebook.svg"
                    alt="Facebook"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full"
                  />
                </a>
                <a
                  href="https://www.instagram.com/boilingproxies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Instagram"
                >
                  <Image
                    src="/socials/instagram.svg"
                    alt="Instagram"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/boiling-proxies-05188b313"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <Image
                    src="/socials/linkedin.svg"
                    alt="LinkedIn"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line & Copyright */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-[11px] sm:text-xs text-gray-500 font-normal">
            © Copyright {new Date().getFullYear()} Boiling Proxies. All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
