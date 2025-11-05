import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-zinc-800 dark:bg-zinc-950/95 dark:supports-[backdrop-filter]:bg-zinc-950/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/ItStartsWithUs_logo.png"
              alt="It Starts With Us Logo"
              width={40}
              height={40}
              className="h-15 w-15"
            />
            <span className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
              It Starts With Us
            </span>
          </Link>
        </div>

        <nav className="flex items-center gap-6">
          <Link
            href="#about"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            About
          </Link>
          <Link
            href="#features"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            Features
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            Contact
          </Link>
          <Link
            href="#get-started"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
