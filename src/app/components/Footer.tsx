import Image from "next/image";

const Footer = () => (
  <footer className="bg-gradient-to-b from-[#0E0201] from-[33.65%] to-[#F90101] to-[100%] text-white py-10 px-4 sm:px-6 mt-10">
    <div className="max-w-6xl mx-auto flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Image
            src="/assets/logo-white.svg"
            alt="Float Logo"
            width={130}
            height={130}
          />
        </div>
        <div className="text-white text-sm max-w-[497px]">
          Float Transfer LLC is a registered financial technology company
          dedicated to transforming cross-border remittances with secure,
          efficient, and people-first digital solutions. Licensed. Regulated.
          Globally compliant. FloatTransfer meets the highest standards of
          KYC/AML policies and international money transfer laws
        </div>
      </div>
      <div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-4">
          <nav className="flex flex-wrap gap-6 text-sm font-semibold">
            <a href="#" className="hover:underline">
              Features
            </a>
            <a href="#" className="hover:underline">
              Help
            </a>
            <a href="#" className="hover:underline">
              Privacy
            </a>
          </nav>
          <div className="flex gap-4 items-center">
            {[
              { label: "x", href: "#", icon: "/assets/icons/socials/x.svg" },
              {
                label: "facebook",
                href: "#",
                icon: "/assets/icons/socials/facebook.svg",
              },
              {
                label: "linkedin",
                href: "#",
                icon: "/assets/icons/socials/linkedin.svg",
              },
              {
                label: "github",
                href: "#",
                icon: "/assets/icons/socials/github.svg",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="text-gray-400 hover:text-white"
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-gray-700 mb-4" />
        {/* Bottom row */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-0 md:justify-between md:items-center text-xs text-white">
          <span className="opacity-90">
            © 2077 Untitled UI. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
