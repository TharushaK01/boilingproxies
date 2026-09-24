import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function ImprintSection() {
  return (
    <section
      id="imprint"
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
              Imprint
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal yOffset={30} delay={0.2}>
          {/* Address Details */}
          <div className="text-[#c0c0c0] text-sm sm:text-base leading-relaxed space-y-1 mb-8 font-normal">
            <p className="text-white font-medium">Boiling Proxies</p>
            <p>Palembangweg 19</p>
            <p>1335 HH Almere</p>
            <p>Netherlands</p>
            <p className="pt-2">
              Email:{" "}
              <a
                href="mailto:info@boilingproxies.com"
                className="text-[#2b6cb0] hover:text-[#3182ce] underline transition-colors"
              >
                info@boilingproxies.com
              </a>
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal yOffset={30} delay={0.3}>
          {/* Registration Numbers */}
          <div className="text-[#c0c0c0] text-sm sm:text-base leading-relaxed space-y-1 font-normal">
            <p>Chamber of Commerce Number: 88123677</p>
            <p>VAT Number: NL004544727B05</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
