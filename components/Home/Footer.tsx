import Link from "next/link";

type FooterLink = {
  label: string;
  href: string;
};

const quickLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "#products" },
  { label: "Customize", href: "#customize" },
  { label: "How it works", href: "#howitworks" },
];

const supportLinks: FooterLink[] = [
  { label: "Order", href: "#cart" },
  { label: "Contact", href: "#contact" },
  { label: "FAQs", href: "/" },
];

const socialLinks: FooterLink[] = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Twitter", href: "https://twitter.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-pinkDark mx-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-20">
        
        {/* About */}
        <div>
          <h3 className="font-semibold text-black text-xl mb-3">About Us</h3>
          <p className="text-sm text-pinkDark">
            We craft small batch chocolates and cakes with premium ingredients
            and a passion for details.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-xl mb-3">Quick Links</h3>
          <ul className="space-y-1">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-pinkDark hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-xl mb-3">Support</h3>
          <ul className="space-y-1">
            {supportLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-pinkDark hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-semibold text-xl mb-3">Connect</h3>
          <ul className="space-y-1">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_self"
                  className="text-sm font-medium text-pinkDark hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-pinkDark py-4 px-10 mx-10 text-left text-sm text-pinkDark">
        © CNC Bakery
      </div>
    </footer>
  );
}
