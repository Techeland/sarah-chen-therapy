import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-xl mb-4">Sarah Chen Therapy</h3>
            <p className="text-charcoal-300 text-sm leading-relaxed">
              BACP-registered trauma therapist specialising in PTSD, childhood
              trauma and anxiety in Bristol.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services"
                  className="text-charcoal-300 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-charcoal-300 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-charcoal-300 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-charcoal-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-charcoal-300">
              <li>Bristol City Centre</li>
              <li>hello@sarahchentherapy.co.uk</li>
              <li>07700 900123</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-charcoal-700 mt-8 pt-8 text-sm text-charcoal-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; 2026 Sarah Chen Therapy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
