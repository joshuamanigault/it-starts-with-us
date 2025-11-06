import Link from "next/link";

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
                  href="#about"
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
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.017 0C8.396 0 7.929.013 7.794.048 2.51.252.252 2.51.048 7.794.013 7.929 0 8.396 0 12.017c0 3.621.013 4.088.048 4.223.204 5.284 2.462 7.542 7.746 7.746.135.035.602.048 4.223.048 3.621 0 4.088-.013 4.223-.048 5.284-.204 7.542-2.462 7.746-7.746.035-.135.048-.602.048-4.223 0-3.621-.013-4.088-.048-4.223C23.782 2.462 21.524.204 16.24.048 16.105.013 15.638 0 12.017 0zm0 2.16c3.557 0 3.98.013 5.386.075 1.3.059 2.004.275 2.472.458.621.242 1.064.531 1.531.998.466.466.756.91.998 1.531.183.468.399 1.172.458 2.472.062 1.406.075 1.829.075 5.386 0 3.557-.013 3.98-.075 5.386-.059 1.3-.275 2.004-.458 2.472-.242.621-.531 1.064-.998 1.531-.466.466-.91.756-1.531.998-.468.183-1.172.399-2.472.458-1.406.062-1.829.075-5.386.075-3.557 0-3.98-.013-5.386-.075-1.3-.059-2.004-.275-2.472-.458-.621-.242-1.064-.531-1.531-.998-.466-.466-.756-.91-.998-1.531-.183-.468-.399-1.172-.458-2.472C2.173 15.997 2.16 15.574 2.16 12.017c0-3.557.013-3.98.075-5.386.059-1.3.275-2.004.458-2.472.242-.621.531-1.064.998-1.531.466-.466.91-.756 1.531-.998.468-.183 1.172-.399 2.472-.458C8.037 2.173 8.46 2.16 12.017 2.16zm0 3.373c-3.706 0-6.717 3.01-6.717 6.717 0 3.706 3.01 6.717 6.717 6.717 3.706 0 6.717-3.01 6.717-6.717 0-3.706-3.01-6.717-6.717-6.717zm0 11.073c-2.404 0-4.356-1.952-4.356-4.356 0-2.404 1.952-4.356 4.356-4.356 2.404 0 4.356 1.952 4.356 4.356 0 2.404-1.952 4.356-4.356 4.356zm6.584-11.845c-.863 0-1.562-.699-1.562-1.562 0-.863.699-1.562 1.562-1.562.863 0 1.562.699 1.562 1.562 0 .863-.699 1.562-1.562 1.562z" clipRule="evenodd" />
                </svg>
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
