import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#050505] text-white scroll-mt-20"
    >
      {/* 1. Deep Red Radial Glow Layer */}
      <div
        aria-hidden="true"
        aria-label="Background Red Glow"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] lg:w-[1300px] h-[500px] sm:h-[500px] lg:h-[700px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255, 34, 0, 0.35) 0%, rgba(255, 34, 0, 0.15) 45%, rgba(255, 34, 0, 0.03) 70%, transparent 85%)",
          filter: "blur(90px)",
        }}
      />

      {/* 2. Grid Overlay Image */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <Image
          src="/Line.svg"
          alt="Grid Overlay"
          fill
          className="object-cover opacity-60 mix-blend-screen select-none"
          priority
        />
      </div>

      {/* 3. Main Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-left w-full">
        <ScrollReveal yOffset={30} delay={0.1}>
          {/* Header with Diamond Icon */}
          <div className="flex items-center gap-3 mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-[32px] lg:text-[48px] font-semibold tracking-tight text-white">
              Contact us
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal yOffset={30} delay={0.2}>
          {/* Intro Paragraph */}
          <p className="text-[#c0c0c0] text-sm sm:text-base leading-relaxed mb-8 font-normal">
            At Boiling Proxies, we are available 24/7 to assist you with any
            questions, concerns, or support needs. Whether you're looking for
            more information about our services, need technical assistance, or
            have any other inquiries, we're here to help.
          </p>
        </ScrollReveal>

        <ScrollReveal yOffset={30} delay={0.3}>
          {/* Section 1: Get in Touch */}
          <h3 className="text-base sm:text-lg font-semibold text-white mb-4">
            Get in Touch
          </h3>

          <p className="text-[#c0c0c0] text-sm sm:text-base leading-relaxed mb-4 font-normal">
            Email: For general inquiries or support, reach out to us at{" "}
            <a
              href="mailto:info@boilingproxies.com"
              className="text-[#2b6cb0] hover:text-[#3182ce] underline transition-colors"
            >
              info@boilingproxies.com
            </a>
            . We strive to respond to all emails as quickly as possible.
          </p>

          <p className="text-[#c0c0c0] text-sm sm:text-base leading-relaxed mb-8 font-normal">
            Discord Support: For immediate assistance, open a support ticket in
            our Discord server. Join our community via this{" "}
            <Link
              href="https://discord.com/invite/vQT8Y7ztNf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2b6cb0] hover:text-[#3182ce] underline transition-colors"
            >
              invite link
            </Link>{" "}
            and get real-time help from our dedicated team.
          </p>
        </ScrollReveal>

        <ScrollReveal yOffset={30} delay={0.4}>
          {/* Section 2: Social Media */}
          <h3 className="text-base sm:text-lg font-semibold text-white mb-4">
            Social Media
          </h3>

          <p className="text-[#c0c0c0] text-sm sm:text-base leading-relaxed mb-4 font-normal">
            Stay updated with the latest news, offers, and proxy-related
            insights through our official X (formerly Twitter) account:
          </p>

          <ul className="space-y-3 mb-8 text-[#c0c0c0] text-sm sm:text-base leading-relaxed">
            <li className="flex items-center gap-2.5">
              <span className="text-[#c0c0c0] text-xs">•</span>
              <span>
                X:{" "}
                <Link
                  href="https://x.com/boilingproxies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2b6cb0] hover:text-[#3182ce] underline transition-colors"
                >
                  @boilingproxies
                </Link>
              </span>
            </li>
          </ul>
        </ScrollReveal>

        <ScrollReveal yOffset={30} delay={0.5}>
          {/* Closing Statement */}
          <p className="text-[#c0c0c0] text-sm sm:text-base leading-relaxed font-normal">
            We look forward to assisting you and providing top-quality proxy
            solutions tailored to your needs.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
