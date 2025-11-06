import Image from "next/image";

interface Logo {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface CommunityPartnersProps {
  logos: Logo[];
  showHeading?: boolean;
  headingText?: string;
  scrollSpeed?: number;
}

export default function CommunityPartners({ 
  logos, 
  showHeading = true, 
  headingText = "Our Community Partners",
  scrollSpeed = 30 
}: CommunityPartnersProps) {
  // Duplicate the logos multiple times to ensure seamless infinite loop
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="relative w-full bg-white py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {showHeading && (
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
              {headingText}
            </h2>
            <div className="mx-auto h-1 w-20 bg-linear-to-r from-[#003E65] to-[#1A1A1A] rounded-full" />
          </div>
        )}

        {/* Logo Scroll Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling Container */}
          <div className="overflow-hidden">
            <div 
              className="flex animate-scroll"
              style={{
                animationDuration: `${scrollSpeed}s`,
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="shrink-0 mx-4 sm:mx-6 lg:mx-8 flex items-center justify-center"
                >
                  <div className="relative w-24 h-16 sm:w-32 sm:h-20 lg:w-40 lg:h-24 p-4 bg-white rounded-lg shadow-sm border border-neutral-100 hover:shadow-md transition-shadow duration-300 flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width || 120}
                      height={logo.height || 60}
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-base text-neutral-600 max-w-2xl mx-auto">
            Proud to partner with organizations that share our commitment to community service and student empowerment.
          </p>
        </div>
      </div>
    </section>
  );
}
