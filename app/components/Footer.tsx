import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-800 bg-[#1A1A1A]">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              It Starts With Us
            </h3>
            <p className="text-sm text-neutral-300 max-w-xs">
              Empowering students to make a difference in their communities through meaningful volunteer opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="\#about"
                  className="text-sm text-neutral-300 hover:text-[#003E65] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-neutral-300 hover:text-[#003E65] transition-colors"
                >
                  Contact
                </Link>
              </li>
              {/* Space for future links */}
              {/* Uncomment as needed:
              <li>
                <Link
                  href="#blog"
                  className="text-sm text-neutral-600 hover:text-[#003E65] transition-colors"
                >
                  Blog
                </Link>
              </li>
              */}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/_itstartswithusorg/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-300 hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F] transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              {/* Space for future social links */}
              {/* Uncomment and modify as needed:
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-white border border-neutral-300 text-neutral-600 hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Follow us on Twitter"
              >
                <!-- Twitter Icon -->
              </a>
              */}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-neutral-700 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-neutral-300">
              © {currentYear} It Starts With Us. All rights reserved.
            </p>
            <p className="text-xs text-neutral-400">
              Building stronger communities, one student at a time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
