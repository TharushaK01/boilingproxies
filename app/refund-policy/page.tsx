import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function RefundPolicySection() {
  return (
    <section
      id="refund-policy"
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
              Refund Policy
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal yOffset={30} delay={0.2}>
          {/* Intro Paragraph */}
          <p className="text-[#c0c0c0] text-sm sm:text-base leading-relaxed mb-6 font-normal">
            At Boiling Proxies, we provide premium proxy services to meet our
            clients' needs. Given the digital nature of our product, we operate
            under a strict no refund policy once the proxies have been delivered
            or accessed. However, we understand that certain circumstances, such
            as proxies being banned or blocked, can impact the service. In such
            cases, we are committed to finding alternatives and replacing the
            affected proxies at no additional cost, subject to availability.
            Refunds will not be issued in the following cases:
          </p>
        </ScrollReveal>

        <ScrollReveal yOffset={30} delay={0.3}>
          {/* Exceptions Bullet List */}
          <ul className="space-y-3 mb-8 text-[#c0c0c0] text-sm sm:text-base leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="text-[#c0c0c0] mt-1 sm:mt-1.5 text-xs">•</span>
              <span>Dissatisfaction with the service after delivery.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#c0c0c0] mt-1 sm:mt-1.5 text-xs">•</span>
              <span>Misuse or violation of our Terms of Service.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#c0c0c0] mt-1 sm:mt-1.5 text-xs">•</span>
              <span>Expiry of proxy services due to customer non-use.</span>
            </li>
          </ul>
        </ScrollReveal>

        <ScrollReveal yOffset={30} delay={0.4}>
          {/* Contact Support Statement */}
          <p className="text-[#c0c0c0] text-sm sm:text-base leading-relaxed font-normal">
            For any issues related to proxy functionality or requests for
            replacement, please contact us at{" "}
            <a
              href="mailto:boilingproxies@gmail.com"
              className="text-[#2b6cb0] hover:text-[#3182ce] underline transition-colors"
            >
              boilingproxies@gmail.com
            </a>
            . Our team is committed to resolving such issues promptly.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
