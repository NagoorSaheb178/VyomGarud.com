import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

/* Navigation links */
const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Capabilities", href: "#capabilities" },
  { name: "Highlights", href: "#highlights" },
  { name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onHashChange = () => setIsMobileMenuOpen(false);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* LOGO SECTION */}
          <a
            href="#home"
            className="flex items-center gap-3 group"
            aria-label="VyomGarud - Home"
          >
            {/* Logo Image */}
            <img
              src="/favicon.png"
              alt="VyomGarud Logo"
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain transition-transform duration-300 group-hover:scale-110"
            />

            {/* Brand Name */}
            <span className="hidden sm:inline-block text-xl sm:text-3xl font-bold tracking-tight text-foreground">
              VyomGarud
            </span>
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-foreground/90 hover:text-primary transition-colors duration-200 font-medium group"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            <Button className="ml-2 bg-primary hover:bg-primary/90 text-white">
              Get Started
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              className="p-2 rounded-md text-foreground hover:bg-background/20 focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={() => setIsMobileMenuOpen((s) => !s)}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div id="mobile-navigation" className="md:hidden mt-2 pb-6">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Slide-down Menu */}
            <div className="relative z-50">
              <div className="mx-4 mt-4 rounded-lg glass p-4 animate-fade-in-down shadow-xl">
                <nav className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="px-3 py-2 rounded-md text-foreground hover:bg-primary/5 transition-colors duration-200 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}

                  <div className="pt-2">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                      Get Started
                    </Button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
