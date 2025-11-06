import Image from "next/image";

interface Founder {
  name: string;
  title: string;
  bio: string;
  image?: string;
}

interface AboutSectionProps {
  founders?: Founder[];
}

export default function AboutSection({ founders }: AboutSectionProps) {
  // Default founders data if not provided via props
  const defaultFounders: Founder[] = [
    {
      name: "Ethan Edouard",
      title: "Co-Founder & Executive Director",
      bio: "Passionate about creating meaningful change through community engagement and educational empowerment.",
      image: "/images/founder1.jpg" // Placeholder path
    },
    {
      name: "Joshua Manigault", 
      title: "Co-Founder & Technical Director",
      bio: "Dedicated to building innovative solutions that connect students with impactful volunteer opportunities.",
      image: "/images/founder2.jpg" // Placeholder path
    }
  ];

  const foundersData = founders || defaultFounders;

  return (
    <section id="about" className="relative w-full bg-neutral-100 py-16 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
            About Us
          </h2>
          <div className="mx-auto h-1 w-20 bg-linear-to-r from-[#003E65] to-[#1A1A1A] rounded-full" />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Left Column - Founder Photos */}
          <div className="space-y-8">
            {foundersData.map((founder, index) => (
              <div 
                key={index}
                className="flex items-center gap-6 p-6 rounded-2xl bg-neutral-50 hover:bg-neutral-100 transition-colors duration-300"
              >
                {/* Founder Image */}
                <div className="shrink-0">
                  <div className="relative h-20 w-20 sm:h-24 sm:w-24">
                    {founder.image ? (
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        fill
                        className="rounded-full object-cover ring-4 ring-white shadow-lg"
                      />
                    ) : (
                      // Placeholder when no image is provided
                      <div className="h-full w-full rounded-full bg-linear-to-br from-[#003E65] to-[#1A1A1A] flex items-center justify-center ring-4 ring-white shadow-lg">
                        <span className="text-white font-semibold text-lg sm:text-xl">
                          {founder.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Founder Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#1A1A1A] mb-1">
                    {founder.name}
                  </h3>
                  <p className="text-sm font-medium text-[#003E65] mb-3">
                    {founder.title}
                  </p>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {founder.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Mission Content */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-[#1A1A1A] sm:text-3xl">
                Who We Are
              </h3>
              
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-neutral-700">
                  We are a student-driven organization dedicated to transforming how 
                  volunteer work is tracked, recognized, and celebrated in our communities.
                </p>
                
                <p className="text-base leading-relaxed text-neutral-600">
                  Founded by students who experienced firsthand the challenges of 
                  documenting volunteer hours, we recognized the need for a better solution 
                  that serves both volunteers and the organizations they support.
                </p>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="rounded-2xl bg-linear-to-br from-neutral-100 via-[#003E65]/10 to-blue-100 p-8 shadow-sm border border-[#003E65]/20">
              <h4 className="mb-4 text-xl font-semibold text-[#1A1A1A]">
                Our Mission
              </h4>
              <p className="text-lg leading-relaxed text-neutral-700 font-medium">
                "Our mission is to make tracking volunteer hours simple, transparent, 
                and impactful for both students and organizations."
              </p>
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mx-auto mt-16 h-px w-32 bg-linear-to-r from-transparent via-neutral-300 to-transparent" />
      </div>
    </section>
  );
}
