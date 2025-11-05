import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-[#F5F1E8]">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/ISWU_logo_v2.png"
              alt="It Starts With Us Logo"
              width={160}
              height={160}
              className="h-20 w-20 sm:h-20 sm:w-20"
              priority
            
            />
          </Link>
        </div>

        <nav className="flex items-center gap-6">
          <Link
            href="#about"
            className="text-sm font-medium text-[#1A1A1A] underline underline-offset-4 transition-colors hover:text-zinc-800 hover:no-underline"
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
            className="text-sm font-medium text-[#1A1A1A] underline underline-offset-4 transition-colors hover:text-zinc-800 hover:no-underline"
          >
            Contact
          </Link>
        </nav>

        <Link
          href="#get-involved"
          className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#1A1A1A] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
        >
          Get Involved
        </Link>
      </div>
    </header>
  );
}
