const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/favicon.png"
                alt="VyomGarud Logo"
                className="w-12 h-12 object-contain rounded-md shadow-sm"
              />

              <span className="text-2xl font-bold text-gradient select-none">
                VyomGarud
              </span>
            </div>

            <p className="text-muted-foreground mb-4 max-w-md">
              Military-grade UAV systems delivering precision, reliability, and
              advanced autonomy for mission-critical operations worldwide.
            </p>

            <div className="flex space-x-4">
              {["LinkedIn", "Twitter", "GitHub", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Capabilities", "Highlights", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
            <ul className="space-y-2">
              {[
                "Documentation",
                "Support",
                "Privacy Policy",
                "Terms of Service",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} VyomGarud. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm mt-4 md:mt-0">
              Built with precision and excellence
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
