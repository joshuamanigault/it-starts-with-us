import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] w-full items-center justify-center bg-[#F5F1E8]">
      <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-8 flex flex-col items-center gap-4">
            <div className="relative h-32 w-32 sm:h-40 sm:w-40">
            </div>
          </div>

          {/* Headline */}
          <h1 className="mb-8 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl font-serif">
            Building stronger communities,
            <br />
            one student at a time
          </h1>

          {/* CTA Button */}
          <Link
            href="#get-involved"
            className="inline-flex items-center justify-center rounded-full bg-black px-10 py-4 text-lg font-semibold text-white transition-all hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  );
}
