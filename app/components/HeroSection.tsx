import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="mission" className="relative w-full bg-neutral-100 min-h-screen flex items-center justify-center py-4">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="text-center mb-8">
          {/* Logo */}
          <div className="mb-6 flex flex-col items-center gap-4 animate-fade-in [animation-delay:200ms]">
            <div className="relative h-24 w-24 sm:h-32 sm:w-32 transform hover:scale-105 transition-transform duration-300">
            </div>
          </div>

          {/* Headline */}
          <h1 className="mb-6 max-w-3xl mx-auto text-3xl font-bold leading-tight tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl animate-fade-in [animation-delay:600ms] transform hover:scale-[1.02] transition-all duration-300">
            <span className="inline-block animate-fade-in [animation-delay:800ms]">Building stronger</span><br />
            <span className="inline-block animate-fade-in [animation-delay:1000ms]">communities,</span><br />
            <span className="inline-block animate-fade-in [animation-delay:1200ms]">one student at a time</span>
          </h1>
        </div>

        {/* Mission Card Section */}
        <div className="relative mx-auto max-w-4xl animate-fade-in [animation-delay:1400ms]">
          {/* Main Card */}
          <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-xl transform hover:scale-[1.01] hover:shadow-2xl transition-all duration-500 group">
            {/* Gradient Accent */}
            <div className="absolute left-0 top-0 h-1 w-full bg-linear-to-r from-[#003E65] via-[#0077A8] to-[#a8d8ff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

            <div className="p-6 sm:p-8 lg:p-10">
              {/* Mission Statement */}
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-neutral-700 sm:text-xl">
                  It Starts With Us exists to spark a culture of service among
                  students by connecting young leaders with community initiatives. We help
                  transform compassion into action and create lasting impact. Together, we are Building
                  stronger communities today while nurturing the leaders of tomorrow.
                </p>
                
                <p className="text-lg leading-relaxed text-neutral-600">
                  Through collaborative programs and community engagement, we're fostering 
                  a new generation of leaders who will shape a more inclusive and sustainable future.
                </p>
              </div>

              {/* Call to Action */}
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#waitlist"
                  className="inline-flex items-center justify-center rounded-lg bg-[#1A1A1A] px-6 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-zinc-800 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] focus:ring-offset-2 transform active:scale-95"
                >
                  Get Involved
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-neutral-300 bg-transparent px-6 py-3 text-base font-medium text-[#1A1A1A] transition-all duration-300 hover:border-[#1A1A1A] hover:bg-neutral-50 hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] focus:ring-offset-2 transform active:scale-95"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Decorative Corner Element */}
            <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-linear-to-tr from-neutral-200/50 to-transparent blur-2xl" />
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="mx-auto mt-8 h-px w-32 bg-linear-to-r from-transparent via-neutral-300 to-transparent" />
      </div>
    </section>
  );
}
