import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function PrivacyPolicySection() {
  return (
    <section
      id="privacy-policy"
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
              Privacy Policy
            </h2>
          </div>

          <p className="text-[#c0c0c0] text-sm sm:text-base leading-relaxed font-normal">
            Boiling Proxies is dedicated to complying with the General Data
            Protection Regulation (GDPR) and other relevant data protection
            laws. This Privacy Policy outlines how we collect, use, and protect
            your personal data when you use our services.
          </p>
        </ScrollReveal>

        {/* Section 1 */}
        <ScrollReveal yOffset={30} delay={0.15}>
          <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
            1. Information We Collect
          </h3>
          <p className="text-[#c0c0c0] text-sm sm:text-base leading-relaxed font-normal mb-3">
            We collect the following types of data:
          </p>
          <ul className="space-y-2.5 text-[#c0c0c0] text-sm sm:text-base leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="text-[#c0c0c0] mt-1 sm:mt-1.5 text-xs">•</span>
              <span>
                <strong className="text-white font-medium">
                  Personal Information:
                </strong>{" "}
                Name, email address, billing information, and any data provided
                during registration or purchase.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#c0c0c0] mt-1 sm:mt-1.5 text-xs">•</span>
              <span>
                <strong className="text-white font-medium">Usage Data:</strong>{" "}
                IP address, browser type, device information, and browsing
                activity on our site.
              </span>
            </li>
          </ul>
        </ScrollReveal>

        {/* Section 2 */}
        <ScrollReveal yOffset={30} delay={0.2}>
          <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
            2. Purpose of Data Collection
          </h3>
          <p className="text-[#c0c0c0] text-sm sm:text-base leading-relaxed font-normal mb-3">
            We use your personal data for:
          </p>
          <ul className="space-y-2.5 text-[#c0c0c0] text-sm sm:text-base leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="text-[#c0c0c0] mt-1 sm:mt-1.5 text-xs">•</span>
              <span>Providing and managing our services.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#c0c0c0] mt-1 sm:mt-1.5 text-xs">•</span>
              <span>Processing transactions and ensuring secure payments.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#c0c0c0] mt-1 sm:mt-1.5 text-xs">•</span>
              <span>
                Improving our website and services based on user behavior and
                feedback.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#c0c0c0] mt-1 sm:mt-1.5 text-xs">•</span>
              <span>
                Communicating service updates, promotions, or issues related to
                your account.
              </span>
            </li>
          </ul>
        </ScrollReveal>

        {/* Section 3 */}
        <ScrollReveal yOffset={30} delay={0.25}>
          <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
            3. Legal Basis for Processing
          </h3>
          <p className="text-[#c0c0c0] text-sm sm:text-base leading-relaxed font-normal mb-3">
            We process your personal data based on the following legal grounds
            under the GDPR:
          </p>
          <ul className="space-y-2.5 text-[#c0c0c0] text-sm sm:text-base leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="text-[#c0c0c0] mt-1 sm:mt-1.5 text-xs">•</span>
              <span>
                <strong className="text-white font-medium">
                  Contractual necessity:
                </strong>{" "}
                To fulfill our contractual obligations in providing services.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#c0c0c0] mt-1 sm:mt-1.5 text-xs">•</span>
              <span>
                <strong className="text-white font-medium">Consent:</strong> For
                marketing communications or any data processing that requires
                explicit consent.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#c0c0c0] mt-1 sm:mt-1.5 text-xs">•</span>
              <span>
                <strong className="text-white font-medium">
                  Legitimate interest:
                </strong>{" "}
                For improving services, fraud prevention, and legal compliance.
              </span>
            </li>
          </ul>
        </ScrollReveal>

        {/* Section 4 */}
        <ScrollReveal yOffset={30} delay={0.3}>
          <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
            4. Data Retention
          </h3>
          <p className="text-[#c0c0c0] text-sm sm:text-base leading-relaxed font-normal">
            We retain your personal data for as long as necessary to provide
            services or comply with legal obligations. You may request data
            deletion at any time by contacting{" "}
            <a
              href="mailto:privacy@boilingproxies.com"
              className="text-[#2b6cb0] hover:text-[#3182ce] underline transition-colors"
            >
              privacy@boilingproxies.com
            </a>
            .
          </p>
        </ScrollReveal>

        {/* Section 5 */}
        <ScrollReveal yOffset={30} delay={0.35}>
          <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
            5. Data Protection and Security
          </h3>
          <p className="text-[#c0c0c0] text-sm sm:text-base leading-relaxed font-normal">
            We apply strict security measures to protect your personal data
            against unauthorized access, disclosure, alteration, or destruction.
            However, no system can be completely secure, and we cannot guarantee
            absolute security.
          </p>
        </ScrollReveal>

        {/* Section 6 */}
        <ScrollReveal yOffset={30} delay={0.4}>
          <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
            6. Your Rights (Under GDPR)
          </h3>
          <p className="text-[#c0c0c0] text-sm sm:text-base leading-relaxed font-normal mb-3">
            As a data subject, you have the following rights:
          </p>
          <ul className="space-y-2.5 text-[#c0c0c0] text-sm sm:text-base leading-relaxed mb-4">
            <li className="flex items-start gap-2.5">
              <span className="text-[#c0c0c0] mt-1 sm:mt-1.5 text-xs">•</span>
              <span>
                <strong className="text-white font-medium">Access:</strong>{" "}
                Request a copy of the personal data we hold about you.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#c0c0c0] mt-1 sm:mt-1.5 text-xs">•</span>
              <span>
                <strong className="text-white font-medium">
                  Rectification:
                </strong>{" "}
                Request corrections to any inaccurate or incomplete data.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#c0c0c0] mt-1 sm:mt-1.5 text-xs">•</span>
              <span>
                <strong className="text-white font-medium">Erasure:</strong>{" "}
                Request the deletion of your personal data under certain
                conditions (e.g., when no longer necessary for the purpose it
                was collected).
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#c0c0c0] mt-1 sm:mt-1.5 text-xs">•</span>
              <span>
                <strong className="text-white font-medium">Objection:</strong>{" "}
                Object to certain data processing activities.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#c0c0c0] mt-1 sm:mt-1.5 text-xs">•</span>
              <span>
                <strong className="text-white font-medium">
                  Data Portability:
                </strong>{" "}
                Request that we transfer your data to another service provider.
              </span>
            </li>
          </ul>
          <p className="text-[#c0c0c0] text-sm sm:text-base leading-relaxed font-normal">
            To exercise any of these rights, please contact{" "}
            <a
              href="mailto:privacy@boilingproxies.com"
              className="text-[#2b6cb0] hover:text-[#3182ce] underline transition-colors"
            >
              privacy@boilingproxies.com
            </a>
            .
          </p>
        </ScrollReveal>

        {/* Section 7 */}
        <ScrollReveal yOffset={30} delay={0.45}>
          <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
            7. Data Sharing
          </h3>
          <p className="text-[#c0c0c0] text-sm sm:text-base leading-relaxed font-normal mb-3">
            We do not sell or share your personal data with third parties
            except:
          </p>
          <ul className="space-y-2.5 text-[#c0c0c0] text-sm sm:text-base leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="text-[#c0c0c0] mt-1 sm:mt-1.5 text-xs">•</span>
              <span>
                When necessary to provide services (e.g., payment processors or
                hosting providers).
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#c0c0c0] mt-1 sm:mt-1.5 text-xs">•</span>
              <span>
                When required by law or in response to legal proceedings.
              </span>
            </li>
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
