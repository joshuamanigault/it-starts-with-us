import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/iswu_logo.png"
              alt="It Starts With Us Logo"
              width={160}
              height={160}
              className="h-18 w-18 sm:h-18 sm:w-18"
              priority
            
            />
          </Link>
        </div>

        <nav className="flex items-center gap-6">
          <Link
            href="#about"
            className="text-sm font-medium text-[#1A1A1A] underline underline-offset-4 transition-colors hover:text-[#003E65] hover:no-underline"
          >
            About
          </Link>
          <Link
            href="#features"
            className="text-sm font-medium text-[#1A1A1A] underline underline-offset-4 transition-colors hover:text-[#003E65] hover:no-underline"
          >
            Features
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-[#1A1A1A] underline underline-offset-4 transition-colors hover:text-[#003E65] hover:no-underline"
          >
            Contact
          </Link>
        </nav>

        <a
          href="#waitlist"
          className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#1A1A1A] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
        >
          Get Involved
        </a>
      </div>
    </header>
  );
}
