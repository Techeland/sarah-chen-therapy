import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-white border-b border-cream-300 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="font-display text-2xl text-charcoal-900 hover:text-sage-600 transition-colors"
          >
            Sarah Chen
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/services"
              className="text-charcoal-700 hover:text-sage-600 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-charcoal-700 hover:text-sage-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/faq"
              className="text-charcoal-700 hover:text-sage-600 transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/resources"
              className="text-charcoal-700 hover:text-sage-600 transition-colors"
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="text-charcoal-700 hover:text-sage-600 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <Button className="hidden md:inline-flex bg-sage-500 hover:bg-sage-600">
            Book Consultation
          </Button>
          <button className="md:hidden text-charcoal-900">Menu</button>
        </div>
      </div>
    </header>
  );
};
