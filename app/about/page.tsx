import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal"; // Adjust import path if needed

export default function AboutSection() {
  return (
    <section
      id="about"
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
      <div className="relative z-10 max-w-4xl mx-auto text-left">
        <ScrollReveal yOffset={30} delay={0.1}>
          {/* Header with Diamond Icon */}
          <div className="flex items-center gap-3 mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-[32px] lg:text-[48px] font-semibold tracking-tight text-white">
              About us
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal yOffset={30} delay={0.2}>
          {/* Paragraph 1 */}
          <p className="text-[#c0c0c0c0] text-sm sm:text-base leading-relaxed mb-6 font-normal">
            Boiling Proxies is a leading provider of high-performance proxy
            solutions, dedicated to delivering secure, reliable, and scalable
            internet connectivity for businesses and individuals worldwide. With
            a strong focus on privacy, speed, and accessibility, we offer
            cutting-edge proxy services designed to meet the demands of modern
            internet users, from casual browsing to complex data scraping and
            large-scale network management.
          </p>
        </ScrollReveal>

        <ScrollReveal yOffset={30} delay={0.3}>
          {/* Paragraph 2 */}
          <p className="text-[#c0c0c0c0] text-sm sm:text-base leading-relaxed mb-8 font-normal">
            At Boiling Proxies, our mission is to empower our clients with the
            tools they need to stay competitive in a rapidly evolving digital
            landscape. Whether you're an enterprise needing extensive IP
            coverage, a researcher requiring access to geo-restricted content,
            or a professional aiming for maximum online anonymity, we have the
            expertise and infrastructure to support your needs.
          </p>
        </ScrollReveal>

        <ScrollReveal yOffset={30} delay={0.4}>
          {/* Key Values Heading */}
          <h3 className="text-base sm:text-lg font-semibold text-[#c0c0c0c0] mb-6">
            Our Key Values:
          </h3>

          {/* Key Values List */}
          <ul className="space-y-4 mb-10 text-[#c0c0c0c0] text-sm sm:text-base leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="text-[#c0c0c0c0] mt-1 sm:mt-1.5 text-xs">•</span>
              <span>
                <strong className="text-[#c0c0c0c0] font-semibold">
                  Privacy &amp; Security:
                </strong>{" "}
                We prioritize your online safety, ensuring your data remains
                confidential and your activities are protected from malicious
                entities.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#c0c0c0c0]mt-1 sm:mt-1.5 text-xs">•</span>
              <span>
                <strong className="text-[#c0c0c0c0] font-semibold">
                  Speed &amp; Performance:
                </strong>{" "}
                Our globally distributed network of proxies guarantees
                high-speed connections, minimizing latency while maximizing
                efficiency.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#c0c0c0c0] mt-1 sm:mt-1.5 text-xs">•</span>
              <span>
                <strong className="text-[#c0c0c0c0] font-semibold">
                  Customer-Centric Solutions:
                </strong>{" "}
                Tailored to fit your specific requirements, our services are
                designed to provide seamless experiences, backed by 24/7
                customer support.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-gray-400 mt-1 sm:mt-1.5 text-xs">•</span>
              <span>
                <strong className="text-[#c0c0c0c0] font-semibold">
                  Innovation:
                </strong>{" "}
                We continuously update and expand our services to stay ahead of
                industry trends, ensuring our clients always have access to the
                latest technologies.
              </span>
            </li>
          </ul>
        </ScrollReveal>

        <ScrollReveal yOffset={30} delay={0.5}>
          {/* Closing Statement */}
          <p className="text-[#c0c0c0c0] text-sm sm:text-base leading-relaxed font-normal">
            Choose Boiling Proxies, where your online needs meet unmatched
            performance and unparalleled security.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
