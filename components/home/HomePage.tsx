"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Plus, Minus } from "lucide-react";

const navLinks = [
  { name: "Products", href: "/products" },
  { name: "About Us", href: "/about-us" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact us", href: "/contact" },
];

const brandLogos = [
  { name: "Shopify", src: "/shopify.svg" },
  { name: "Solebox", src: "/solebox.svg" },
  { name: "Snipes", src: "/snipes.svg" },
  { name: "Adidas", src: "/adidas.svg" },
  { name: "Nike", src: "/nike.svg" },
  { name: "Supreme", src: "/supreme.svg" },
  { name: "ASOS", src: "/asos.svg" },
  { name: "ASOS", src: "/ticketmaster.svg" },
];

const featuresData = [
  {
    title: "Global Reach",
    description: "Access residential IPs from over 190+ countries worldwide.",
  },
  {
    title: "Unmatched Security",
    description:
      "Enterprise-grade encryption ensures your data remains private.",
  },
  {
    title: "Fast Performance",
    description: "Ultra-fast response speeds optimized for high-demand tasks.",
  },
  {
    title: "Reliable Uptime",
    description:
      "Guaranteed 99.9% uptime powered by automated failover systems.",
  },
  {
    title: "Instant Provisioning",
    description: "Get instant access to your proxies upon purchase.",
  },
  {
    title: "24/7 Assistance",
    description: "Dedicated technical support team available around the clock.",
  },
];

const pricingPlans = {
  residential: [
    {
      price: "£5.00",
      unit: "/GB",
      name: "Boiling Mini",
      description: "Flexible proxies for light usage.",
      features: ["All location access", "User/Pass auth", "24/7 Support"],
    },
    {
      price: "£7.00",
      unit: "/GB",
      name: "Boiling One",
      description: "High-quality residential proxies.",
      features: ["All location access", "Auto-rotate session", "24/7 Support"],
      popular: true,
    },
  ],
  isp: [
    {
      price: "£15.00",
      unit: "/Mo",
      name: "ISP Starter",
      description: "Static ISP proxies with high authority.",
      features: ["Static Residential IP", "1 Gbps speed", "24/7 Support"],
    },
  ],
  datacenter: [
    {
      price: "£12.00",
      unit: "/Mo",
      name: "DC Starter",
      description: "High-speed datacenter proxies.",
      features: ["Dedicated IPs", "Unlimited bandwidth", "24/7 Support"],
    },
  ],
};

interface Feature {
  iconSrc: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    iconSrc: "/icons/global-reach.svg",
    title: "Global Reach",
    description:
      "Boiling Proxies offers IPs from over 140 countries, enabling you to generate thousands of IPs with just a few clicks.",
  },
  {
    iconSrc: "/icons/security.svg",
    title: "Unmatched Security",
    description:
      "Unbanned IPs that effortlessly bypass Akamai, Datadome, Cloudflare, Captcha, Cequence, and PerimeterX protection.",
  },
  {
    iconSrc: "/icons/fast-performance.svg",
    title: "Fast Performance",
    description:
      "Enjoy unbeatable speeds, expertly optimized by strategically located servers for top performance in every country.",
  },
  {
    iconSrc: "/icons/reliable-uptime.svg",
    title: "Reliable Uptime",
    description:
      "Our systems boast a 99.9% uptime, with a dedicated team on standby 24/7 to resolve any issues before they impact you.",
  },
  {
    iconSrc: "/icons/instant-provisioning.svg",
    title: "Instant Provisioning",
    description:
      "Our automated dashboard system ensures instant proxy delivery after your order, saving valuable time for everyone.",
  },
  {
    iconSrc: "/icons/assistance.svg",
    title: "24/7 Assistance",
    description:
      "Our experienced technical support and sales teams are available 24/7, ready to resolve any issue at any time.",
  },
];

interface DashboardSectionProps {
  imageSrc?: string;
}

interface Plan {
  id: string;
  price?: string;
  unit?: string;
  title: string;
  description: string;
  subDescription?: string;
  features: string[];
}

const residentialPlans: Plan[] = [
  {
    id: "resi",
    price: "€5.00",
    unit: "/GB",
    title: "Boiling Resi",
    description:
      "Premium residential proxies ideal for sneakers, tickets, social media, and more. Data never expires, with fast speeds and low data usage.",
    features: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
  },
  {
    id: "oxy",
    price: "€7.00",
    unit: "/GB",
    title: "Boiling Oxy",
    description:
      "High-quality residential proxies designed for sneakers, scraping, social media, and more. Fast speeds, low data usage, and data that never expires.",
    features: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
  },
  {
    id: "smart",
    price: "€7.00",
    unit: "/GB",
    title: "Boiling Smart",
    description:
      "Smart proxy solution for sneakers, scraping, social media, and more. Never-expiring data with fast speeds and minimal data usage.",
    features: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
  },
  {
    id: "data",
    price: "€6.00",
    unit: "/GB",
    title: "Boiling Data",
    description:
      "Optimal residential proxies for sites with Captcha/Datadome protection. Fast, low data usage, and data that never expires.",
    features: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
  },
  {
    id: "ultra",
    price: "€4.00",
    unit: "/GB",
    title: "Boiling Go",
    description:
      "Top-tier proxies at the best price, perfect for sneakers, tickets, social media, and more. Data never expires, fast speeds, and low data usage.",
    features: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
  },
  {
    id: "max",
    title: "Boiling B2B Enterprise Plan",
    description:
      "Get a proxy plan designed just for you. We offer flexible options and dedicated support to match your specific needs.",
    subDescription:
      "Click on the 'Contact' button below to reach out to us and create a plan that fits perfectly!",
    features: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
  },
];

const ispPlans: Plan[] = [
  {
    id: "isp",
    price: "€2.00",
    unit: "/ISP",
    title: "Boiling ISP's",
    description:
      "High-performance ISP proxies perfect for Nike, Demandware, Ticketmaster, Shopify, Asos, and more. Enjoy 28 days of unlimited usage with auto-renewal. EU-based for the best speed.",
    features: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
  },
];

const datacenterPlans: Plan[] = [
  {
    id: "dc",
    price: "€0.50",
    unit: "/DC",
    title: "Boiling DC's",
    description:
      "Ultra-fast datacenter proxies perfect for Nike, BSTN, Shopify, Asos, and more. Enjoy 28 days of unlimited use with auto-renewal. EU-based for optimal performance.",
    features: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
  },
];

interface Review {
  id: string;
  title: string;
  starsSrc: string;
  date: string;
  comment: string;
  author: string;
}

const reviews: Review[] = [
  {
    id: "1",
    title: "Quality and Support as best",
    starsSrc: "/stars-5.svg",
    date: "7 days ago",
    comment:
      "Absolute performance for individual needs. Cant complain, even if something is wrong, the support is as fast as the product they sell.",
    author: "Don",
  },
  {
    id: "2",
    title: "Very nice proxies",
    starsSrc: "/stars-5.svg",
    date: "6 days ago",
    comment:
      "Very nice proxies. I'm using DE isps, and they work very nicely on every site I need. They are fast and unbanned. Support is very friendly and useful...",
    author: "--- -",
  },
  {
    id: "3",
    title: "Ngl boiling first of all the best...",
    starsSrc: "/stars-5.svg",
    date: "Sep 21, 2024",
    comment:
      "Ngl boiling first of all the best proxie comp and second of all owners are mad chill, just cop ur proxies there.",
    author: "Deine Mom",
  },
  {
    id: "4",
    title: "The best proxy provider there is",
    starsSrc: "/stars-5.svg",
    date: "Sep 21, 2024",
    comment:
      "The best proxy provider there is where customer satisfaction and quality product are number one priority. I could recommend...",
    author: "Niek",
  },
  {
    id: "5",
    title: "Best Proxies on the market",
    starsSrc: "/stars-5.svg",
    date: "Sep 21, 2024",
    comment:
      "I'm using them since 1 year approximatively and never disappointed. Always on top with customers too. I really recommend it !",
    author: "Louis",
  },
  {
    id: "6",
    title: "Experience with Boiling proxies was..",
    starsSrc: "/stars-5.svg",
    date: "Sep 21, 2024",
    comment:
      "Experience with Boiling proxies was simply amazing, tried different types, between DC, ISPs and Resis. They cover litterally every....",
    author: "Gaetano",
  },
];

interface FAQItem {
  id: string;
  question: string;
  answer?: string;
  answerPoints?: string[];
}

const faqData: FAQItem[] = [
  {
    id: "1",
    question: "What are Datacenter, ISP and Residential Proxies?",
    answerPoints: [
      "Datacenter Proxies: Provided by data centers, these proxies are fast and cost-effective but can be easily identified as proxies by websites.",
      "ISP Proxies: These proxies come from Internet Service Providers and offer a balance of speed and reliability, with reduced likelihood of being flagged as proxies.",
      "Residential Proxies: These use IP addresses from real homes, providing high anonymity and reducing the risk of being blocked, making them ideal for tasks requiring genuine IP addresses.",
    ],
  },
  {
    id: "2",
    question: "Can i keep the same proxies every month?",
    answer:
      "Yes! For Boiling Datacenter & ISP Proxies you can keep the same proxies every month by renewing them through your own dashboard! Our Boiling Residential Proxies have no expiry and the same proxies can be used until your data runs out!",
  },
  {
    id: "3",
    question: "What's the minimum amount to buy ISP?",
    answer:
      "The minimum for Boiling Residential Proxies is 1 GB. For Boiling Datacenter Proxies, it’s 25, and for ISP Proxies, it’s 10.",
  },
  {
    id: "4",
    question:
      "How do Boiling Proxies ensure the security and anonymity of my data?",
    answer:
      "We use advanced encryption and privacy measures to protect your data and ensure anonymity.",
  },
  {
    id: "5",
    question: "Can I use your proxies for web scraping and social media?",
    answer:
      "Yes, our Residential proxies are designed for web scraping and social media, providing the reliability and speed needed for large-scale data collection.",
  },
  {
    id: "6",
    question: "How do I set up and use my proxies?",
    answer:
      "We provide detailed setup instructions and support in our discord server to help you configure and use your proxies effectively.",
  },
  {
    id: "7",
    question:
      "What kind of support can I expect if I encounter issues with my proxies?",
    answer:
      "Our dedicated support team is 24/7 available to assist with any issues or questions you may have, ensuring a smooth experience.",
  },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pricingTab, setPricingTab] = useState<
    "residential" | "isp" | "datacenter"
  >("residential");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const duplicatedLogos = [...brandLogos, ...brandLogos];
  const imageSrc = "/dashboard-preview.svg";

  const [activeTab, setActiveTab] = useState<
    "residential" | "isp" | "datacenter"
  >("residential");

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => window.removeEventListener("resize", checkScrollability);
  }, [activeTab]);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.75;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const getActivePlans = () => {
    switch (activeTab) {
      case "residential":
        return residentialPlans;
      case "isp":
        return ispPlans;
      case "datacenter":
        return datacenterPlans;
      default:
        return residentialPlans;
    }
  };

  const currentPlans = getActivePlans();

  const marqueeReviews = [...reviews, ...reviews];

  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };
  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans relative overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[600px] sm:min-h-[80vh] 3xl:min-h-[700px] flex items-center justify-center pt-20 sm:pt-28 pb-12 sm:pb-20 3xl:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#050505]">
        {/* 1. Deep Red Radial Glow Layer */}
        <ScrollReveal yOffset={30}>
          <div
            aria-hidden="true"
            aria-label="Background Red Glow"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[900px] lg:w-[1300px] h-[300px] sm:h-[500px] lg:h-[700px] pointer-events-none z-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(255, 34, 0, 0.5) 0%, rgba(255, 34, 0, 0.2) 50%, rgba(255, 34, 0, 0.05) 70%, transparent 85%)",
              filter: "blur(80px)",
            }}
          />

          {/* 2. Grid Overlay */}
          <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
            <Image
              src="/Line.svg"
              alt="Grid Overlay"
              fill
              className="object-cover opacity-60 mix-blend-screen select-none"
              priority
            />
          </div>

          {/* 3. Hero Content Container */}
          <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
            <ScrollReveal yOffset={40} delay={0.1}>
              <div className="text-[10px] sm:text-16px md:text-sm font-regular text-gray-300 uppercase mb-4 sm:mb-8">
                Unbanned <span className="text-gray-600 px-1 sm:px-2">|</span>{" "}
                Fast <span className="text-gray-600 px-1 sm:px-2">|</span>{" "}
                Efficient <span className="text-gray-600 px-1 sm:px-2">|</span>{" "}
                All-in-One-Platform
              </div>
            </ScrollReveal>

            <ScrollReveal yOffset={40} delay={0.2}>
              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[70px] font-medium tracking-tight bg-gradient-to-r from-white to-white/33 bg-clip-text text-transparent max-w-5xl leading-[1.12] sm:leading-[1.1]">
                Empowering Businesses &amp; <br className="hidden sm:inline" />
                Individuals with Boiling Proxies
              </h1>
            </ScrollReveal>

            <ScrollReveal yOffset={40} delay={0.3}>
              {/* Secondary Subheadline */}
              <h2 className="mt-2 sm:mt-3 text-2xl sm:text-4xl md:text-[46px] lg:text-[53px] font-medium tracking-tight bg-gradient-to-r from-white to-white/33 bg-clip-text text-transparent max-w-5xl leading-[1.15] sm:leading-[1.12]">
                Where{" "}
                <span className="text-[#ff2200] drop-shadow-[0_0_25px_rgba(255,34,0,0.6)] [background-clip:initial] [-webkit-text-fill-color:initial]">
                  Speed &amp; Performance
                </span>{" "}
                is at their best
              </h2>
            </ScrollReveal>

            <ScrollReveal yOffset={40} delay={0.4}>
              <p className="mt-4 sm:mt-6 text-xs sm:text-18px md:text-base text-[#FFFFFF] max-w-lg sm:max-w-xl font-regular leading-relaxed px-2">
                At Boiling Proxies, we deliver unparalleled speed, reliability,
                and security for exceptional performance.
              </p>
            </ScrollReveal>

            <ScrollReveal yOffset={40} delay={0.5}>
              <div className="mt-6 sm:mt-10">
                <Link
                  href="https://dashboard.boilingproxies.com/login"
                  className="group inline-flex items-center justify-center px-8 sm:px-10 py-3 text-xs sm:text-sm font-medium bg-transparent border border-white/20 rounded-full hover:bg-white hover:border-white transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                >
                  <span className="bg-gradient-to-r from-white to-white/33 bg-clip-text text-transparent group-hover:from-[#ff2200] group-hover:to-[#ff2200] group-hover:text-[#ff2200] transition-colors duration-300">
                    Purchase Now
                  </span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-12 border-y border-white/5 text-center overflow-hidden relative bg-[#050505]">
        <ScrollReveal yOffset={40} delay={0.5}>
          {/* Title Header */}
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gray-500 mb-8 font-medium">
            Top supported sites
          </p>

          {/* Side Fade Gradient Overlays for Smooth Edge Transitions */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

          {/* Infinite Scrolling Container (Right to Left) */}
          <div className="flex w-full overflow-hidden">
            <div className="animate-marquee flex items-center gap-10 sm:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
              {duplicatedLogos.map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="relative w-24 sm:w-32 h-8 sm:h-10 flex-shrink-0 flex items-center justify-center"
                >
                  <Image
                    src={brand.src}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>
      {/* WhyDifferentSection */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] text-white overflow-hidden">
        {/* Background Central Glow */}

        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] sm:h-[600px] pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255, 34, 0, 0.12) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section Heading */}
          <ScrollReveal yOffset={40} delay={0.6}>
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <h2 className="text-3xl sm:text-[32px] md:text-5xl font-semibold tracking-tight mb-6 bg-gradient-to-r from-[#ff99a8] via-[#ff5b60] to-[#ff2200] bg-clip-text text-transparent">
                Why Boiling Proxies is Different
              </h2>
              <p className="text-xs sm:text-16px text-[#ffffff] font-regular leading-relaxed">
                Boiling Proxies stands out by providing unmatched speed,
                reliability, and security. Our proxies are built to handle even
                the most demanding tasks, ensuring fast and stable connections.
                We focus on delivering customized solutions for each
                client&apos;s needs, with strong support and minimal downtime.
                This commitment to high performance and security makes Boiling
                Proxies a trusted leader in the industry.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal yOffset={40} delay={0.7}>
            {/* 6-Card Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="relative flex flex-col w-full h-full"
                >
                  {/* Unified 3-Way SVG Accent Lines */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none z-30 overflow-visible"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <defs>
                      {/* Horizontal Gradient Fade (Right) */}
                      <linearGradient
                        id={`grad-right-${index}`}
                        x1="0"
                        y1="0"
                        x2="100%"
                        y2="0"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#ff2200" stopOpacity="1" />
                        <stop
                          offset="50%"
                          stopColor="#ff2200"
                          stopOpacity="0.3"
                        />
                        <stop
                          offset="100%"
                          stopColor="#ff2200"
                          stopOpacity="0"
                        />
                      </linearGradient>

                      {/* Vertical Gradient Fade (Down) */}
                      <linearGradient
                        id={`grad-down-${index}`}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="100%"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#ff2200" stopOpacity="1" />
                        <stop
                          offset="50%"
                          stopColor="#ff2200"
                          stopOpacity="0.3"
                        />
                        <stop
                          offset="100%"
                          stopColor="#ff2200"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>

                    {/* 1. Top Vertical Stem Line */}
                    <line
                      x1="1"
                      y1="0"
                      x2="1"
                      y2="52"
                      stroke="#ff2200"
                      strokeWidth="2"
                    />

                    {/* 2. Horizontal Line (Extending Right across card top) */}
                    <line
                      x1="1"
                      y1="52"
                      x2="100%"
                      y2="52"
                      stroke={`url(#grad-right-${index})`}
                      strokeWidth="2"
                    />

                    {/* 3. Vertical Line (Extending Down along card left edge) */}
                    <line
                      x1="1"
                      y1="52"
                      x2="1"
                      y2="100%"
                      stroke={`url(#grad-down-${index})`}
                      strokeWidth="2"
                    />
                  </svg>

                  {/* Icon Area Above Card */}
                  <div className="relative pl-6 pb-4 pt-1 flex items-center justify-start z-10">
                    <div className="relative w-8 h-8 flex items-center justify-center">
                      <Image
                        src={feature.iconSrc}
                        alt={feature.title}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Main Card Box */}
                  <div className="relative flex-1 w-full bg-[#050505] border border-white/10 rounded-2xl rounded-tl-none p-6 sm:p-8 overflow-hidden transition-all duration-300 hover:border-white/20">
                    {/* Internal Corner Red Glow */}
                    <div
                      className="absolute top-0 left-0 w-40 h-40 pointer-events-none z-0 opacity-50"
                      style={{
                        background:
                          "radial-gradient(circle at 0% 0%, rgba(255, 34, 0, 0.7) 0%, rgba(255, 34, 0, 0.15) 50%, transparent 75%)",
                        filter: "blur(25px)",
                      }}
                    />

                    {/* Card Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl sm:text-24px font-regular text-white tracking-tight mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-16px text-[#999999] font-regular leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal yOffset={40} delay={0.7}>
            {/* Bottom CTA Button */}
            <div className="mt-16 sm:mt-20 text-center">
              <Link
                href="https://dashboard.boilingproxies.com/login"
                className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#ff2200] rounded-full hover:bg-[#e01e00] transition-all duration-300 shadow-[0_0_25px_rgba(255,34,0,0.5)] hover:shadow-[0_0_35px_rgba(255,34,0,0.7)]"
              >
                Purchase now
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* User Friendly Dashboard */}
      <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#050505] text-white overflow-hidden">
        {/* Background Radial Glow */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] sm:w-[700px] lg:w-[900px] h-[400px] sm:h-[600px] pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255, 34, 0, 0.18) 0%, transparent 70%)",
            filter: "blur(110px)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Column: Slides in from the Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-5/12 text-left"
          >
            <h2 className="text-3xl sm:text-16px lg:text-5xl font-regular tracking-tight mb-6 bg-gradient-to-r from-[#ff99a8] via-[#ff5b60] to-[#ff2200] bg-clip-text text-transparent leading-[1.15]">
              User Friendly Dashboard
            </h2>

            <p className="text-sm sm:text-16px text-[#ffffff] font-normal leading-relaxed mb-8 max-w-lg">
              Our comprehensive dashboard provides a seamless experience for
              managing your proxies. Easily navigate through various features
              designed to optimize your usage and efficiency.
            </p>

            <div>
              <Link
                href="https://dashboard.boilingproxies.com/login"
                className="group inline-flex items-center justify-center px-8 sm:px-10 py-3 text-xs sm:text-sm font-medium bg-transparent border border-white/20 rounded-full hover:bg-white/5 hover:border-white/40 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent transition-colors duration-300 group-hover:from-white group-hover:to-white">
                  Get Started
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Slides in from the Right */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-7/12 relative"
          >
            <div className="relative w-full rounded-2xl overflow-hidden bg-[#070707] p-2 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-300 hover:border-white/20">
              {/* Top border highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] via-white/20 to-transparent z-10" />

              <div className="relative w-full aspect-[16/10] flex items-center justify-center">
                <Image
                  src={imageSrc}
                  alt="User Friendly Dashboard Preview"
                  fill
                  priority
                  className="object-contain p-1"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section
        id="products"
        className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#050505] text-white overflow-hidden scroll-mt-20"
      >
        {/* Central Title Header */}
        <ScrollReveal yOffset={40} delay={0.4}>
          <div className="text-center max-w-5xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-[32px] lg:text-5xl font-semibold tracking-tight mb-6 bg-gradient-to-r from-[#ff99a8] via-[#ff5b60] to-[#ff2200] bg-clip-text text-transparent leading-tight">
              Affordable Plans Tailored to Your Usage
            </h2>
            <p className="text-xs sm:text-[16px] text-[#FFFFFF] font-normal leading-relaxed max-w-7xl mx-auto">
              Boiling Residential Proxies are the best in speed, reliability,
              and security, making them perfect for sneaker sites, ticketing,
              social media, scraping, and much more! Our high-performance
              proxies ensure seamless access and top-tier performance across a
              wide range of platforms.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal yOffset={40} delay={0.5}>
          {/* Tab Switcher Pills */}
          <div className="flex justify-center mb-12 sm:mb-16">
            <div className="inline-flex items-center bg-[#0d0d0d] border border-white/10 rounded-full p-1.5 shadow-inner">
              <button
                onClick={() => setActiveTab("residential")}
                className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeTab === "residential"
                    ? "bg-[#ff2200] text-white shadow-[0_0_15px_rgba(255,34,0,0.5)]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Residential Proxies
              </button>
              <button
                onClick={() => setActiveTab("isp")}
                className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeTab === "isp"
                    ? "bg-[#ff2200] text-white shadow-[0_0_15px_rgba(255,34,0,0.5)]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                ISP Proxies
              </button>
              <button
                onClick={() => setActiveTab("datacenter")}
                className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeTab === "datacenter"
                    ? "bg-[#ff2200] text-white shadow-[0_0_15px_rgba(255,34,0,0.5)]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Datacenter Proxies
              </button>
            </div>
          </div>

          {/* Pricing Cards Container with Arrow Controls */}
          <div className="relative max-w-7xl mx-auto px-2 sm:px-8">
            {/* Left Arrow Button */}
            {activeTab === "residential" && canScrollLeft && (
              <button
                onClick={() => handleScroll("left")}
                aria-label="Scroll left"
                className="absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-[#121212] border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#ff2200] hover:border-[#ff2200] transition-all duration-300 shadow-xl"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}

            {/* Right Arrow Button */}
            {activeTab === "residential" && canScrollRight && (
              <button
                onClick={() => handleScroll("right")}
                aria-label="Scroll right"
                className="absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-[#121212] border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#ff2200] hover:border-[#ff2200] transition-all duration-300 shadow-xl"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}

            {/* Horizontal Scrollable Grid Shell */}
            <div
              ref={scrollContainerRef}
              onScroll={checkScrollability}
              className={`flex overflow-x-auto scrollbar-none snap-x snap-mandatory gap-0 rounded-3xl border border-white/10 bg-[#0d0d0d] transition-all duration-500 ${
                currentPlans.length === 1 ? "max-w-md mx-auto" : "w-full"
              }`}
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {currentPlans.map((plan, index) => {
                const isEnterprise = plan.id === "max";

                return (
                  <div
                    key={plan.id}
                    className={`snap-start flex-none w-full sm:w-1/2 ${
                      currentPlans.length === 1 ? "lg:w-full" : "lg:w-1/4"
                    } p-6 sm:p-8 flex flex-col justify-between ${
                      index !== currentPlans.length - 1
                        ? "border-b lg:border-b-0 lg:border-r border-white/10"
                        : ""
                    }`}
                  >
                    <div>
                      {isEnterprise ? (
                        <div className="mb-6">
                          <h3 className="text-2xl sm:text-[27px] font-regular text-[#FD0318] leading-tight tracking-tight">
                            Boiling B2B <br /> Enterprise Plan
                          </h3>
                        </div>
                      ) : (
                        <>
                          <span className="text-[11px] text-[#848199] font-medium block mb-1">
                            Starting at
                          </span>
                          <div className="flex items-baseline mb-6">
                            <span className="text-3xl sm:text-[36px] font-regular text-[#FD0318] tracking-tight">
                              {plan.price}
                            </span>
                            <span className="text-[17px] text-[#848199] font-regular ml-1">
                              {plan.unit}
                            </span>
                          </div>

                          <h3 className="text-xl sm:text-[27px] font-regular text-[#FD0318] mb-4">
                            {plan.title}
                          </h3>
                        </>
                      )}

                      <p className="text-xs sm:text-[15px] text-[#ffffff] leading-relaxed mb-4 font-normal">
                        {plan.description}
                      </p>

                      {isEnterprise && plan.subDescription && (
                        <p className="text-[12px] text-gray-500 leading-relaxed mb-6 font-normal">
                          {plan.subDescription}
                        </p>
                      )}

                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-xs sm:text-[15px] text-[#B8B8B8]"
                          >
                            <Check className="w-4 h-4 text-[#ff2200] mr-2.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <Link
                        href={
                          isEnterprise
                            ? "https://dashboard.boilingproxies.com/login"
                            : "https://dashboard.boilingproxies.com/login"
                        }
                        className="group w-full inline-flex items-center justify-center py-2.5 sm:py-3 px-6 text-xs sm:text-sm font-medium border border-white/20 rounded-full hover:border-white/50 hover:bg-white/5 transition-all duration-300"
                      >
                        <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent transition-all duration-300 group-hover:from-white group-hover:to-white">
                          {isEnterprise ? "Contact" : "Purchase now"}
                        </span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal yOffset={40} delay={0.6}>
          {/* Payment Provider Badges Footer */}
          <div className="mt-16 sm:mt-20 flex flex-wrap items-center justify-center gap-6 sm:gap-8 opacity-70 hover:opacity-100 transition-opacity duration-300">
            <div className="relative h-6 sm:h-7 w-auto min-w-[32px] flex items-center justify-center">
              <Image
                src="/payments/ssl.png"
                alt="SSL Secure"
                width={40}
                height={28}
                className="object-contain h-full w-auto"
              />
            </div>

            <div className="relative h-6 sm:h-7 w-auto min-w-[32px] flex items-center justify-center">
              <Image
                src="/payments/visa.png"
                alt="Visa"
                width={45}
                height={28}
                className="object-contain h-full w-auto"
              />
            </div>

            <div className="relative h-6 sm:h-7 w-auto min-w-[32px] flex items-center justify-center">
              <Image
                src="/payments/amex.png"
                alt="American Express"
                width={40}
                height={28}
                className="object-contain h-full w-auto"
              />
            </div>

            <div className="relative h-6 sm:h-7 w-auto min-w-[32px] flex items-center justify-center">
              <Image
                src="/payments/mastercard.png"
                alt="Mastercard"
                width={40}
                height={28}
                className="object-contain h-full w-auto"
              />
            </div>

            <div className="relative h-6 sm:h-7 w-auto min-w-[32px] flex items-center justify-center">
              <Image
                src="/payments/stripe.png"
                alt="Stripe"
                width={45}
                height={28}
                className="object-contain h-full w-auto"
              />
            </div>

            <div className="relative h-6 sm:h-7 w-auto min-w-[32px] flex items-center justify-center">
              <Image
                src="/payments/bitcoin.png"
                alt="Bitcoin"
                width={35}
                height={28}
                className="object-contain h-full w-auto"
              />
            </div>

            <div className="relative h-6 sm:h-7 w-auto min-w-[32px] flex items-center justify-center">
              <Image
                src="/payments/gpay.png"
                alt="Google Pay"
                width={45}
                height={28}
                className="object-contain h-full w-auto"
              />
            </div>

            <div className="relative h-6 sm:h-7 w-auto min-w-[32px] flex items-center justify-center">
              <Image
                src="/payments/applepay.png"
                alt="Apple Pay"
                width={45}
                height={28}
                className="object-contain h-full w-auto"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>
      {/* review */}
      <section className="relative py-20 lg:py-28 bg-[#050505] text-white overflow-hidden">
        {/* Brighter Red Ambient Glow directly behind cards */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] sm:w-[1400px] h-[350px] sm:h-[450px] pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255, 20, 0, 0.45) 0%, rgba(200, 10, 0, 0.2) 50%, transparent 75%)",
            filter: "blur(90px)",
          }}
        />
        <ScrollReveal yOffset={40} delay={0.4}>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 text-center">
            {/* Section Heading */}
            <h2 className="text-3xl sm:text-[32px] lg:text-5xl font-semibold tracking-tight mb-4 bg-gradient-to-r from-[#ff99a8] via-[#ff5b60] to-[#ff2200] bg-clip-text text-transparent">
              What customers say about us
            </h2>
            <p className="text-xs sm:text-[16px] text-[#FFFFFF] font-regular max-w-lg mx-auto">
              We do our best to provide you the best experience ever
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal yOffset={40} delay={0.5}>
          {/* Infinite Horizontal Auto-Scroll Track */}
          <div className="relative z-10 w-full overflow-hidden py-4">
            <div className="flex w-max animate-marquee space-x-4 sm:space-x-6">
              {marqueeReviews.map((review, index) => (
                <div
                  key={`${review.id}-${index}`}
                  className="flex-none w-[280px] sm:w-[320px] lg:w-[340px] bg-[#0d0d0d] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-white/30 transition-all duration-300 shadow-2xl"
                >
                  <div>
                    {/* Quote Icon Header (.svg) */}
                    <div className="mb-4">
                      <Image
                        src="/quote-icon.svg"
                        alt="Quote Icon"
                        width={32}
                        height={24}
                        className="object-contain"
                      />
                    </div>

                    {/* Review Title */}
                    <h3 className="text-base sm:text-[18px] font-semibold text-white mb-4 line-clamp-2 leading-snug">
                      {review.title}
                    </h3>

                    {/* 5-Star Badge (.svg) & Date Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <Image
                        src={review.starsSrc}
                        alt="5 Stars Rating"
                        width={96}
                        height={18}
                        className="object-contain"
                      />
                      <span className="text-[11px] text-gray-400 font-normal">
                        {review.date}
                      </span>
                    </div>

                    {/* Comment Body */}
                    <p className="text-xs sm:text-sm text-gray-300 font-normal leading-relaxed mb-6 line-clamp-5">
                      {review.comment}
                    </p>
                  </div>

                  {/* Author Footer */}
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs sm:text-sm font-semibold text-gray-200">
                      {review.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
        {/* CSS Animation for Infinite Right-to-Left Auto Scroll */}
        <style jsx global>{`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            animation: marquee 35s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>
      {/* FAQ SECTION */}
      <section
        id="faqs"
        className="relative py-20 lg:py-32 bg-[#050505] text-white overflow-hidden"
      >
        {/* Red Ambient Glow at the Bottom */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1200px] h-[250px] sm:h-[400px] pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(ellipse at bottom, rgba(255, 34, 0, 0.35) 0%, rgba(200, 10, 0, 0.15) 50%, transparent 80%)",
            filter: "blur(100px)",
          }}
        />
        <ScrollReveal yOffset={40} delay={0.4}>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Heading Header */}
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-[32px] lg:text-5xl font-semibold tracking-tight mb-4 bg-gradient-to-r from-[#ff99a8] via-[#ff5b60] to-[#ff2200] bg-clip-text text-transparent">
                Frequently asked questions
              </h2>
              <p className="text-xs sm:text-[18px] text-[#FFFFFF] font-normal">
                Everything you need to know about the product and billing.
              </p>
            </div>

            {/* FAQ Accordion Items */}
            <div className="divide-y divide-white/10 border-t border-b border-white/10">
              {faqData.map((item) => {
                const isOpen = openId === item.id;

                return (
                  <div key={item.id} className="py-5 sm:py-6 transition-colors">
                    <button
                      onClick={() => toggleFAQ(item.id)}
                      className="w-full flex items-center justify-between text-left group gap-4 focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm sm:text-base font-medium text-gray-200 group-hover:text-white transition-colors duration-200 pr-2">
                        {item.question}
                      </span>

                      {/* Red Toggle Plus/Minus Icon */}
                      <span className="flex-shrink-0 text-[#ff2200] transition-transform duration-300">
                        {isOpen ? (
                          <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
                        ) : (
                          <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                        )}
                      </span>
                    </button>

                    {/* Collapsible Answer Content */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 mt-3 sm:mt-4"
                          : "grid-rows-[0fr] opacity-0 mt-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        {item.answerPoints ? (
                          /* 3-Point List with Red Dots */
                          <ul className="space-y-2.5 pr-6">
                            {item.answerPoints.map((point, index) => (
                              <li
                                key={index}
                                className="flex items-start text-xs sm:text-sm text-gray-400 leading-relaxed font-normal"
                              >
                                <span className="text-[#ff2200] mr-2 text-base leading-none select-none">
                                  •
                                </span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          /* Single Paragraph Answer with Red Dot */
                          <div className="flex items-start text-xs sm:text-sm text-gray-400 leading-relaxed font-normal pr-6">
                            <span className="text-[#ff2200] mr-2 text-base leading-none select-none">
                              •
                            </span>
                            <p>{item.answer}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
