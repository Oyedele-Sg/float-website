import Image from "next/image";

const Navbar = () => (
  <header className="w-full flex items-center justify-between px-4 py-3 shadow-sm sticky top-0 bg-white z-10">
    <div className="flex items-center gap-2">
      <Image src="/assets/logo.svg" alt="Float Logo" width={91} height={42} />
      
    </div>
    <nav className="hidden md:flex gap-8 text-sm font-medium">
      <a href="#" className="hover:text-primary">
        Home
      </a>
      <a href="#" className="hover:text-primary">
        About Us
      </a>
      <a href="#contact" className="hover:text-primary">
        Contact Us
      </a>
    </nav>
    <button className="md:hidden p-2" aria-label="Open menu">
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </header>
);

export default Navbar;
