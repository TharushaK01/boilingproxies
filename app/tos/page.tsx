import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function TermsOfServiceSection() {
  return (
    <section
      id="terms-of-service"
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
      <div className="relative z-10 max-w-4xl mx-auto text-left w-full space-y-8">
        <ScrollReveal yOffset={30} delay={0.1}>
          {/* Header with Diamond Icon */}
          <div className="flex items-center gap-3 mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-[32px] lg:text-[48px] font-semibold tracking-tight text-white">
              Terms of Service
            </h2>
          </div>

          <p className="text-[#c0c0c0] text-sm sm:text-base leading-relaxed font-normal">
            These Terms of Service govern your use of Boiling Proxies and our
            services. By accessing or using our services, you agree to be bound
            by the terms set forth below.
          </p>
        </ScrollReveal>

        {/* Section 1 */}
        <ScrollReveal yOffset={30} delay={0.15}>
          <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
            1. Account Registration
          </h3>
          <p className="text-[#c0c0c0] text-sm sm:text-base leading-relaxed font-normal">
            To use our services, you must register for an account by providing
            accurate and complete information. You are responsible for
            safeguarding your account credentials and any activities conducted
            under your account.
          </p>
        </ScrollReveal>

        {/* Section 2 */}
        <ScrollReveal yOffset={30} delay={0.2}>
          <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
            2. Use of Services
          </h3>
          <p className="text-[#c0c0c0] text-sm sm:text-base leading-relaxed font-normal mb-3">
            You agree to use our services in compliance with all applicable laws
            and regulations. Prohibited activities include, but are not limited
            to:
          </p>
          <ul className="space-y-2.5 text-[#c0c0c0] text-sm sm:text-base leading-relaxed mb-4">
            <li className="flex items-start gap-2.5">
              <span className="text-[#c0c0c0] mt-1 sm:mt-1.5 text-xs">•</span>
              <span>
                Illegal activities (e.g., fraud, unauthorized access to
                systems).
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#c0c0c0] mt-1 sm:mt-1.5 text-xs">•</span>
              <span>
                Using proxies for sending spam, unauthorized web scraping, or
                breaching website terms of service.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#c0c0c0] mt-1 sm:mt-1.5 text-xs">•</span>
              <span>
                Attempting to disrupt or disable our services or others’ access
                to the services.
              </span>
            </li>
          </ul>
          <p className="text-[#c0c0c0] text-sm sm:text-base leading-relaxed font-normal">
            We reserve the right to suspend or terminate your access to the
            services if we detect any violation of these terms or suspicious
            activity.
          </p>
        </ScrollReveal>

        {/* Section 3 */}
        <ScrollReveal yOffset={30} delay={0.25}>
          <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
            3. Service Availability
          </h3>
          <p className="text-[#c0c0c0] text-sm sm:text-base leading-relaxed font-normal">
            We strive to provide consistent and reliable services, but we do not
            guarantee 100% uptime. Service interruptions may occur due to
            maintenance, network outages, or events beyond our control.
          </p>
        </ScrollReveal>

        {/* Section 4 */}
        <ScrollReveal yOffset={30} delay={0.3}>
          <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
            4. Payment and Fees
          </h3>
          <p className="text-[#c0c0c0] text-sm sm:text-base leading-relaxed font-normal">
            Payments must be made at the time of service purchase. You are
            responsible for keeping your payment information up to date. If a
            payment method fails or is declined, we may suspend access to
            services.
          </p>
        </ScrollReveal>

        {/* Section 5 */}
        <ScrollReveal yOffset={30} delay={0.35}>
          <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
            5. Proxy Replacement Policy
          </h3>
          <p className="text-[#c0c0c0] text-sm sm:text-base leading-relaxed font-normal">
            In the event a proxy becomes unusable (e.g., banned by a target
            site), we will offer replacement proxies where possible. This policy
            applies only to verified cases of proxy malfunction and is subject
            to availability. Refunds are not provided.
          </p>
        </ScrollReveal>

        {/* Section 6 */}
        <ScrollReveal yOffset={30} delay={0.4}>
          <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
            6. Limitation of Liability
          </h3>
          <p className="text-[#c0c0c0] text-sm sm:text-base leading-relaxed font-normal mb-3">
            Boiling Proxies is not liable for any direct or indirect damages
            arising from the use or inability to use our services, including but
            not limited to:
          </p>
          <ul className="space-y-2.5 text-[#c0c0c0] text-sm sm:text-base leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="text-[#c0c0c0] mt-1 sm:mt-1.5 text-xs">•</span>
              <span>Data loss.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#c0c0c0] mt-1 sm:mt-1.5 text-xs">•</span>
              <span>Business interruption.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#c0c0c0] mt-1 sm:mt-1.5 text-xs">•</span>
              <span>Service unavailability due to external factors.</span>
            </li>
          </ul>
        </ScrollReveal>

        {/* Section 7 */}
        <ScrollReveal yOffset={30} delay={0.45}>
          <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
            7. Governing Law and Jurisdiction
          </h3>
          <p className="text-[#c0c0c0] text-sm sm:text-base leading-relaxed font-normal">
            These terms are governed by the laws of the Netherlands and the
            European Union. Any disputes arising from the use of our services
            will be subject to the jurisdiction of the courts in the
            Netherlands.
          </p>
        </ScrollReveal>

        {/* Section 8 */}
        <ScrollReveal yOffset={30} delay={0.5}>
          <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
            8. Changes to Terms
          </h3>
          <p className="text-[#c0c0c0] text-sm sm:text-base leading-relaxed font-normal">
            We reserve the right to modify these Terms of Service at any time.
            Any changes will be effective immediately upon posting. It is your
            responsibility to review these terms periodically for any updates.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
